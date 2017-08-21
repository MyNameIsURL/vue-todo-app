import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';

export default {
  name: 'app',
  data() {
    return {
      todos: [
        {id: 0, text: "Make dinner tonight!"},
        {id: 1, text: "Fold the laundry."},
        {id: 2, text: "Learn to make an Angular app!"}
      ],
      nextId: 3
    };
  },
  components: {
    AppHeader,
    TodoInput
  },
  methods: {
    addTodo(text) {
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
    }
  }
}
