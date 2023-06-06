import { Module } from '@nestjs/common';
import { KeycloakService } from './keycloak.service';

@Module({
  providers: [KeycloakService],
})
export class KeycloakModule {}
