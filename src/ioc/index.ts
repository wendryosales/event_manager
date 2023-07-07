import { container } from 'tsyringe';
import { IocContainer } from 'tsoa';
import * as T from './types';
import EventService from '../services/eventService';
import EventRepository from '../repository/eventRepository';

// HERE: MAKE ALL CONTAINER REGISTERS
container.register(T.EVENT_SERVICE, {
  useClass: EventService,
});

container.register(T.EVENT_REPOSITORY, {
  useClass: EventRepository,
});

export const iocContainer: IocContainer = {
  get: <T>(controller: { prototype: T }): T => container.resolve<T>(controller as never),
};

export { container };
export default iocContainer;