import { getHighlighter, setCDN } from 'shiki';

// eslint-disable-next-line import/prefer-default-export
export const createCode = async ({ number, emojis }: { number: number, emojis: string }) => {
  setCDN('https://unpkg.com/shiki/');
  const highlighter = await getHighlighter({ theme: 'github-dark', langs: ['javascript'] });

  return highlighter.codeToHtml(`
    import getSomeCoolEmojis from 'get-some-cool-emojis';

    getSomeCoolEmojis(${number}); // return ${number < 0 ? 0 : (Math.floor(number) || 0)} emojis | ${emojis}
    `, 'js');
};
