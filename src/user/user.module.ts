import { Module } from '@nestjs/common';
import {
  UserService,
  UserSocialNetworkEvolutionLogService,
  UserSocialNetworkService,
} from './user.service';
import {
  UserController,
  UserSocialNetworkController,
  UserSocialNetworkEvolutionLogController,
} from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [
    UserController,
    UserSocialNetworkController,
    UserSocialNetworkEvolutionLogController,
  ],
  providers: [
    UserService,
    PrismaService,
    UserSocialNetworkService,
    UserSocialNetworkEvolutionLogService,
  ],
  exports: [UserService],
})
export class UserModule {}
