import { uuid } from '../uuid/uuid';

export const correlationId = () => uuid().replace(/-/g, '');
