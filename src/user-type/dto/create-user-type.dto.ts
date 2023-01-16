import { IsInt, IsString } from 'class-validator';
import { UserType } from '../entities/user-type.entity';

export class CreateUserTypeDto extends UserType {
  @IsInt()
  user_type_id: number;

  @IsString()
  type_name: string;

  @IsString()
  privilege: string;
}
