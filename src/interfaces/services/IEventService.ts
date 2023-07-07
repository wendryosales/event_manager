import { Events } from '@prisma/client';

interface IEventService {
  getEvents():Promise<Events[]>
}

export default IEventService;