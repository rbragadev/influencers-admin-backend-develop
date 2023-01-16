import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreatePaymentLogDto {
  /**
   * O partner_id vem de forma automatica através do banco de dados
   * Ele é autoincrementado,
   * @example 1
   */
  @IsInt()
  partner_id: number;

  /**
   * A data efetiva do pagamento de comissão para a partner
   * É usado para comparação dos logs,
   * @example 2022-12-29T00:00:00.000Z
   */
  @IsDateString()
  payment_date: string | Date;

  /**
   * O valor pago a partner pelas comissões
   * @example 1
   */
  @IsInt()
  payment_value: number;

  /**
   * O status do pagamento podendo ser:
   * @example conclude |
   */
  @IsString()
  payment_status: string;

  /**
   * O tipo do Beneficiario, pode ser Pessoa Fisica ou Juridica
   * @example PF
   */
  @IsString()
  beneficiary_type: string;

  /**
   * O Numero do CPF escrito sem espaços e sem pontuação
   * @example 00000000000
   */
  @IsString()
  beneficiary_cpf_number: string;

  /**
   * O Numero do RG escrito sem espaços e sem pontuação
   * @example 14519024
   */
  @IsString()
  beneficiary_rg_number: string;

  /**
   * O primeiro nome do beneficiario da conta
   * @example fulana
   */
  @IsString()
  beneficiary_first_name: string;

  /**
   * O ultimo nome do beneficiario da conta
   * @example zeltrana
   */
  @IsString()
  beneficiary_last_name: string;

  /**
   * O Numero do CNPJ escrito sem espaços e sem pontuação
   * @example 00000000000000
   */
  @IsString()
  beneficiary_cnpj_number: string;

  /**
   * O nome da empresa do beneficiario da conta
   * @example fulano servicos ltda
   */
  @IsString()
  beneficiary_company_name: string;

  /**
   * O nome fantasia do beneficiario da conta
   * @example beltrano servicos ltda
   */
  @IsString()
  beneficiary_company_fantasy_name: string;

  /**
   * O Numero do PIS escrito sem espaços e sem pontuação
   * @example 00000000000000
   */
  @IsString()
  partner_pis_number: string;

  /**
   * O nome do banco
   * @example banco itau
   */
  @IsString()
  bank_name: string;

  /**
   * O tipo de conta
   * @example poupanca | corrente
   */
  @IsString()
  bank_account_type: string;

  /**
   * O Numero da agencia escrito sem espaços e sem pontuação
   * @example 0001
   */
  @IsInt()
  bank_agency_number: number;

  /**
   * O Numero do digito escrito sem espaços e sem pontuação
   * @example 1
   */
  @IsInt()
  bank_agency_digit: number;

  /**
   * O Numero da conta escrito sem espaços e sem pontuação
   * @example 1111
   */
  @IsInt()
  bank_account_number: number;

  /**
   * O digito da conta escrito sem espaços e sem pontuação
   * @example 0001
   */
  @IsInt()
  bank_account_digit: number;

  /**
   * O tipo de chave pix
   * @example cpf | cnpj | email | aleatoria
   */
  @IsString()
  payment_pix_type: string;

  /**
   * Os dados da chave pix
   * @example 00000000000
   */
  @IsString()
  payment_pix_key: string;
}
