import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import Todo from './models/todo.entity';
import { TodoModule } from './modules/todo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DATABASE_PASSWORD,
      database: 'todo-database',
      entities: [Todo],
      synchronize: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
