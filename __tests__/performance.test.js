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
    // Each emoji is typically 1-15 characters (max observed in dataset)
    // So we expect at least 10000 characters (bare minimum)
    expect(result.length).toBeGreaterThanOrEqual(10000);
  });

  it('should handle very large numbers without errors', () => {
    // Test that we can generate a large number without throwing
    const result = getSomeCoolEmoji(50000);
    
    // Verify result is substantial
    expect(result.length).toBeGreaterThanOrEqual(50000);
  });
  
  it('should produce statistically consistent output lengths', () => {
    // While emoji selection is random, multiple runs should produce similar average lengths
    const count = 100;
    const result1 = getSomeCoolEmoji(count);
    const result2 = getSomeCoolEmoji(count);
    
    // Both results should have lengths within expected bounds
    // Emojis range from 1-15 characters (max in dataset), avg around 2-4
    const minExpectedLength = count * 1;   // at least 1 char per emoji
    const maxExpectedLength = count * 30;  // generous upper bound (2x max observed length)
    expect(result1.length).toBeGreaterThanOrEqual(minExpectedLength);
    expect(result1.length).toBeLessThanOrEqual(maxExpectedLength);
    expect(result2.length).toBeGreaterThanOrEqual(minExpectedLength);
    expect(result2.length).toBeLessThanOrEqual(maxExpectedLength);
    
    // The two results should have similar lengths (within 50% of each other)
    // due to statistical distribution of emoji selection
    const ratio = Math.max(result1.length, result2.length) / Math.min(result1.length, result2.length);
    expect(ratio).toBeLessThan(1.5);  // Results shouldn't differ by more than 50%
  });
});
