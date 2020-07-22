const emojiRegex = require('emoji-regex')();

const getSomeCoolEmoji = require('../src/index');

describe('getSomeCoolEmoji function', () => {
  test('arg is number', () => {
    expect(getSomeCoolEmoji(0)).toBe('');
    expect(getSomeCoolEmoji(-3)).toBe('');
    expect(getSomeCoolEmoji(-1.3)).toBe('');
    expect(getSomeCoolEmoji(5)).toMatch(emojiRegex);
    expect(getSomeCoolEmoji(2.3)).toMatch(emojiRegex);
  });

  test('arg is not number', () => {
    expect(getSomeCoolEmoji('')).toBe('');
    expect(getSomeCoolEmoji('test')).toBe('');
    expect(getSomeCoolEmoji(null)).toBe('');
    expect(getSomeCoolEmoji(undefined)).toBe('');
    expect(getSomeCoolEmoji(true)).toBe('');
    expect(getSomeCoolEmoji(false)).toBe('');
    expect(getSomeCoolEmoji({})).toBe('');
    expect(getSomeCoolEmoji({ test: 'test' })).toBe('');
    expect(getSomeCoolEmoji([])).toBe('');
    expect(getSomeCoolEmoji(['test'])).toBe('');
    expect(getSomeCoolEmoji(() => {})).toBe('');
  });
});
