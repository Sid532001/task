const puppeteer = require('puppeteer')


const loginlink = 'https://ssg2021.in/CitizenFeedback'
const state = 'Rajasthan'
const district = 'Bhilwara'
const age = JSON.stringify( Math.floor(Math.random()*60 +20))
const name = 'Aditya'
const mobile = '9177777777'
const gender = 'Male'


//connection to database

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 'central'
// });
 
// connection.connect();
 
// var results = connection.query('SELECT * from entries', function (error, results) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0]);
// });
 
// connection.end();


let browserOpen = puppeteer.launch(
    {
        headless : false,

        args : ['--start-maximized'],   
    }
)
    let page
    let broswer_close
    browserOpen.then(function(browserObj)
    {
        broswer_close = browserObj
        
        let browserOpenPromise = browserObj.newPage()
        return browserOpenPromise;
    }).then(function(newTab)
    {
        page = newTab
        let centralwebOpenPromise = newTab.goto(loginlink)
        return centralwebOpenPromise;
    }).then(function()
    {
        let stateIsEntered = page.type("select[name='StateCode']" , state , {delay : 50})
        return stateIsEntered
    }).then(function()
    {
        let districtIsEntered = page.type("select[id='District']" , district , {delay : 50})
        return districtIsEntered
    })
    .then(function()
    {
        let ageIsEntered = page.type("input[name='RespondentAge']" , age , {delay : 50})
        return ageIsEntered
    }).then(function()
    {
        let nameIsEntered = page.type("input[name='RespondentName']" , name , {delay : 50})
        return nameIsEntered
    })
    .then(function()
    {
        let mobileIsEntered = page.type("input[name='RespondentMobileNo']" , mobile , {delay : 50})
        return mobileIsEntered
    })
    .then(function()
    {
        let genderIsEntered = page.type("select[name='RespondentGender']" , gender , {delay : 50})
        return genderIsEntered
    }).then(function()
    {
        let proceedIsClicked = page.click("input[type='submit']" , true )
        return proceedIsClicked
    })
    .then(function()
    {
        let review_1 = page.click("input[name='FQ1']" , true )
        return review_1
    })
    .then(function()
    {
        let review_2 = page.click("input[name='FQ2']" , true )
        return review_2
    })
    .then(function()
    {
        let review_3= page.click("input[name='FQ3']" , true )
        return review_3
    })
    .then(function()
    {
        let review_4 = page.click("input[name='FQ4']" , true )
        return review_4
    })
    .then(function()
    {
        let review_5 = page.click("input[name='FQ5']" , true )
        return review_5
    }).then(function()
    {
        let submitIsClicked = page.click("input[value='Submit']" , true )
        return submitIsClicked
         }).then(function()
         {   
             page.close()
             broswer_close.close()
             
         })

