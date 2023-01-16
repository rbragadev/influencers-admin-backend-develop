import { Prisma } from '@prisma/client';

export class UserType implements Prisma.user_typeUncheckedCreateInput {
  user_type_id: number;
  type_name: string;
  privilege: string;
  user?: Prisma.userUncheckedCreateNestedManyWithoutUser_typeInput;
}
