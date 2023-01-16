import { IsInt, IsOptional, IsString } from 'class-validator';
import { PartnerLevel } from '../entities/partner-level.entity';

export class PartnerLevelDto extends PartnerLevel {
  /**
   * O partner_id vem de forma automatica através do banco de dados
   * Ele é linkado a tabela partner, e compartilhado com outros recursos,
   * @example 1
   */

  @IsInt()
  partner_level_id: number;

  /**
   * O level_name é o nome do nivel da Partner, Conta com as opções:
   *  glampartner | glampartner_Vip | glamstar | glamqueen | glamdiva | glamdiva_vip,
   * @example glampartner
   */
  @IsString()
  level_name: string;

  /**
   * O update_type ****
   * Ele é ***,
   * @example texto
   */
  @IsString()
  update_type: string;

  /**
   * A Imagem deve idealmente ser inserida diretamente no banco
   * Ele é do tipo string e utilize uma URL
   * @example "avatar_img": "https://glampartners-stage.web.app/assets/images/ranks/icone-coroa-glampartner-vip.png"
   */
  @IsOptional()
  @IsString()
  avatar_img: string;

  /**
   * O Status pode ser ativo ou inativo
   * @example active | inactive
   */
  @IsOptional()
  @IsString()
  status_level: string;
}
