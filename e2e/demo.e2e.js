const { test, expect } = require('@playwright/test');

const { BASE_URL, EXPECTED_SHA } = process.env;
const entry = BASE_URL ? './' : 'index.html';

test('serves this commit', async ({ request }) => {
  test.skip(!EXPECTED_SHA, 'only when checking a deployed commit');

  // right after a deploy the CDN can still serve the previous version
  await expect.poll(async () => {
    const res = await request.get(`build-info.json?t=${Date.now()}`);
    return res.ok() ? (await res.json()).sha : null;
  }, { timeout: 120_000, intervals: [3_000] }).toBe(EXPECTED_SHA);
});

test('loads the built library without errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto(entry);

  expect(await page.evaluate(() => typeof window.getSomeCoolEmojis)).toBe('function');
  expect(errors).toEqual([]);
});

test('shows the typed number of emojis', async ({ page }) => {
  // Math.random() === 0 always picks the first emoji, so the output is predictable
  await page.addInitScript(() => { Math.random = () => 0; });
  await page.goto(entry);
  const first = await page.evaluate(() => window.getSomeCoolEmojis(1));

  await page.locator('#number-input').fill('3');

  await expect(page.locator('#emoji-display')).toHaveText(first.repeat(3));
});
