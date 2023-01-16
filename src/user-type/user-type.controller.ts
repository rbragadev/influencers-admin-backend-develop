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
  PartnerLevelService,
  UserTypeService,
  SocialNetworkService,
} from './user-type.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { PartnerLevelDto } from 'src/user-type/dto/partner-level.dto';
import { ApiTags } from '@nestjs/swagger';
import { SocialNetworkDto } from './dto/social-network.dto';

@ApiTags('administrative')
@Controller('user-type')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) {}

  @Post()
  create(@Body() createUserTypeDto: CreateUserTypeDto) {
    return this.userTypeService.createUserType(createUserTypeDto);
  }

  @Get()
  findAll() {
    return this.userTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserTypeDto: UpdateUserTypeDto,
  ) {
    return this.userTypeService.update(+id, updateUserTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTypeService.remove(+id);
  }
}

@ApiTags('administrative')
@Controller('partner-level')
export class PartnerLevelController {
  constructor(private readonly partnerLevel: PartnerLevelService) {}
  // Administrative Methods for Partners
  @Post()
  create(@Body() createParnerLevel: PartnerLevelDto) {
    return this.partnerLevel.create(createParnerLevel);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartnerLevel: PartnerLevelDto) {
    return this.partnerLevel.update(+id, updatePartnerLevel);
  }

  @Get()
  findAll() {
    return this.partnerLevel.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnerLevel.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerLevel.remove(+id);
  }
}

@ApiTags('administrative')
@Controller('social-network')
export class SocialNetworkController {
  constructor(private readonly socialNetwork: SocialNetworkService) {}

  @Post()
  create(@Body() createSocialNetwork: SocialNetworkDto) {
    return this.socialNetwork.create(createSocialNetwork);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSocialNetwork: SocialNetworkDto,
  ) {
    return this.socialNetwork.update(+id, updateSocialNetwork);
  }

  @Get()
  findAll() {
    return this.socialNetwork.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialNetwork.findOne(+id);
  }
}
