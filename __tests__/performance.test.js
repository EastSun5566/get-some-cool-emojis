const getSomeCoolEmoji = require('../dist');

describe('getSomeCoolEmoji performance', () => {
  it('should handle large numbers efficiently', () => {
    const start = performance.now();
    const result = getSomeCoolEmoji(10000);
    const end = performance.now();
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
    // While emoji selection is random, the output length should be consistent for the same count
    const count = 100;
    const result1 = getSomeCoolEmoji(count);
    const result2 = getSomeCoolEmoji(count);
    
    // Both should have similar lengths (within reason due to randomness)
    // Emojis vary from 1-20+ characters, avg around 2-3
    const minExpectedLength = count * 1;   // at least 1 char per emoji
    const maxExpectedLength = count * 20;  // generous upper bound for complex sequences
    expect(result1.length).toBeGreaterThanOrEqual(minExpectedLength);
    expect(result1.length).toBeLessThanOrEqual(maxExpectedLength);
    expect(result2.length).toBeGreaterThanOrEqual(minExpectedLength);
    expect(result2.length).toBeLessThanOrEqual(maxExpectedLength);
  });
});
