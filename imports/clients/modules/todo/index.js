import {TodoModule} from "./todo.module";
// Service
import {
    TodoCollectionService
} from "./todo.service";
// TodoApi
import TodoApi from "./api";
// TodoComponent
import {
    TodoComponent
} from "./client";
// TodoFilterComponents
import TodoFilterComponents from "./filter";
// TodoFormComponent
import TodoForm from "./form";
// TodoListComponent
import TodoListComponent from "./list";
// TodoSortComponent
import TodoSortComponent from "./sort";
console.log(`TodoModule`, TodoModule);
export default {
    TodoApi,
    TodoComponent,
    TodoCollectionService,
    TodoFilterComponents,
    TodoForm,
    TodoModule,
    TodoListComponent,
    TodoSortComponent
};
