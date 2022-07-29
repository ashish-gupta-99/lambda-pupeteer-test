// import * as puppeteer from "puppeteer";

// export function getBrowserInstance(): Promise<puppeteer.Browser> {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: null,
//       });
//       resolve(browser);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }


// this module will be provided by the layer
// import  chromeLambda from "chrome-aws-lambda";
const chromium = require("chrome-aws-lambda");
import { Browser } from "puppeteer-core";

function getBrowserInstance(): Promise<Browser> {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
      });

      resolve(browser);
    } catch (error) {
      reject(error);
    }
  });
}