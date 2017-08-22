import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'app',
  data() {
    return {
      todos: [
        {id: 0, text: "Make dinner tonight!"},
        {id: 1, text: "Fold the laundry."},
        {id: 2, text: "Learn to make a Vue app!"}
      ],
      nextId: 3
    };
  },
  components: {
    AppHeader,
    TodoInput,
    TodoItem
  },
  methods: {
    addTodo(text) {
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id != id);
    }
  }
}
