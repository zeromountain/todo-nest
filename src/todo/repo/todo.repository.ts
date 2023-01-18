import { CustomRepository } from 'src/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';

@CustomRepository(Todo)
export class TodoRepository extends Repository<Todo> {}
