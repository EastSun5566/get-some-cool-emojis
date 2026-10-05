const emojiRegex = require('emoji-regex/RGI_Emoji')();

const getSomeCoolEmoji = require('../dist');

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

  it('should return string and match emoji regex if arg is positive', () => {
    const args = [
      12,
      100,
      2.3,
    ];

    args.forEach((arg) => {
      expect(getSomeCoolEmoji(arg).match(emojiRegex)).not.toBeNull();
    });
  });
});
