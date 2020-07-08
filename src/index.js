const puppeteer = require("puppeteer");

const URL = "http://127.0.0.1:5500/src/index.html";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: "load" });

  await page.pdf({
    path: "./pdf/generated.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
})();
