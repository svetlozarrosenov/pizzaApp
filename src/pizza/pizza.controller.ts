import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { PizzaService } from './pizza.service';
import { PizzaListInterface } from './interfaces/pizza-list.interface';
import { OrderDto } from './dto/order.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('pizza')
export class PizzaController {
  public constructor(private pizzaService: PizzaService) {}

  @Get('get-all')
  public getAll(): PizzaListInterface | null {
    return this.pizzaService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('order')
  public order(@Body() orderDto: OrderDto) {
    return this.pizzaService.order(orderDto);
  }
}
