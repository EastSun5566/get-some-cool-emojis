const emojiRegex = require('emoji-regex/RGI_Emoji')();

const getSomeCoolEmoji = require('../dist');
const EMOJIS = require('../src/__EMOJIS__');

describe('getSomeCoolEmoji', () => {
  it('should return empty string if arg is not a number', () => {
    const args = [
      '',
      'test',
      null,
      undefined,
      true,
      false,
      NaN,
      0,
      {},
      [],
      () => {},
    ];

    args.forEach((arg) => {
      expect(getSomeCoolEmoji(arg)).toBe('');
    });
  });

  it('should return empty string if arg is zero or negative', () => {
    const args = [
      0,
      -1,
      -3.3,
    ];

    args.forEach((arg) => {
      expect(getSomeCoolEmoji(arg)).toBe('');
    });
  });

  it('should return empty string if arg is not finite', () => {
    [Infinity, -Infinity].forEach((arg) => {
      expect(getSomeCoolEmoji(arg)).toBe('');
    });
  });

  it('should not throw if arg is too large', () => {
    [2 ** 32, 1e10].forEach((arg) => {
      expect(() => getSomeCoolEmoji(arg)).not.toThrow();
      expect(getSomeCoolEmoji(arg).length).toBeGreaterThan(0);
    });
  });

  describe('if arg is positive', () => {
    afterEach(() => jest.restoreAllMocks());

    it('should pick floor(arg) emojis from the emoji list', () => {
      const randoms = [0, 0.5, 0.999];
      const spy = jest.spyOn(Math, 'random');
      randoms.forEach((value) => spy.mockReturnValueOnce(value));

      const expected = randoms
        .map((value) => EMOJIS[Math.floor(value * EMOJIS.length)])
        .join('');

      expect(getSomeCoolEmoji(3.7)).toBe(expected);
    });
  });

  it('should have an emoji list that looks like emojis', () => {
    // emoji-regex can lag behind the latest Unicode data, so allow some misses
    const recognized = EMOJIS.filter((emoji) => emoji.match(emojiRegex) !== null);

    expect(recognized.length / EMOJIS.length).toBeGreaterThan(0.9);
  });
});
