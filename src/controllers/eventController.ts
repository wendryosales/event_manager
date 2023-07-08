import { Events } from '@prisma/client';
import { Body, Controller, Get, Post, Put, Route, Tags } from 'tsoa';
import { inject, injectable } from 'tsyringe';
import IEventService from '../interfaces/services/IEventService';
import { EVENT_SERVICE } from '../ioc/types';
import { ICreateEvent } from '../types/events';

@injectable()
@Route('events')
@Tags('Events')
export class EventController extends Controller {
  private _service: IEventService;

  constructor(@inject(EVENT_SERVICE) service: IEventService) {
    super();
    this._service = service;
  }

  @Get('/')
  getEvents(): Promise<Events[]> {
    return this._service.getEvents();
  }

  @Post('/')
  createEvent(
    @Body() body: ICreateEvent,
  ): Promise<Events> {
    return this._service.createEvent(body);
  }

  @Put('{eventId}')
  updateEvent(
    eventId: number,
    @Body() body: Partial<ICreateEvent>,
  ): Promise<Events> {
    return this._service.updateEvent(eventId, body);
  }
}

export default EventController;