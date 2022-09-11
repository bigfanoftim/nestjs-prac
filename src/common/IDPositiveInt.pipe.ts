import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class IDPositiveIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value <= 0) {
      throw new HttpException('ID must be greater than ZERO', 400);
    }

    return value;
  }
}
