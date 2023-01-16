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
  PartnerEvolutionLogService,
  PartnerPaymentService,
  PartnerService,
  PaymentLogService,
} from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreatePartnerPaymentDto } from './dto/create-partner-payment.dto';
import { UpdatePartnerPaymentDto } from './dto/update-partner-payment.dto';
import { CreatePaymentLogDto } from './dto/create-payment-log.dto';
import { UpdatePaymentLogDto } from './dto/update-payment-log.dto';
import { CreatePartnerEvolutionLogDto } from './dto/create-partner-evolution-log.dto';
import { UpdatePartnerEvolutionLogDto } from './dto/update-partner-evolution-log.dto';
@ApiTags('partners')
@ApiBearerAuth()
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Post()
  create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnerService.create(createPartnerDto);
  }

  @Get()
  findAll() {
    return this.partnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartnerDto: UpdatePartnerDto) {
    return this.partnerService.update(+id, updatePartnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerService.remove(+id);
  }
}

@ApiTags('partners')
@Controller('partner-payment')
export class PartnerPaymentController {
  constructor(private readonly partnerPaymentService: PartnerPaymentService) {}

  @Post()
  create(@Body() createPartnerPaymentDto: CreatePartnerPaymentDto) {
    return this.partnerPaymentService.create(createPartnerPaymentDto);
  }

  @Get()
  findAll() {
    return this.partnerPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnerPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePartnerPaymentDto: UpdatePartnerPaymentDto,
  ) {
    return this.partnerPaymentService.update(+id, updatePartnerPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerPaymentService.remove(+id);
  }
}

@ApiTags('partners')
@Controller('payment-log')
export class PaymentLogController {
  constructor(private readonly paymentLogService: PaymentLogService) {}

  @Post()
  create(@Body() createPaymentLogDto: CreatePaymentLogDto) {
    return this.paymentLogService.create(createPaymentLogDto);
  }

  @Get()
  findAll() {
    return this.paymentLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentLogService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentLogDto: UpdatePaymentLogDto,
  ) {
    return this.paymentLogService.update(+id, updatePaymentLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentLogService.remove(+id);
  }
}

@ApiTags('partners')
@Controller('partner-evolution-log')
export class PartnerEvolutionLogController {
  constructor(
    private readonly partnerEvolutionLogService: PartnerEvolutionLogService,
  ) {}

  @Post()
  create(@Body() createPartnerEvolutionLogDto: CreatePartnerEvolutionLogDto) {
    return this.partnerEvolutionLogService.create(createPartnerEvolutionLogDto);
  }

  @Get()
  findAll() {
    return this.partnerEvolutionLogService.findAll();
  }

  @Get(':id')
  findOneByLog(@Param('id') id: string) {
    return this.partnerEvolutionLogService.findOneByLog(+id);
  }

  @Get('/partner/:id')
  findOneByPartner(@Param('id') id: string) {
    return this.partnerEvolutionLogService.findAllByPartner(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePartnerEvolutionLogDto: UpdatePartnerEvolutionLogDto,
  ) {
    return this.partnerEvolutionLogService.update(
      +id,
      updatePartnerEvolutionLogDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerEvolutionLogService.remove(+id);
  }
}
