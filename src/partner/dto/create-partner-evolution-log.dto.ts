import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class CreatePartnerEvolutionLogDto {
  /**
   * O partner_id vem de forma automatica através do banco de dados
   * Ele é autoincrementado,
   * @example 1
   */
  @IsInt()
  partner_id: number;

  /**
   * Define o level anterior da partner de acordo com a tabela partner_level
   * @example 1
   */
  @IsInt()
  previous_level_id: number;

  /**
   * Define o level para o quel a partner ira de acordo com a tabela partner_level
   * @example 1
   */
  @IsInt()
  new_level_id: number;

  /**
   * Define o status atual da partner
   * @example active | inactive
   */
  @IsString()
  previous_partner_status: string;

  /**
   * Define o status atual para qual a partner ira
   * @example active | inactive
   */
  @IsString()
  new_partner_status: string;

  /**
   * Define a data de updata da partner
   * É usado para comparação dos logs,
   * @example 2022-12-29T00:00:00.000Z
   */
  @IsDateString()
  update_date: string | Date;

  /**
   * Define o tipo de atualização para o qual a partner ira
   * @example active | inactive
   */
  @IsString()
  update_type: string;

  /**
   * O user_id vem de forma automatica através do banco de dados
   * Ele é autoincrementado,
   * @example 1
   */
  @IsInt()
  user_id: number;

  /**
   * O log_id vem de forma automatica através do banco de dados
   * Ele é autoincrementado,
   * @example 1
   */
  @IsOptional()
  @IsInt()
  log_id: number;
}
