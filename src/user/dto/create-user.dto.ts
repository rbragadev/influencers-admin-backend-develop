import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  /**
   * O user_id vem de forma automatica através do banco de dados
   * Ele é autoincrementado,
   * @example 1
   */
  @IsInt()
  @IsOptional()
  user_id?: number;

  /**
   * O primeiro nome, utilizar ate 50 caracteres
   * @example Fulano
   */
  @IsString()
  first_name: string;

  /**
   * O sobrenome, utilizar ate 50 caracteres
   * @example Beltrano
   */
  @IsString()
  last_name: string;

  /**
   * O email será utilizado no processo de login e geração jwt
   * Ele sera o mesmo para usuario, admin ou partner
   * @example user@mail.com
   * O acesso tipo de acesso sera definido através das roles | user_type_id
   */
  @IsEmail()
  email: string;

  /**
   * O Password será utilizado no processo de login e geração jwt
   * Ele precisa conter de 4 a 20 caracteres
   * @example ABcd1234!!
   */
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  /**
   * O usuario pode ter (2)Tipos
   * ID(1) - Admin | ID(2) - User | ID(3) - Partner
   * @example 1
   */
  @IsInt()
  user_type_id: number;
}
