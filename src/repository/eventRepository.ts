import { Events } from '@prisma/client';
import prismaClient from '../database';
import IEventRepository from '../interfaces/repository/IEventRepository';
import { ICreateEvent } from '../types/events';

class EventRepository implements IEventRepository {
  private connection: typeof prismaClient;

  constructor(connection = prismaClient) {
    this.connection = connection;
  }
  updateEvent(eventId: number, body: Partial<ICreateEvent>): Promise<Events> {
    return this.connection.events.update({
      where: {
        id: eventId,
      },
      data: {
        ...body,
      },
    });
  }

  createEvent(event: ICreateEvent) {
    return this.connection.events.create({
      data: {
        ...event,
      },
    });
  }

  getEvents(): Promise<Events[]> {
    return this.connection.events.findMany();
  }
}

export default EventRepository;
