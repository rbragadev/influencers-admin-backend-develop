import { Injectable } from '@nestjs/common';
import { PartnerLevelDto } from 'src/user-type/dto/partner-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { SocialNetworkDto } from './dto/social-network.dto';

@Injectable()
export class UserTypeService {
  constructor(private readonly prisma: PrismaService) {}

  createUserType(createUserTypeDto: CreateUserTypeDto) {
    return this.prisma.user_type.create({
      data: {
        ...createUserTypeDto,
      },
    });
  }

  findAll() {
    return this.prisma.user_type.findMany();
  }

  findOne(user_type_id: number) {
    return this.prisma.user_type.findUnique({
      where: { user_type_id },
    });
  }

  update(user_type_id: number, updateUserTypeDto: UpdateUserTypeDto) {
    return this.prisma.user_type.update({
      where: { user_type_id },
      data: updateUserTypeDto,
    });
  }

  remove(user_type_id: number) {
    return this.prisma.user_type.delete({
      where: { user_type_id },
    });
  }
}

// Partner Tools Services
@Injectable()
export class PartnerLevelService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPartnerLevelDto: PartnerLevelDto) {
    return this.prisma.partner_level.create({
      data: {
        ...createPartnerLevelDto,
      },
    });
  }

  update(partner_level_id: number, updatePartnerLevel: PartnerLevelDto) {
    return this.prisma.partner_level.update({
      where: { partner_level_id },
      data: updatePartnerLevel,
    });
  }

  findAll() {
    return this.prisma.partner_level.findMany();
  }

  findOne(partner_level_id: number) {
    return this.prisma.partner_level.findUnique({
      where: { partner_level_id },
    });
  }

  remove(partner_level_id: number) {
    return this.prisma.partner_level.delete({
      where: { partner_level_id },
    });
  }
}

// Social Networks Tools Services
@Injectable()
export class SocialNetworkService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSocialNetworkDto: SocialNetworkDto) {
    return this.prisma.social_network.create({
      data: {
        ...createSocialNetworkDto,
      },
    });
  }

  update(social_network_id: number, updateSocialNetwork: SocialNetworkDto) {
    return this.prisma.social_network.update({
      where: { social_network_id },
      data: updateSocialNetwork,
    });
  }

  findAll() {
    return this.prisma.social_network.findMany();
  }

  findOne(social_network_id: number) {
    return this.prisma.social_network.findUnique({
      where: { social_network_id },
    });
  }

  remove(social_network_id: number) {
    return this.prisma.social_network.delete({
      where: { social_network_id },
    });
  }
}
