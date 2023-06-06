import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReceiversModule } from './receivers/receivers.module';
import { APP_GUARD } from '@nestjs/core';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresSqlConnection } from './config/ormconfig';
import { KeycloakModule } from './keycloak/keycloak.module';
import { KeycloakConfigService } from './keycloak/keycloak.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ReceiversModule,
    TypeOrmModule.forRootAsync(PostgresSqlConnection),
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [KeycloakModule],
    }),
    KeycloakModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
