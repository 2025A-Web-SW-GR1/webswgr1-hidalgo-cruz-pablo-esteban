import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private casas = [
    { id: 1, nombre: 'Casa 1' },
    { id: 2, nombre: 'Casa 2' },
  ];

  getCasa(idCasa: string | undefined) {
    if (!idCasa) {
      return this.casas;
    }
    const id = parseInt(idCasa);
    const casa = this.casas.find(c => c.id === id);
    return casa ? [casa] : null;
  }
}
