import puppeteer from "puppeteer";
import fetch from "node-fetch";

//initilieze Puppeteer
const browser = await puppeteer.launch({
  headless: false,
});

//Initialize New Page
const page = await browser.newPage();

async function main() {
  await page.goto("https://web.telegram.org/z/");

  let arr = [
    "@MOHDZAID24",
    "@imabhinaysingh",
    "@Mr_furqan08",
    "@zerosxer",
    "@alphazuhlu",
    "@AmericanNightmare07",
    "@Zolon",
    "@RohiniZingade",
  ];

  let i = 0;
  while (i <= arr.length + 1) {
    await page.reload();
    //goto the group
    await page.goto("https://web.telegram.org/z/#-609396430");
    await page.reload();
    await page
      .waitForSelector(".MiddleHeader", { visible: true })
      .then(() => console.log("Here it is"));
    await page.click(".MiddleHeader");

    await page
      .waitForSelector("#telegram-search-input", {
        timeout: 0,
      })
      .then(() => console.log("got it"));

    //click on the header

    await page.waitForSelector('button[title="Add users"]', { visible: true });
    await page.click('button[title="Add users"]');
    await page.waitForSelector("#new-members-picker-search", { visible: true });
    await page.type("#new-members-picker-search", arr[i]);

    await page.keyboard.press("Enter");
    await page.waitForSelector(".Checkbox");
    await page.click(".Checkbox");
    await page.waitForSelector(
      ".Button.FloatingActionButton.revealed.default.primary.round"
    );
    await page.click(
      ".Button.FloatingActionButton.revealed.default.primary.round"
    );

    await page.waitForSelector(".item-remove").then(page.click(".item-remove"));
    i++;
  }
}

main();
