import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HttpModule } from '@nestjs/axios';
import {
  PromotedList,
  PromotedListSchema,
} from '../promoted-list/promoted-list.shema';
import { Coin, CoinSchema } from './coin.shema';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';
import { CustomThrottlerGuard } from './custom-throttler.guard';
import { Chain, ChainSchema } from '@modules/chains/coin.shema';
import {
  PromoteCoin,
  PromoteCoinSchema,
} from '@modules/promote-coin/promote-coin.shema';
import { ChainModule } from '@modules/chains/chains.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Coin.name, schema: CoinSchema },
      { name: Chain.name, schema: ChainSchema },
      { name: PromotedList.name, schema: PromotedListSchema },
      { name: PromoteCoin.name, schema: PromoteCoinSchema },
    ]),
    HttpModule,
    ChainModule,
  ],
  providers: [CoinsService, CustomThrottlerGuard],
  controllers: [CoinsController],
})
export class CoinsModule {}
