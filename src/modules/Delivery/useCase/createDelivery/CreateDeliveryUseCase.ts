import mongoose, { Document, ObjectId } from 'mongoose';
import { Delivery } from '../../Model/DeliveryModel';
import { Client } from '../../../Client/Model/ClientModel';
import { Product } from '../../../Product/Model/ProductModel';
import { ICreateClientDTO } from '../../../Client/DTO/IClient';
interface Client extends Document {
  orderPay: any;
  paymentMethod: any;
  deliveryAddress: any;
  telphone: any;
  _id: string;
  address: Array<object>;
}

interface Delivery extends Document {
  codDelivery: string | undefined;
  paymentMethod: string;
  deliveryAddress: string;
  product: string;
  telphone: string;
  orderPay: number;
  clientId: string;
  deliveryMen: string;
}

export class CreateDeliveryUseCase {
  async execute(
    clientId:string,
    product: Array<string>,
    deliveryAddress:string | ObjectId | undefined
  ): Promise<object | undefined> {
    // Verifica se o campo product é inválido ou vazio
    // console.log(clientId, product, deliveryAddress)
    if (!product || product.length === 0) {
      throw new Error('Insira um produto para continuar o pedido');
    }

    // Verifica se o deliveryAddress existe na collection de clientes
    const clientExist:any | ICreateClientDTO = await Client.findOne({ _id: clientId})
  .then(cliente => {
    // console.log(cliente)
    if (!cliente) {
      // cliente não encontrado
      console.error('Cliente não encontrado');
      return Error("Cliente não encontrado")
    }

    const endereco = cliente.endereco.find(e => e._id == deliveryAddress);
    if (!endereco) {
      // endereço não encontrado
      console.error('Endereço não encontrado');
      return Error("Endereço não encontrado")
    }

    return cliente;
  })
  .catch((err: string | undefined) => {
    // erro ao buscar cliente ou endereço
    console.error(err);
    return Error(err)
  });

  // Product


  const findProduct:number[] = await Product.find({'_id':{$in:product}})
  .select('price')
  .then(resultados => {
    const pricesArray = resultados.map(objeto => parseFloat(String(objeto.price)));
    return pricesArray;
    // console.log(pricesArray); // Exibe um array com os preços de todos os produtos
  })
  .catch(err => {
    console.error(err);
    return err;
  });
  // console.log( await findProduct);
  
  const sumOrder = (findProduct:Array<number>):number | void =>{
    let total = 0;
    const sum = findProduct.forEach((element)=> {
      // console.log(element + " no foreach")
      total+= element;
      // console.log(element + " depois do foreach")
    });
    return total;
  }

  // console.log( sumOrder(findProduct))





  // console.log(await clientExist)

    // Gera um código único para o pedido
    const year: number = new Date().getFullYear();
    const dayOfYear: number = new Date().getDay();
    const lastDelivery: Delivery | null | any = await Delivery.findOne().sort('-codDelivery')
    .then(result => {return result})
    const lastNumber: number = lastDelivery ? parseInt(lastDelivery.codDelivery.split('/')[2]) : 0;
    const newNumber: number = lastNumber + 1;
    const newCodDelivery: string = `DevE${year}${dayOfYear.toString().padStart(3, '0')}${newNumber.toString().padStart(4, '0')}`;

    // Faz a soma do pedido


    // Cria o novo pedido
    if(clientExist && clientExist.endereco.length !== 0){
      const delivery = new Delivery({
        codDelivery: newCodDelivery,
        deliveryAddress:clientExist.deliveryAddress,
        product,
        telphone:clientExist.telphone,
        orderPay:sumOrder(findProduct),
        clientId,
        status:'confirmado'
      });
      await delivery.save();
      return delivery;
    }
    return Error("Verifique os valores inseridos")
  
}
}



