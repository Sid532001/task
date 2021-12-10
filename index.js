const puppeteer = require('puppeteer')
const loginlink = 'https://ssg2021.in/CitizenFeedback'
let state = 'Rajasthan'
let district = 'Bhilwara'
let age = JSON.stringify(Math.floor(Math.random() * 60 + 20))
let name = 'Aditya'
let mobile = '9177777777'
let gender = 'Male'

async function formfill() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized']
    });
    for (let i = 0; i < 1; i++) {
        const page2 = await browser.newPage();
        try {
            await Promise.all([
                await page2.goto('https://ssg2021.in/CitizenFeedback'),
                await page2.type("select[name='StateCode']", state, { delay: 50 }),
                await page2.type("select[id='District']", district, { delay: 50 }),
                await page2.type("input[name='RespondentAge']", age, { delay: 50 }),
                await page2.type("input[name='RespondentName']", name, { delay: 50 }),
                await page2.type("input[name='RespondentMobileNo']", mobile, { delay: 50 }),
                await page2.type("select[name='RespondentGender']", gender, { delay: 50 }),
                await page2.type("select[name='RespondentGender']", gender, { delay: 50 }),
                page2.waitForNavigation({ waitUntil: 'load' }),
                page2.click('[type=submit]', true),
                await page2.click("input[name='FQ1']", true),
                await page2.click("input[name='FQ2']", true),
                await page2.click("input[name='FQ3']", true),
                await page2.click("input[name='FQ4']", true),
                await page2.click("input[name='FQ5']", true),
                await page2.click("input[value='Submit']", true),
                page2.waitForNavigation({ waitUntil: 'load' }),
                await page2.close()
            ]);
        } catch (e) {
            console.log(e)
        }
    }
}

formfill()



