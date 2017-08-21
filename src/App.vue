<template>
  <div class="app">
    <div class="todo-wrapper">
      <app-header></app-header>
      <todo-input v-on:todo:add="addTodo"></todo-input>
    </div>
  </div>
</template>

<script src="./app.js"></script>
<style src="./app.css"></style>
