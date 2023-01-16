import { Prisma } from '@prisma/client';

export class PartnerPayment
  implements Prisma.partner_paymentUncheckedCreateInput
{
  partner_id: number;
  beneficiary_type: string;
  beneficiary_cpf_number: string;
  beneficiary_rg_number: string;
  beneficiary_first_name: string;
  beneficiary_last_name: string;
  beneficiary_cnpj_number: string;
  beneficiary_company_name: string;
  beneficiary_company_fantasy_name: string;
  partner_pis_number: string;
  bank_name: string;
  bank_account_type: string;
  bank_agency_number: number;
  bank_agency_digit: number;
  bank_account_number: number;
  bank_account_digit: number;
  payment_pix_type: string;
  payment_pix_key: string;
}
