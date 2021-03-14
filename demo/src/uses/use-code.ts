import {
  ref,
  onMounted,
  watch,
  Ref,
} from 'vue';
import { getHighlighter, setCDN } from 'shiki';

const createCode = async ({ number, emojis }: { number: number, emojis: string }) => {
  setCDN('https://unpkg.com/shiki/');
  const highlighter = await getHighlighter({ theme: 'github-dark', langs: ['javascript'] });

  return highlighter.codeToHtml(`
    import getSomeCoolEmojis from 'get-some-cool-emojis';

    getSomeCoolEmojis(${number}); // return ${number < 0 ? 0 : (Math.floor(number) || 0)} emojis | ${emojis}
    `, 'js');
};

// eslint-disable-next-line import/prefer-default-export
export function useCode({ number, emojis }: {
  number: Ref<number>;
  emojis: Ref<string>;
}): { code: Ref<HTMLElement | null> } {
  const code = ref<HTMLElement | null>(null);

  const updateCode = async () => {
    code.value!.innerHTML = await createCode({
      number: number.value,
      emojis: emojis.value,
    });
  };

  onMounted(updateCode);

  watch(number, updateCode);

  return { code };
}
