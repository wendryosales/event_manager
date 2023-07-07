import { Events } from '@prisma/client';

interface IEventRepository {
  getEvents():Promise<Events[]>
}

export default IEventRepository;