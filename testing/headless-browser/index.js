const puppeteer = require('puppeteer');

// IIFE
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1200,
      height: 600,
    },
    // slowMo: 250
  });

  // const context = await browser.defaultBrowserContext();
  const context = await browser.createIncognitoBrowserContext();

  await context.overridePermissions('https://google.com', ['geolocation']);

  const page = await context.newPage();
  await page.goto('https://google.com');

  await page.type('input.gLFyf.gsfi', 'hello world', { delay: 100 });
  await page.click('input.gNO89b');
  // await page.screenshot({ path: './image.png' });

  await browser.close();
})();
