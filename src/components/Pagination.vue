<template>
  <div v-if="totalPages() > 0"class="pagination-wrapper">
    <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage - 1)"> < </span>
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePage(currentPage + 1)"> > </span>
  </div>
</template>

<script src="./pagination.js"></script>
<style src="./pagination.css"></style>
