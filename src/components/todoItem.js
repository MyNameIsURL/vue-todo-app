export default {
  name: 'todo-item',
  props: ['todo'],
  methods: {
    removeTodo() {
      this.$emit('todo:remove', this.todo.id);
    }
  }
}
