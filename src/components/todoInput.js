export default {
  name: 'todo-input',
  data() {
    return {
      text: ""
    };
  },
  methods: {
    addTodo() {
      this.$emit('todo:add', this.text);
      this.text = '';
    }
  }
}
