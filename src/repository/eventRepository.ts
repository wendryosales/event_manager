import { Events } from '@prisma/client';
import IEventRepository from '../interfaces/repository/IEventRepository';
import prismaClient from '../database';

class EventRepository implements IEventRepository {
  private prismaClient: typeof prismaClient;

  constructor() {
    this.prismaClient = prismaClient;
  }

  public async getEvents(): Promise<Events[]> {
    return this.prismaClient.events.findMany();
  }
}

export default EventRepository;
