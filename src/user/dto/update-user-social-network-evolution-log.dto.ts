import { IsDateString, IsInt, IsOptional } from 'class-validator';

export class UpdateUserSocialNetworkEvolutionLogDto {
  /**
   * O item vem de forma automatica através do banco de dados
   * Ele é linkado a tabela partner, e compartilhado com outros recursos,
   * @example 1
   */
  @IsOptional()
  @IsInt()
  log_social_evolution_id: number;

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
   * O creation_date é a data de criação da rede social do usuario
   * É usado para comparação dos logs,
   * @example 2022-12-29T00:00:00.000Z
   */
  @IsDateString()
  update_date: string | Date;

  /**
   * O numero de seguidores de determinada rede social
   * @example 5000
   */
  @IsInt()
  followers: number;
}
