import { Module } from '@nestjs/common';
import {
  PartnerLevelService,
  SocialNetworkService,
  UserTypeService,
} from './user-type.service';
import {
  PartnerLevelController,
  UserTypeController,
  SocialNetworkController,
} from './user-type.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [
    UserTypeController,
    PartnerLevelController,
    SocialNetworkController,
  ],
  providers: [
    UserTypeService,
    PrismaService,
    PartnerLevelService,
    SocialNetworkService,
  ],
})
export class UserTypeModule {}
