import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  UserService,
  UserSocialNetworkEvolutionLogService,
  UserSocialNetworkService,
} from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import { CreateUserSocialNetworkDto } from './dto/user-social-network.dto';
import { CreateUserSocialNetworkEvolutionLogDto } from './dto/create-user-social-network-evolution-log.dto';
import { UpdateUserSocialNetworkEvolutionLogDto } from './dto/update-user-social-network-evolution-log.dto';

@ApiTags('users')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('find')
  findByEmail(@Body('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

@ApiTags('users')
@Controller('user-social-network')
export class UserSocialNetworkController {
  constructor(private readonly userSocialNetwork: UserSocialNetworkService) {}

  @Post()
  create(@Body() createUserSocialNetwork: CreateUserSocialNetworkDto) {
    return this.userSocialNetwork.create(createUserSocialNetwork);
  }

  @Get()
  findAll() {
    return this.userSocialNetwork.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserSocialNetworkDto,
  ) {
    return this.userSocialNetwork.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSocialNetwork.remove(+id);
  }
}

@ApiTags('users')
@Controller('user-social-network-evolution-log')
export class UserSocialNetworkEvolutionLogController {
  constructor(
    private readonly userSocialNetworkEvolutionLog: UserSocialNetworkEvolutionLogService,
  ) {}

  @Post()
  create(
    @Body()
    createUserSocialNetworkEvolutionLog: CreateUserSocialNetworkEvolutionLogDto,
  ) {
    return this.userSocialNetworkEvolutionLog.create(
      createUserSocialNetworkEvolutionLog,
    );
  }

  @Get()
  findAll() {
    return this.userSocialNetworkEvolutionLog.findAll();
  }

  @Get(':id')
  findOneByLog(@Param('id') id: string) {
    return this.userSocialNetworkEvolutionLog.findOneByLog(+id);
  }

  @Get('/partner/:id')
  findOneByPartner(@Param('id') id: string) {
    return this.userSocialNetworkEvolutionLog.findAllByPartner(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateUserSocialNetworkEvolutionLog: UpdateUserSocialNetworkEvolutionLogDto,
  ) {
    return this.userSocialNetworkEvolutionLog.update(
      +id,
      updateUserSocialNetworkEvolutionLog,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSocialNetworkEvolutionLog.remove(+id);
  }
}
