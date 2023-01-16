import { Partner } from '../entities/partner.entity';
import {
  IsDateString,
  IsInt,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePartnerDto extends Partner {
  /**
   * O partner_id vem de forma automatica através do banco de dados
   * Ele é autoincrementado,
   * @example 1
   */
  @IsInt()
  partner_id: number;

  /**
   * O partner_level_id define o level da partner de acordo com a tabela partner_level
   * @example 1
   */
  @IsInt()
  partner_level_id: number;

  /**
   * Define a data de criação da partner
   * É usado para comparação dos logs,
   * @example 2022-12-29T00:00:00.000Z
   */
  @IsDateString()
  creation_date: string | Date;

  /**
   * O primeiro nome da partner
   * @example fulana
   */
  @IsString()
  partner_first_name: string;

  /**
   * O segundo nome da partner
   * @example fulana
   */
  @IsString()
  partner_last_name: string;

  /**
   * O Numero do CPF escrito sem espaços e sem pontuação
   * @example 00000000000
   */
  @IsInt()
  partner_cpf_number: number;

  /**
   * O email da partner
   * @example partner@mail.com
   */
  @IsString()
  partner_email: string;

  /**
   * O telefone da partner
   * @example partner@mail.com
   */
  @IsInt()
  partner_phone: number;

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
  partner_password: string;

  /**
   * O status pode ser ativo ou inativo
   * @example active | inactive
   */
  @IsString()
  partner_status: string;

  /**
   * O nome da rua da partner
   * @example rua glambox
   */
  @IsString()
  partner_adress_street_name: string;

  /**
   * O numero da casa da partner
   * @example 12
   */
  @IsInt()
  partner_adress_street_number: number;

  /**
   * O complemento da casa da partner
   * @example ap201 b3
   */
  @IsString()
  partner_adress_street_complement: string;

  /**
   * O complemento da casa da partner
   * @example ap201 b3
   */
  @IsString()
  partner_adress_neighborhood: string;

  /**
   * A cidade da partner
   * @example sao paulo
   */
  @IsString()
  partner_adress_city: string;

  /**
   * O Estado da partner
   * @example sp
   */
  @IsString()
  partner_adress_state: string;

  /**
   * O País da partner
   * @example brasil
   */
  @IsString()
  partner_adress_country?: string;

  /**
   * O Numero do codigo postal da partner
   * @example 11111000
   */
  @IsInt()
  partner_adress_postal_code: number;

  /**
   * A url do Avatar da partner
   * Ele é do tipo string e utilize uma URL
   * @example "avatar_img": "https://glampartners-stage.web.app/assets/images/ranks/icone-coroa-glampartner-vip.png"
   */
  @IsString()
  partner_avatar: string;
}
