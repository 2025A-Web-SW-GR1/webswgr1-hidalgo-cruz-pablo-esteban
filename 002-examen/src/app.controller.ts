import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('casa')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCasa(@Query('idCasa') idCasa: string, @Res() res: Response) {
    const resultado = this.appService.getCasa(idCasa);
    if (resultado) {
      return res.status(200).json(resultado);
    } else {
      return res.status(404).send("No se encuentra");
    }
  }
}
