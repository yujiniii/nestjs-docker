import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.createBoard(createBoardDto);
  }

  findAll() {
    return this.boardRepository.findAllBoard();
  }

  findOne(id: number) {
    return this.boardRepository.findBoard(id);
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.updateBoard(id, updateBoardDto);
  }

  remove(id: number) {
    return this.boardRepository.deleteBoard(id);
  }
}
