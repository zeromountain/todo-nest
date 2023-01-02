import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import Todo from './models/todo.entity';
import { TodoModule } from './modules/todo';

import dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DATABASE_PASSWORD,
      database: 'todo_database',
      entities: [Todo],
      synchronize: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
