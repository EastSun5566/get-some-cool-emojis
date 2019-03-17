const emojiRegex = require('emoji-regex')();

const getSomeCoolEmoji = require('../src/index');

describe('測試 getSomeCoolEmoji 函式', () => {
  test('參數為數值', () => {
    expect(getSomeCoolEmoji(0)).toBe('');
    expect(getSomeCoolEmoji(-3)).toBe('');
    expect(getSomeCoolEmoji(5)).toMatch(emojiRegex);
  });

  test('參數為其他型態', () => {
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
