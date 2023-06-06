import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReceiversModule } from './receivers/receivers.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ReceiversModule],
})
export class AppModule {}
