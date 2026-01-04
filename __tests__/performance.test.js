const getSomeCoolEmoji = require('../dist');

describe('getSomeCoolEmoji performance', () => {
  it('should handle large numbers efficiently', () => {
    const start = Date.now();
    const result = getSomeCoolEmoji(10000);
    const end = Date.now();
    const duration = end - start;

    // Should complete in reasonable time (less than 100ms for 10000 emojis)
    expect(duration).toBeLessThan(100);
    
    // Verify result is substantial - we asked for 10000 emojis
    // Each emoji can be 1-20+ characters depending on modifiers, ZWJ sequences, etc.
    // So we expect at least 10000 characters (bare minimum)
    expect(result.length).toBeGreaterThanOrEqual(10000);
  });

  it('should not cause memory issues with very large numbers', () => {
    // Test that we can generate a large number without throwing
    const result = getSomeCoolEmoji(50000);
    
    // Verify result is substantial
    expect(result.length).toBeGreaterThanOrEqual(50000);
  });
  
  it('should generate consistent output for the same count', () => {
    // While random, the number of selections should be deterministic
    const count = 100;
    const result1 = getSomeCoolEmoji(count);
    const result2 = getSomeCoolEmoji(count);
    
    // Both should have similar lengths (within reason due to randomness)
    // Emojis vary from 1-20+ characters, avg around 2-3
    const avgLength = (result1.length + result2.length) / 2;
    expect(Math.abs(result1.length - avgLength)).toBeLessThan(avgLength * 0.5);
    expect(Math.abs(result2.length - avgLength)).toBeLessThan(avgLength * 0.5);
  });
});
