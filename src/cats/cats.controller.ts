import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { IDPositiveIntPipe } from 'src/common/IDPositiveInt.pipe';
import { CreateCatDao } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    throw new HttpException(
      { statusCode: HttpStatus.FORBIDDEN, message: 'fail', error: 'test' },
      HttpStatus.FORBIDDEN
    );
    return 'all cats';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe, IDPositiveIntPipe) id: number): string {
    return `id ${id} cat`;
  }

  @Post()
  @HttpCode(201)
  createOne(@Body() createCatDto: CreateCatDao): void {}
}
