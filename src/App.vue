<template>
  <div class="app">
    <div class="todo-wrapper">
      <app-header></app-header>
      <todo-input v-on:todo:add="addTodo"></todo-input>
      <todo-item  v-for="todo in todos" v-bind:todo="todo" v-on:todo:remove="removeTodo" :key="todo.id"></todo-item>
    </div>
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.css"></style>
