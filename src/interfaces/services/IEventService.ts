import { Events } from '@prisma/client';
import { ICreateEvent } from '../../types/events';

interface IEventService {
  getEvents(): Promise<Events[]>
  createEvent(body: ICreateEvent): Promise<Events>
}

export default IEventService;