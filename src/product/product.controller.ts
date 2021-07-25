import { NotFoundException } from '@nestjs/common';
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Post('/create')
    async createPost(@Res() res, @Body() body: CreateProductDTO) {
        let product = await this.productService.createProduct(body);
        return res.status(HttpStatus.OK).json({ message: "created", product });
    }

    @Get('/')
    async getProducts(@Res() res) {
        let products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({ message: "products", products });
    }

    @Get('/:id')
    async getProduct(@Param('id') id, @Res() res) {
        let product = await this.productService.getProduct(id);
        if(!product) throw new NotFoundException('product does not exist');
        return res.status(HttpStatus.OK).json({ message: "product", product });
    }

    @Put('/:id')
    async putProduct(@Param('id') id, @Res() res, @Body() body: CreateProductDTO) {
        let product = await this.productService.updateProduct(id, body);
        return res.status(HttpStatus.OK).json({ message: "product updated", product });
    }

    @Delete('/:id')
    async deleteProduct(@Param('id') id, @Res() res) {
        let product = await this.productService.deleteProduct(id);
        return res.status(HttpStatus.OK).json({ message: "product deleted", product });
    }
}
