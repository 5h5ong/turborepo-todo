import { IsNumber } from 'class-validator';

export class SelectTodoDtio {
  @IsNumber()
  id: number;
}
