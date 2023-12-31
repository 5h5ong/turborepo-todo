import { IsNotEmpty, IsString } from 'class-validator';
export class AddTodoDto {
  @IsNotEmpty()
  @IsString()
  text: string;
}
