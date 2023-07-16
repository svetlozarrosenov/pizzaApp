import { IsIn, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class PizzaDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['peperoni', 'Sicliana', 'Viennese', 'Vegetariana', 'Capricciosa'])
  pizzaName: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['small', 'big'])
  pizzaSize: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
