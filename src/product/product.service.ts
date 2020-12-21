import { Injectable } from '@nestjs/common';

import { ProductEntity } from './Product.entity';

@Injectable()
export class ProductService {

  // NOTE: Use entities within services, and DTO's for
  // network related requests/responses.

  // Should be serialized to match, rather than done via validation.

  public async getProductById(id: number): Promise<ProductEntity> {
    return {
      id,
      name: "Pen"
    };
  }
}
