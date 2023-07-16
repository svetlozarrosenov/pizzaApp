import { Injectable } from '@nestjs/common';
import { PizzaListInterface } from './interfaces/pizza-list.interface';
import { OrderDto } from './dto/order.dto';
import { PriceProvider } from './providers/price.provider';

@Injectable()
export class PizzaService {
  private pizzasList: PizzaListInterface;

  public constructor(private priceProvider: PriceProvider) {
    this.pizzasList = {
      Peperoni: {
        small: {
          price: 1.1,
        },
        big: {
          price: 1.6,
        },
      },
      Sicliana: {
        small: {
          price: 1.1,
        },
        big: {
          price: 1.6,
        },
      },
      Viennese: {
        small: {
          price: 1.1,
        },
        big: {
          price: 1.6,
        },
      },
      Vegetariana: {
        small: {
          price: 1.1,
        },
        big: {
          price: 1.6,
        },
      },
      Capricciosa: {
        small: {
          price: 1.1,
        },
        big: {
          price: 1.6,
        },
      },
    };
  }

  public getAll(): PizzaListInterface {
    return this.pizzasList;
  }

  public order(orderDto: OrderDto): number {
    return this.priceProvider.calculate(orderDto, this.pizzasList);
  }
}
