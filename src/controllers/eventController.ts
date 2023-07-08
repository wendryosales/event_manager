import { Controller, Get, Route, Tags } from 'tsoa';
import { Events } from '@prisma/client';
import { inject } from 'tsyringe';
import IEventService from '../interfaces/services/IEventService';
import { EVENT_SERVICE } from '../ioc/types';

@Route('events')
@Tags('Events')
export class EventController extends Controller {
  private _service: IEventService;

  constructor(@inject(EVENT_SERVICE) service: IEventService) {
    super();
    this._service = service;
  }

  @Get('/')
  public getEvents(): Promise<Events[]> {
    return this._service.getEvents();
  }
}

export default EventController;