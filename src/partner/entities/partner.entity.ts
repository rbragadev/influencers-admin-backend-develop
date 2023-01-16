import { Prisma } from '@prisma/client';

export class Partner implements Prisma.partnerUncheckedCreateInput {
  partner_id: number;
  partner_level_id: number;
  creation_date: string | Date;
  partner_first_name: string;
  partner_last_name: string;
  partner_cpf_number: number;
  partner_email: string;
  partner_phone: number;
  partner_password: string;
  partner_status: string;
  partner_adress_street_name: string;
  partner_adress_street_number: number;
  partner_adress_street_complement: string;
  partner_adress_neighborhood: string;
  partner_adress_city: string;
  partner_adress_state: string;
  partner_adress_country?: string;
  partner_adress_postal_code: number;
  partner_avatar: string;
  partner_evolution_log?: Prisma.partner_evolution_logUncheckedCreateNestedManyWithoutPartnerInput;
}
