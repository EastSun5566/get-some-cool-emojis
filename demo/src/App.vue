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
            v-model.number="number"
            min="0"
            class="form-control form-control-lg"
            type="number"
            placeholder="✏️ Type some number..."
            autofocus
          >
        </div>

        <pre v-highlightjs="code"><code class="javascript" /></pre>

        <Note />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// @ts-ignore
import getSomeCoolEmojis from 'get-some-cool-emojis';

import GithubCorner from './components/GithubCorner.vue';
import Note from './components/Note.vue';

@Component({
  components: {
    GithubCorner,
    Note,
  },
})
export default class App extends Vue {
  private number: number = 0;

  get emojis(): string {
    const { number } = this;
    return getSomeCoolEmojis(number) || 'GET SOME COOL EMOJIS 🔥';
  }

  get code(): string {
    const { number, emojis } = this;
    const ReturnNumber = number < 0 ? 0 : (Math.floor(number) || 0);

    return `const getSomeCoolEmojis = require('get-some-cool-emojis'); // or import getSomeCoolEmojis from 'get-some-cool-emojis';

getSomeCoolEmojis(${number}); // return ${ReturnNumber} emojis | ${emojis}`;
  }
}
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
