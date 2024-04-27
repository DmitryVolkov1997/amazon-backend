import {Module} from '@nestjs/common'
import {PrismaService} from './prisma/prisma.service'
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from "@nestjs/config"
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PaginationModule } from './pagination/pagination.module';

@Module({
    imports: [AuthModule, ConfigModule.forRoot(), UserModule, ProductModule, ReviewModule, CategoryModule, OrderModule, StatisticsModule, PaginationModule],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {
}
