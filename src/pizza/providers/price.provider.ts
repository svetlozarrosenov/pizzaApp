import { Injectable } from '@nestjs/common';
import { OrderDto } from '../dto/order.dto';
import { PizzaListInterface } from '../interfaces/pizza-list.interface';

@Injectable()
export class PriceProvider {
  public calculate(orderDto: OrderDto, pizzaList: PizzaListInterface): number {
    let total = 0;
    if (!orderDto.orderList.length) {
      return total;
    }

    total = orderDto.orderList.reduce((totalVal, order): number => {
      const currentOrderPrice =
        pizzaList[order.pizzaName][order.pizzaSize].price;
      const currentOrderQuantity = order.quantity;

      return currentOrderPrice * currentOrderQuantity + totalVal;
    }, 0);

    return parseFloat(total.toFixed(2));
  }
}
