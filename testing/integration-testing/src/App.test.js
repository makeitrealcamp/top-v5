import React from 'react';
import puppeteer from 'puppeteer';
import App from './App';


describe('App' , () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 250
    });
  });

  afterAll(async () => {
    browser.close()
  });

  it('renders learn react link', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    const element = await page.waitForSelector('.App-link');
    const href = await page.$eval('.App-link', el => el.href);
    const link = await page.$eval('.App-link', el => el.innerHTML);

    expect(element).toBeDefined();
    expect(href).toMatch('https://reactjs.org')
    expect(link).toMatch(/learn react/i);
  });

  it('renders list data correclty', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    const listElement = await page.$$('.App-list');

    expect(listElement).toHaveLength(3);
  });
});
