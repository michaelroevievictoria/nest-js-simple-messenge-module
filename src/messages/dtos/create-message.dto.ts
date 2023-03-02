import { IsString } from 'class-validator';

// DTO = Data transfer object

export class CreateMessageDto {
  @IsString()
  content: string;
}
