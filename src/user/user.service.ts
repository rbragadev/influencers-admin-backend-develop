import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserSocialNetworkDto } from './dto/user-social-network.dto';
import { CreateUserSocialNetworkEvolutionLogDto } from './dto/create-user-social-network-evolution-log.dto';

import { UpdateUserSocialNetworkEvolutionLogDto } from './dto/update-user-social-network-evolution-log.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  //Method exclusive for authentication
  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  findOne(user_id: number) {
    return this.prisma.user.findUnique({
      where: { user_id },
    });
  }

  update(user_id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { user_id },
      data: updateUserDto,
    });
  }

  remove(user_id: number) {
    return this.prisma.user.delete({
      where: { user_id },
    });
  }
}

//Services for user_social_network
@Injectable()
export class UserSocialNetworkService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserSocialNetworkDto: CreateUserSocialNetworkDto) {
    return this.prisma.user_social_network.create({
      data: {
        ...createUserSocialNetworkDto,
      },
    });
  }

  findAll() {
    return this.prisma.user_social_network.findMany();
  }

  update(partner_id: number, updateUserDto: CreateUserSocialNetworkDto) {
    return this.prisma.user_social_network.update({
      where: { partner_id },
      data: updateUserDto,
    });
  }

  remove(partner_id: number) {
    return this.prisma.user_social_network.delete({
      where: { partner_id },
    });
  }
}

@Injectable()
export class UserSocialNetworkEvolutionLogService {
  constructor(private readonly prisma: PrismaService) {}
  create(
    createUserSocialNetworkEvolutionLogDto: CreateUserSocialNetworkEvolutionLogDto,
  ) {
    return this.prisma.user_social_network_evolution_log.create({
      data: {
        ...createUserSocialNetworkEvolutionLogDto,
      },
    });
  }

  findAll() {
    return this.prisma.user_social_network_evolution_log.findMany();
  }

  findOneByLog(log_social_evolution_id: number) {
    return this.prisma.user_social_network_evolution_log.findUnique({
      where: { log_social_evolution_id },
    });
  }

  findAllByPartner(partner_id: number) {
    return this.prisma.user_social_network_evolution_log.findMany({
      where: { partner_id },
    });
  }

  update(
    log_social_evolution_id: number,
    updateUserSocialNetworkEvolutionDto: UpdateUserSocialNetworkEvolutionLogDto,
  ) {
    return this.prisma.user_social_network_evolution_log.update({
      where: { log_social_evolution_id },
      data: updateUserSocialNetworkEvolutionDto,
    });
  }

  remove(log_social_evolution_id: number) {
    return this.prisma.user_social_network_evolution_log.delete({
      where: { log_social_evolution_id },
    });
  }
}
