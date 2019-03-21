const emojiRegex = require('emoji-regex')();

const getSomeCoolEmoji = require('../src/index');

describe('Test getSomeCoolEmoji function', () => {
  test('Argument is number', () => {
    expect(getSomeCoolEmoji(0)).toBe('');
    expect(getSomeCoolEmoji(-3)).toBe('');
    expect(getSomeCoolEmoji(-1.3)).toBe('');
    expect(getSomeCoolEmoji(5)).toMatch(emojiRegex);
    expect(getSomeCoolEmoji(2.3)).toMatch(emojiRegex);
  });

  test('Argument is not number', () => {
    expect(getSomeCoolEmoji('')).toBe('');
    expect(getSomeCoolEmoji('test123')).toBe('');
    expect(getSomeCoolEmoji(null)).toBe('');
    expect(getSomeCoolEmoji(undefined)).toBe('');
    expect(getSomeCoolEmoji(true)).toBe('');
    expect(getSomeCoolEmoji(false)).toBe('');
    expect(getSomeCoolEmoji({})).toBe('');
    expect(getSomeCoolEmoji({ test: 123 })).toBe('');
    expect(getSomeCoolEmoji([])).toBe('');
    expect(getSomeCoolEmoji(['test123'])).toBe('');
    expect(getSomeCoolEmoji(() => {})).toBe('');
  });
});
