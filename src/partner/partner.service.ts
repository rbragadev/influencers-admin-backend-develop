import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { CreatePartnerPaymentDto } from './dto/create-partner-payment.dto';
import { CreatePaymentLogDto } from './dto/create-payment-log.dto';
import { UpdatePartnerPaymentDto } from './dto/update-partner-payment.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { UpdatePaymentLogDto } from './dto/update-payment-log.dto';
import { CreatePartnerEvolutionLogDto } from './dto/create-partner-evolution-log.dto';
import { UpdatePartnerEvolutionLogDto } from './dto/update-partner-evolution-log.dto';

@Injectable()
export class PartnerService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPartnerDto: CreatePartnerDto) {
    return this.prisma.partner.create({
      data: {
        ...createPartnerDto,
      },
    });
  }

  findAll() {
    return this.prisma.partner.findMany();
  }

  findOne(partner_id: number) {
    return this.prisma.partner.findUnique({
      where: { partner_id },
    });
  }

  update(partner_id: number, updatePartnerDto: UpdatePartnerDto) {
    return this.prisma.partner.update({
      where: { partner_id },
      data: updatePartnerDto,
    });
  }

  remove(partner_id: number) {
    this.prisma.partner.delete({
      where: { partner_id },
    });
  }
}

@Injectable()
export class PartnerPaymentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPartnerPaymentDto: CreatePartnerPaymentDto) {
    return this.prisma.partner_payment.create({
      data: {
        ...createPartnerPaymentDto,
      },
    });
  }

  findAll() {
    return this.prisma.partner_payment.findMany();
  }

  findOne(partner_id: number) {
    return this.prisma.partner_payment.findUnique({
      where: { partner_id },
    });
  }

  update(partner_id: number, updatePartnerPaymentDto: UpdatePartnerPaymentDto) {
    return this.prisma.partner_payment.update({
      where: { partner_id },
      data: updatePartnerPaymentDto,
    });
  }

  remove(partner_id: number) {
    this.prisma.partner_payment.delete({
      where: { partner_id },
    });
  }
}

@Injectable()
export class PaymentLogService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPaymentoLogDto: CreatePaymentLogDto) {
    return this.prisma.payment_log.create({
      data: {
        ...createPaymentoLogDto,
      },
    });
  }

  findAll() {
    return this.prisma.payment_log.findMany();
  }

  findOne(partner_id: number) {
    return this.prisma.payment_log.findUnique({
      where: { partner_id },
    });
  }

  update(partner_id: number, updatePaymentLogDto: UpdatePaymentLogDto) {
    return this.prisma.payment_log.update({
      where: { partner_id },
      data: updatePaymentLogDto,
    });
  }

  remove(partner_id: number) {
    this.prisma.payment_log.delete({
      where: { partner_id },
    });
  }
}

@Injectable()
export class PartnerEvolutionLogService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPartnerEvolutionLogDto: CreatePartnerEvolutionLogDto) {
    return this.prisma.partner_evolution_log.create({
      data: {
        ...createPartnerEvolutionLogDto,
      },
    });
  }

  findAll() {
    return this.prisma.partner_evolution_log.findMany();
  }

  findOneByLog(log_id: number) {
    return this.prisma.partner_evolution_log.findUnique({
      where: { log_id },
    });
  }

  findAllByPartner(partner_id: number) {
    return this.prisma.partner_evolution_log.findMany({
      where: { partner_id },
    });
  }

  update(
    log_id: number,
    updatePartnerEvolutionLogDto: UpdatePartnerEvolutionLogDto,
  ) {
    return this.prisma.partner_evolution_log.update({
      where: { log_id },
      data: updatePartnerEvolutionLogDto,
    });
  }

  remove(log_id: number) {
    this.prisma.partner_evolution_log.delete({
      where: { log_id },
    });
  }
}
