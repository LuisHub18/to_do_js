import './styles.css';
import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './class/todo.class.js';
// import { TodoList } from './class/todo-list.class.js';

export const todoList=new TodoList();

todoList.todos.forEach( crearTodoHtml); 

