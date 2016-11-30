<style lang="sass">
li {
  margin-bottom: 5px;
  a, a:visited {
    color: red;
  }
  button {
    margin-left: 10px;
  }
}
</style>

<template lang="pug">
li
  a(href="#", v-on:click.prevent="log") {{ title }}
  button(v-on:click="$emit('remove')") X
</template>

<script>
module.exports = {
  name: 'list-item',
  props: ['title'],
  methods: {
    log() {
      console.log(this.title);
    }
  }
};
</script>
