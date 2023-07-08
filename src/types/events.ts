import { Events } from '@prisma/client';
import { CreateModel } from './auxiliarModels';

export type ICreateEvent = CreateModel<Events>;

export type IUpdateEvent = Partial<ICreateEvent>;