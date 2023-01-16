import { Module } from '@nestjs/common';
import {
  PartnerEvolutionLogService,
  PartnerPaymentService,
  PartnerService,
  PaymentLogService,
} from './partner.service';
import {
  PartnerController,
  PartnerEvolutionLogController,
  PartnerPaymentController,
  PaymentLogController,
} from './partner.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [
    PartnerController,
    PartnerPaymentController,
    PaymentLogController,
    PartnerEvolutionLogController,
  ],
  providers: [
    PartnerService,
    PrismaService,
    PartnerPaymentService,
    PaymentLogService,
    PartnerEvolutionLogService,
  ],
})
export class PartnerModule {}
