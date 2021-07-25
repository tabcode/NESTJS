import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [ProductModule,
    MongooseModule.forRoot('mongodb+srv://tabcodet:tabcodet@cluster0.tazxq.mongodb.net/Products?retryWrites=true&w=majority',
      { useNewUrlParser: true }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
