<template>
  <main>
    <GithubCorner />

    <div class="container">
      <div class="jumbotron">
        <h1 class="display-3 text-center">
          {{ emojis }}
        </h1>

        <hr class="my-4">

        <div class="form-group mb-5">
          <input
            v-model="number"
            min="0"
            class="form-control form-control-lg"
            type="number"
            placeholder="✏️ Type some number..."
            autofocus
          >
        </div>

        <pre v-highlightjs="code"><code class="javascript" /></pre>

        <small class="d-block text-center mt-3">
          Made with ❤️ By
          <a
            href="https://github.com/EastSun5566"
            class="badge badge-pill badge-primary"
            target="_blank"
          >
            EastSun5566
          </a>
        </small>
      </div>
    </div>
  </main>
</template>

<script>
import getSomeCoolEmojis from 'get-some-cool-emojis';

import GithubCorner from './components/GithubCorner.vue';

export default {
  name: 'App',
  components: { GithubCorner },
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    emojis() {
      const { number } = this;
      return getSomeCoolEmojis(number) || 'GET SOME COOL EMOJIS 🔥';
    },

    code() {
      const { number, emojis } = this;
      const ReturnNumber = number < 0 ? 0 : (Math.floor(number) || 0);

      return `const getSomeCoolEmojis = require('get-some-cool-emojis'); // or import getSomeCoolEmojis from 'get-some-cool-emojis';

getSomeCoolEmojis(${number}); // return ${ReturnNumber} emojis | ${emojis}`;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: #eee;
  padding-top: 5vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
