import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';
import { PriceProvider } from './providers/price.provider';

@Module({
  controllers: [PizzaController],
  providers: [PizzaService, PriceProvider],
})
export class PizzaModule {}
