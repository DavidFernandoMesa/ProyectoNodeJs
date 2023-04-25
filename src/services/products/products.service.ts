import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 24000,
      stock: 12,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const found = this.findOne(id);
    if (found) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = payload;
      return this.products[index];
    }
  }

  delete(id: number) {
    const foundDelete = this.products.findIndex((item) => item.id === id);
    let message = '';
    if (foundDelete > 0) {
      this.products.splice(foundDelete, 1);
      message = 'product deleted';
    } else {
      message = 'product not found';
    }
    return message;
  }
}
