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
  UseInterceptors,
} from '@nestjs/common';
import { IDPositiveIntPipe } from 'src/common/IDPositiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { CreateCatDao } from './create-cat.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  @Get()
  findAll() {
    // throw new HttpException(
    //   { statusCode: HttpStatus.FORBIDDEN, message: 'fail', error: 'test' },
    //   HttpStatus.FORBIDDEN
    // );
    return { cats: 'all cats' };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe, IDPositiveIntPipe) id: number): string {
    return `id ${id} cat`;
  }

  @Post()
  @HttpCode(201)
  createOne(@Body() createCatDto: CreateCatDao): void {}
}
