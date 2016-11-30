<style lang="sass">
$fonts: 'Avenir', Helvetica, Arial, sans-serif;

#app {
  font-family: $fonts;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 500px;

  ul {
    margin: 10px 0;
    padding: 0;
    list-style: none;
  }
}
</style>

<template lang="pug">
#app
  h1 Vue.js Todos
  input(v-model="newTodo", placeholder="get the milk", v-on:keyup.enter="add")
  ul
    list-item(v-for="(todo, index) in todos", 
      v-bind:title="todo", 
      v-on:remove="todos.splice(index, 1)")
</template>

<script>
const ListItem = require('./ListItem.vue');

module.exports = {
  name: 'app',
  data() {
    return {
      newTodo: '',
      todos: ['build an app', 'file expense report']
    }
  },
  components: {
    ListItem
  },
  methods: {
    add() {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
};
</script>
