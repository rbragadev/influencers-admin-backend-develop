import { Prisma } from '@prisma/client';

export class SocialNetwork
  implements Prisma.social_networkUncheckedCreateInput
{
  social_network_id: number;
  social_network_name: string;
  social_network_user_url_base: string;
  social_network_icon: string;
  status: string;
  user_social_network?: Prisma.user_social_networkUncheckedCreateNestedManyWithoutSocial_networkInput;
}
