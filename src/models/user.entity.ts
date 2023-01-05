import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, comment: '유저 아이디' })
  email: string;

  @Column({ type: 'varchar', length: 255, comment: '유저 비밀번호' })
  password: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: '생성일',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    comment: '수정일',
  })
  updatedAt: Date;
}

export default User;
