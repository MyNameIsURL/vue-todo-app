<template>
  <div class="app">
    <div class="todo-wrapper">
      <app-header></app-header>
      <todo-input v-on:todo:add="addTodo"></todo-input>
      <todo-item
        v-for="todo in visibleTodos"
        v-bind:visibleTodos="visibleTodos"
        v-bind:currentPage="currentPage"
        v-bind:todo="todo"
        v-on:todo:remove="removeTodo"
        :key="todo.id">
      </todo-item>
      <pagination
        v-bind:todos="todos"
        v-on:page:update="updatePage"
        v-bind:currentPage="currentPage"
        v-bind:pageSize="pageSize">
      </pagination>
    </div>
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.css"></style>
