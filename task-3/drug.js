// Coding Challenge #3
// Main Task:
// ☑️ write code to call the API, using it to lookup each drug code given above and display the name of the drug

// Bonus Task:
//☑️ Call the API asynchronously, perhaps checking all five drug codes in parallel - Go to Line 58
//☑️ Show progress as each call is made and each response processed - Go to Line 31
//☑️ Update results only when all codes have been processed - Go to 49 to 59
//☑️ Handle any errors that the request receive - Go to line 40
//☑️ Display the code alongside the drug name - Go to line 57-59



const async = require('async');
const axios = require('axios');
const colors = require('colors');

const codes = ['369844bf', '64d064bf', '32d064bf', '372ce4bf', 'bbfcf518'];
const url = "https://api.universalcodes.msupply.org.nz/v1/items?code=";

const requestArray = [];

for (const drugItem of codes) {
  requestArray.push(`${url}${drugItem}`);
}

// map all urls on the list of urls
const functionArray = requestArray.map((opt) => {
  // invoke the get request using the following code.
  return (callback) => getApi(opt, callback);
});


let getApi = async (opt, callback) => {
  // Bonus Task 3.2 - Show progress as each call is made and each response processed
  const res = await axios.get(opt)
    .then((response) => {
      // handle success
      return response
    })
    .catch((error) => {
      // Bonus Task 3.4 - Handle any errors that you may receive
      console.log(colors.bold.bgRed(`❌❌❌❌ ${error}❌❌❌❌`));
    })
    .finally((response) => {
      // always executed
      console.log(`---${opt} request completed!---`);
    });


  // Using Async Await for Bonus Task 3.3 - Update results only when request is completed. 
  if (!res) {
    console.log(colors.bold.bgRed(`${opt} error occured.\n`));
    return false;
  }

  // Bonus Task 3.5 - Display the code alongside the drug name
  console.log(colors.bold.bgGreen(`✔️  Code : ${res.data[0].code}`));
  console.log(colors.bold.bgGreen(`Drug Name : ${res.data[0].name}\n`));
};



//  Bonus Task 3.1:  Call API Asynchronously and Check all five codes on parallel
async.parallel(
  functionArray, (err, results) => {
    if (err) {
      console.error('Error: ', err);
    } else {
      console.log('Results: ', `${results.length}\n`, results);
      
    }
  });