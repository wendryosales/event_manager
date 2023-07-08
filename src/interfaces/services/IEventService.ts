import { Events } from '@prisma/client';
import { ICreateEvent, IUpdateEvent } from '../../types/events';

interface IEventService {
  getEvents(): Promise<Events[]>
  createEvent(body: ICreateEvent): Promise<Events>
  updateEvent(eventId: number, body: IUpdateEvent): Promise<Events>
}

export default IEventService;