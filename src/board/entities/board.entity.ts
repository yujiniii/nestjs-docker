import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface BoardAttributes {
  boardId: number;
  title: string;
  content: string;
  name: string;
  createAt: Date;
}

@Table({ tableName: 'board' })
export class BoardEntity
  extends Model<BoardAttributes, BoardAttributes>
  implements BoardAttributes
{
  @Column({
    field: 'board_id',
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  boardId: number;

  @Column({
    field: 'title',
    type: DataType.STRING(128),
  })
  title: string;

  @Column({
    field: 'content',
    type: DataType.STRING(500),
  })
  content: string;

  @Column({
    field: 'name',
    type: DataType.STRING(128),
  })
  name: string;

  @Column({
    field: 'created_at',
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createAt!: Date;
}
