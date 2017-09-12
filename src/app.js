import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';
import Pagination from './components/Pagination.vue'

export default {
  name: 'app',
  data() {
    return {
      todos: [
        {id: 0, text: "Make dinner tonight!"},
        {id: 1, text: "Fold the laundry."},
        {id: 2, text: "Learn to make a Vue app!"},
        {id: 3, text: "Todo # 3"},
        {id: 4, text: "Todo # 4"},
        {id: 5, text: "Todo # 5"},
        {id: 6, text: "Todo # 6"},
        {id: 7, text: "Todo # 7"},
        {id: 8, text: "Todo # 8"},
        {id: 9, text: "Todo # 9"},
        {id: 10, text: "Todo # 10"},
        {id: 11, text: "Todo # 11"},
        {id: 12, text: "Todo # 12"}
      ],
      nextId: 13,
      currentPage: 0,
      pageSize: 3,
      visibleTodos: []
    };
  },
  components: {
    AppHeader,
    TodoInput,
    TodoItem,
    Pagination
  },
  beforeMount: function() {
    this.updateVisibleTodos();
  },
  methods: {
    addTodo(text) {
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
      this.updateVisibleTodos();
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id != id);
      this.updateVisibleTodos();
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
    },
    updateVisibleTodos() {
      this.visibleTodos = this.todos.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

      // if we have 0 visible todos, go back a page
      if (this.visibleTodos.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage -1);
      }
    }
  }
}
