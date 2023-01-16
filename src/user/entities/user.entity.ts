import { Prisma } from '@prisma/client';

export class User implements Prisma.userUncheckedCreateInput {
  user_id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type_id: number;
  partner_evolution_log?: Prisma.partner_evolution_logUncheckedCreateNestedManyWithoutUserInput;
}
