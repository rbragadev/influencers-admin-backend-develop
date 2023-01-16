import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateUserSocialNetworkDto {
  /**
   * O partner_id vem de forma automatica através do banco de dados
   * Ele é linkado a tabela partner, e compartilhado com outros recursos,
   * @example 1
   */
  @IsInt()
  partner_id: number;

  /**
   * O social_network_id vem vem referenciado através do banco de dados
   * Ele é linkado a tabela social_network;
   * @example 1
   */
  @IsInt()
  social_network_id: number;

  /**
   * O nome de usario em determinada rede
   * @example partnervip
   */
  @IsString()
  partner_social_network_user_name: string;

  /**
   * O url do perfil na rede social
   * @example https://www.instagram.com/profile/partnervip
   */
  @IsString()
  partner_social_network_user_url: string;

  /**
   * O creation_date é a data de criação da rede social do usuario
   * É usado para comparação dos logs,
   * @example 2022-12-29T00:00:00.000Z
   */
  @IsDateString()
  creation_date: string | Date;

  /**
   * O status pode ser ativo ou inativo
   * @example active | inactive
   */
  @IsString()
  status: string;
}
