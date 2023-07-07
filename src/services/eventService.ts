import { inject, injectable } from 'tsyringe';
import { Events } from '@prisma/client';
import IEventService from '../interfaces/services/IEventService';
import IEventRepository from '../interfaces/repository/IEventRepository';
import { EVENT_REPOSITORY } from '../ioc/types';

@injectable()
class EventService implements IEventService {
  private _repository: IEventRepository;

  constructor(@inject(EVENT_REPOSITORY)repository: IEventRepository) {
    this._repository = repository;
  }
  getEvents(): Promise<Events[]> {
    return this._repository.getEvents();
  }
}

export default EventService;