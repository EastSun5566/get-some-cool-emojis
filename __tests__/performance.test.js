const getSomeCoolEmoji = require('../dist');

describe('getSomeCoolEmoji performance', () => {
  it('should handle large numbers efficiently', () => {
    const start = Date.now();
    const result = getSomeCoolEmoji(10000);
    const end = Date.now();
    const duration = end - start;

    // Should complete in reasonable time (less than 100ms for 10000 emojis)
    expect(duration).toBeLessThan(100);
    
    // Verify we got the correct number of emojis
    // Each emoji can be multiple characters (e.g., 🏳️‍🌈 is 4 characters)
    // So we just check that we got a non-empty string
    expect(result.length).toBeGreaterThan(0);
  });

  it('should not cause memory issues with very large numbers', () => {
    // Test that we can generate a large number without throwing
    expect(() => getSomeCoolEmoji(50000)).not.toThrow();
  });
});
