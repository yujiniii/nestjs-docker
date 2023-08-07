import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BoardEntity } from './entities/board.entity';
import { UpdateBoardDto } from './dto/update-board.dto';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectModel(BoardEntity)
    private readonly board: typeof BoardEntity,
  ) {}

  async createBoard(body: CreateBoardDto) {
    await this.board.create(body);
    return 'ok';
  }

  async findAllBoard() {
    return await this.board.findAll();
  }

  async findBoard(boardId: number) {
    return await this.board.findOne({
      where: {
        boardId,
      },
    });
  }

  async deleteBoard(id: number) {
    await this.board.destroy({
      where: {
        boardId: id,
      },
    });
    return 'ok';
  }

  async updateBoard(boardId: number, body: UpdateBoardDto) {
    await this.board.update(body, {
      where: {
        boardId,
      },
    });
    return 'ok';
  }
}
