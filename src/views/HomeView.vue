<template>
  <div class="container">
    <AddTodo/>
    <FilterTodo/>
    <Todos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'
import AddTodo from '@/components/AddTodo.vue'
import FilterTodo from '@/components/FilterTodo.vue'

export default {
  name: 'HomeView',
  components: {
    Todos,
    AddTodo,
    FilterTodo
  }
}
</script>

<style>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
