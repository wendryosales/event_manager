import { Events } from '@prisma/client';
import { ICreateEvent } from '../../types/events';

interface IEventRepository {
  getEvents(): Promise<Events[]>
  createEvent(body: ICreateEvent): Promise<Events>
}

export default IEventRepository;