import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from 'src/entities/room.entity';
import { Repository } from 'typeorm';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>,
  ) {}

  // Create a new room
  async create(createRoomDto: CreateRoomDto): Promise<RoomEntity> {
    const newRoom = this.roomRepository.create(createRoomDto); // Create a new room instance
    return await this.roomRepository.save(newRoom); // Save the new room to the database
  }

  // Find all rooms
  async findAll(): Promise<RoomEntity[]> {
    return await this.roomRepository.find();
  }

  // Find one room by ID
  async findOne(id: string): Promise<RoomEntity> {
    const room = await this.roomRepository.findOne({ where: { id } });
    if (!room) {
      throw new NotFoundException(`Room with ID ${id} not found`);
    }
    return room;
  }

  // Update a room by ID
  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<RoomEntity> {
    const room = await this.findOne(id); // Ensure the room exists
    const updatedRoom = Object.assign(room, updateRoomDto);
    return await this.roomRepository.save(updatedRoom);
  }

  // Remove a room by ID
  async remove(id: string): Promise<void> {
    const room = await this.findOne(id); // Ensure the room exists
    await this.roomRepository.remove(room);
  }
}
