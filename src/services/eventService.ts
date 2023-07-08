import { Events } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IEventRepository from '../interfaces/repository/IEventRepository';
import IEventService from '../interfaces/services/IEventService';
import { EVENT_REPOSITORY } from '../ioc/types';
import { ICreateEvent } from '../types/events';

@injectable()
class EventService implements IEventService {
  private _repository: IEventRepository;

  constructor(@inject(EVENT_REPOSITORY) repository: IEventRepository) {
    this._repository = repository;
  }
  updateEvent(eventId: number, body: Partial<ICreateEvent>): Promise<Events> {
    return this._repository.updateEvent(eventId, body);
  }

  createEvent(body: ICreateEvent): Promise<Events> {
    return this._repository.createEvent(body);
  }

  getEvents(): Promise<Events[]> {
    return this._repository.getEvents();
  }
}

export default EventService;