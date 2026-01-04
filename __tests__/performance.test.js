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
  
  it('should generate output with reasonable length bounds for given count', () => {
    // While emoji selection is random, each output's length should fall within reasonable bounds for the same count
    const count = 100;
    const result1 = getSomeCoolEmoji(count);
    const result2 = getSomeCoolEmoji(count);
    
    // Both results should have lengths within expected bounds (within reason due to randomness)
    // Emojis range from 1-15 characters (max in dataset), avg around 2-4
    const minExpectedLength = count * 1;   // at least 1 char per emoji
    const maxExpectedLength = count * 30;  // generous upper bound (2x max observed length)
    expect(result1.length).toBeGreaterThanOrEqual(minExpectedLength);
    expect(result1.length).toBeLessThanOrEqual(maxExpectedLength);
    expect(result2.length).toBeGreaterThanOrEqual(minExpectedLength);
    expect(result2.length).toBeLessThanOrEqual(maxExpectedLength);
  });
});
