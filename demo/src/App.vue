<template>
  <main>
    <GithubCorner repo="get-some-cool-emojis" />

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

        <div ref="code" />
      </div>

      <Note />
    </div>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
} from 'vue';
import getSomeCoolEmojis from 'get-some-cool-emojis';

import { GithubCorner, Note } from './components';
import { createCode } from './utils';

export default defineComponent({
  name: 'App',
  components: {
    GithubCorner,
    Note,
  },
  setup() {
    const number = ref(0);
    const code = ref<HTMLElement | null>(null);

    const emojis = computed<string>(() => getSomeCoolEmojis(number.value) || 'GET SOME COOL EMOJIS 🔥');

    const updateCode = async () => {
      code.value!.innerHTML = await createCode({ number: number.value, emojis: emojis.value });
    };

    onMounted(updateCode);

    watch(number, updateCode);

    return { number, emojis, code };
  },
});
</script>

<style scoped>
main {
  background-color: #eee;
  padding-top: 5vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
