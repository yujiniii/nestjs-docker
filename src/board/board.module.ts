import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoardEntity } from './entities/board.entity';
import { BoardRepository } from './board.repository';

@Module({
  imports: [SequelizeModule.forFeature([BoardEntity])],
  controllers: [BoardController],
  providers: [BoardService, BoardRepository],
})
export class BoardModule {}
