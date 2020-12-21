import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ProductService } from './product.service';

import {
  GetProductByIdRequestDto,
  GetProductByIdResponseDto
} from './dtos';

// NOTE: Swagger documentation generating decorators:
@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  // NOTE: Decorators define the route of the endpoint, starting from
  // @Controller decorator definition.
  @ApiOkResponse({ description: 'Product found in database for specified Id.' })
  @ApiBadRequestResponse({ description: 'Id provided with wrong type.' })
  @Get(':id')
  async getProductById(@Param() params: GetProductByIdRequestDto): Promise<GetProductByIdResponseDto> {
    const { id } = params;

    const result = this.productService.getProductById(id);

    if (!result) {
      throw new NotFoundException('No data found from your request.')
    }

    return result;
  }
}
