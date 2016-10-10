import "./module";

// For generate form
import TodoForm from "./../form/";

// Service
import "./../api/service";

// Components
// todo list
import TodoListComponent from "./../list/client/";

// filter
import {
    TodoFilterCreatedByComponent,
    TodoFilterStatusComponent
} from "./../filter";

import {
    TodoSortComponent
} from "./../sort";

import "./../client/";

export default {
    TodoFilterCreatedByComponent,
    TodoFilterStatusComponent,
    TodoForm,
    TodoListComponent,
    TodoSortComponent
};
