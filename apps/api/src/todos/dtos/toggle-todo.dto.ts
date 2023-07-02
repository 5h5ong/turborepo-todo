import { IsNumber } from 'class-validator';

export class ToggleTodoDto {
  @IsNumber()
  id: number;
}
