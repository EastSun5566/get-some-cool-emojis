<template>
  <main class="container">
    <div class="jumbotron text-center">
      <h1 class="display-3">
        {{ emojis }}
      </h1>

      <hr class="my-4">

      <div class="form-group">
        <input
          v-model="number"
          min="0"
          class="form-control form-control-lg"
          type="number"
          placeholder="✏️ Type some number"
          autofocus
        >
      </div>

      <div v-html="marked" />
    </div>
  </main>
</template>

<script>
import getSomeCoolEmojis from 'get-some-cool-emojis';
import marked from 'marked';

export default {
  name: 'App',
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    emojis() {
      const { number } = this;
      return getSomeCoolEmojis(number) || 'GET SOME COOL EMOJI 🔥';
    },
    marked() {
      return marked(`

      const getSomeCoolEmojis = require("get-some-cool-emojis");
      // or import getSomeCoolEmojis from "get-some-cool-emojis";

      getSomeCoolEmojis(5); // return 5 emojis 🎉✨🔧🐛💩

      `, { sanitize: true });
    },
  },
};
</script>

<style lang="scss">
main {
  padding-top: 5vh;
}
</style>
