import { Prisma } from '@prisma/client';

export class PartnerLevel implements Prisma.partner_levelUncheckedCreateInput {
  partner_level_id: number;
  level_name: string;
  update_type: string;
  avatar_img: string;
  status_level: string;
  partner?: Prisma.partnerUncheckedCreateNestedManyWithoutPartner_levelInput;
}
