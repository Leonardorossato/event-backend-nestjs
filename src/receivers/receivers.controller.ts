import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReceiversService } from './receivers.service';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
import { Roles } from 'nest-keycloak-connect';

@Controller('receivers')
export class ReceiversController {
  constructor(private readonly receiversService: ReceiversService) {}

  @Post('/create')
  @Roles({ roles: [`realm:${process.env.KEYCLOAK_CLIENT_ID}-create`] })
  async create(@Body() createReceiverDto: CreateReceiverDto) {
    return this.receiversService.create(createReceiverDto);
  }

  @Get('/all')
  @Roles({ roles: [`realm:${process.env.KEYCLOAK_CLIENT_ID}-read`] })
  async findAll() {
    return this.receiversService.findAll();
  }

  @Get(':id')
  @Roles({ roles: [`realm:${process.env.KEYCLOAK_CLIENT_ID}-read`] })
  async findOne(@Param('id') id: number) {
    return this.receiversService.findOne(+id);
  }

  @Patch(':id')
  @Roles({ roles: [`realm:${process.env.KEYCLOAK_CLIENT_ID}-update`] })
  async update(
    @Param('id') id: number,
    @Body() updateReceiverDto: UpdateReceiverDto,
  ) {
    return this.receiversService.update(id, updateReceiverDto);
  }

  @Delete(':id')
  @Roles({ roles: [`realm:${process.env.KEYCLOAK_CLIENT_ID}-delete`] })
  async remove(@Param('id') id: number) {
    return this.receiversService.remove(id);
  }
}
