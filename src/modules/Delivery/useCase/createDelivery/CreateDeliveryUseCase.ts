import { Delivery } from '../../Model/DeliveryModel';
import { ICreateDeliveryDTO } from '../../DTO/IDelivery';

export class CreateClientUseCase{
  
  gerarProtocolo(): string {
      let ultimoNumeroGerado:number = 0;
      let ultimoDiaGerado = '';
      let dataAtual = new Date();
      let diaDoAno = (Math.ceil((dataAtual.getTime() - new Date(dataAtual.getFullYear(), 0, 1).getTime()) / 86400000)).toString().padStart(3, '0');
      let ano = dataAtual.getFullYear().toString();
      let dataFormatada = ano + diaDoAno;
      
      if (dataFormatada !== ultimoDiaGerado) {
        ultimoNumeroGerado = 0;
        ultimoDiaGerado = dataFormatada;
      }
      
      const numeroAleatorio = (++ultimoNumeroGerado).toString().padStart(6, '0');
      
      return `FM${dataFormatada}${numeroAleatorio}`;
  }

  async execute({
  }:ICreateDeliveryDTO){

}
}