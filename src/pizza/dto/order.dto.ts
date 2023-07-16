import { IsNotEmpty, IsArray, ArrayContains } from 'class-validator';
import { PizzaDto } from './pizza.dto';

export class OrderDto {
  @IsNotEmpty()
  @IsArray()
  @ArrayContains([PizzaDto])
  orderList: Array<PizzaDto>;
}
