## Overview

### Clone this repository 

### Setup for Task 2
1. From the root folder of repository, Go to `task-2/` directory. by entering this to your terminal: `$ cd task-2/`
2. Install dependencies using yarn / npm by running: `$ npm install` or `$ yarn install`
3. To see the output, run this command: `$ node loggedDrink.js`

### Task 2: Coding Challenge
Someone in the office has been tracking the drinks at tea breaks (nothing better to do?) Each day for a week they wrote down the person's name and what they drank and this valuable information is now available to you, in a big block of text! With a little coding you could parse this and produce answers to the vitally important questions which follow. 

You may wish to use the template which someone else in the office started and then gave up on: https://codepen.io/porangi/pen/rNxEmzR This is using nodejs - if you prefer to use a different language, feel free.

A link to your code, whichever platform you use, is important. If you aren't using an online tool, please email us the code instead.

`'Ron:black tea,Luna:peppermint,Neville:green tea,Neville:black tea,Hermione:lemon & ginger,Neville:espresso,Ron:peppermint,Neville:peppermint,Luna:espresso,Luna:espresso,Luna:mocha,Ron:black tea,Ron:mocha,Harry:long black,Neville:green tea,Hermione:green tea,Ron:hot water,Harry:espresso,Luna:lemon & ginger,Ron:green tea,Neville:hot water,Harry:lemon & ginger,Ron:mocha,Hermione:lemon & ginger,Luna:hot water,Luna:lemon & ginger,Harry:peppermint,Hermione:lemon & ginger,Neville:peppermint,Ron:lemon & ginger,Neville:flat white,Ron:peppermint,Neville:flat white,Ron:black tea,Neville:black tea,Neville:lemon & ginger,Luna:mocha,Harry:peppermint,Hermione:hot water,Harry:espresso,Ron:long black,Ron:lemon & ginger,Ron:long black,Neville:green tea,Ron:peppermint,Neville:mocha,Hermione:mocha,Neville:espresso,Harry:mocha,Ron:espresso,Luna:espresso,Luna:hot water,Harry:espresso,Harry:hot water,Ron:green tea,Neville:green tea,Luna:flat white,Harry:lemon & ginger,Luna:lemon & ginger,Luna:espresso,Neville:lemon & ginger,Hermione:black tea,Luna:espresso,Hermione:green tea,Harry:peppermint,Ron:peppermint,Luna:green tea,Harry:lemon & ginger,Hermione:lemon & ginger,Harry:hot water,Harry:green tea,Harry:hot water,Harry:espresso,Hermione:espresso,Luna:black tea,Neville:long black,Hermione:green tea,Neville:black tea,Hermione:long black,Ron:mocha,Luna:green tea,Hermione:espresso,Neville:mocha,Neville:mocha,Luna:peppermint,Luna:flat white,Neville:mocha,Neville:long black,Luna:black tea,Neville:green tea,Harry:peppermint,Harry:hot water,Ron:mocha,Hermione:long black,Neville:black tea,Harry:peppermint,Luna:mocha,Hermione:black tea,Luna:lemon & ginger,Luna:flat white,Neville:green tea,Luna:flat white,Luna:hot water,Harry:mocha,Ron:hot water,Luna:espresso,Harry:mocha,Harry:flat white,Hermione:flat white,Neville:green tea,Harry:flat white,Luna:green tea,Neville:long black,Harry:hot water,Hermione:flat white,Harry:flat white,Ron:espresso,Ron:flat white,Luna:green tea,Luna:flat white,Harry:green tea,Neville:peppermint,Harry:long black,Harry:green tea,Hermione:espresso'`

### Main Task
Parse and Produce answers to the vitally important questions which follow. 

Jap:
`What I did is to produce a dynamic JSON Object and count each item by name, drink and type of drink.
This is also produces the answers that the requirment needs:`

#### Output
```
-------enlistAllByName--------

 { Ron: 22, Luna: 29, Neville: 28, Hermione: 18, Harry: 28 }

-------enlistAllByDrink--------

 { 'black tea': 11,
  peppermint: 14,
  'green tea': 19,
  'lemon & ginger': 15,
  espresso: 17,
  mocha: 15,
  'long black': 9,
  'hot water': 12,
  'flat white': 13 }

-------enlistAllByType--------

 { tea: 59, coffee: 54, other: 12 }



😁 Who drank the most: Luna

☕ Popular drink: green tea

🍵 Popular type of drink: tea
```

<hr/>

### Setup for Task 3
1. From the root folder of repository, Go to `task-3/` directory. by entering this to your terminal: `$ cd task-3/`
2. Install dependencies using yarn / npm by running: `$ npm install` or `$ yarn install`
3. To see the output, run this command: `$ node drug.js`

### Task 3: Universal Drug Codes
I used public API from [https://sussol.github.io/universal-drug-codes-server](https://sussol.github.io/universal-drug-codes-server) and given a list of drug codes: 

`const codes = ['369844bf', '64d064bf', '32d064bf', '372ce4bf', 'bbfcf518'];`

#### Main Task
Write code to call the API, using it to lookup each drug code given above and display the name of the drug. 

#### Bonus Task!
Ideas for extending your solution or providing extra functionality:

- **Task 3.1:**  Call the API asynchronously, perhaps checking all five drug codes in parallel.
- **Task 3.2:**  Show progress as each call is made and each response processed
- **Task 3.3:**  Update results only when all codes have been processed
- **Task 3.4:**  Handle any errors that you may receive
- **Task 3.5:**  Display the code alongside the drug name

#### Output(running in asynchronously parallel)
```
---https://api.universalcodes.msupply.org.nz/v1/items?code=372ce4bf request completed!---
✔️  Code : 372ce4bf
Drug Name : Anti-venom immunoglobulin injection

---https://api.universalcodes.msupply.org.nz/v1/items?code=64d064bf request completed!---
✔️  Code : 64d064bf
Drug Name : Testosterone (enanthate) 200mg in 1 ml ampoule injection

---https://api.universalcodes.msupply.org.nz/v1/items?code=369844bf request completed!---
✔️  Code : 369844bf
Drug Name : Amoxicillin (trihydrate)  & clavula& 125mg tablet 

---https://api.universalcodes.msupply.org.nz/v1/items?code=bbfcf518 request completed!---
✔️  Code : bbfcf518
Drug Name : Paracetamol oral liquid 120mg/5ml

❌❌❌❌ Error: Request failed with status code 404❌❌❌❌
---https://api.universalcodes.msupply.org.nz/v1/items?code=32d064bf request completed!---
https://api.universalcodes.msupply.org.nz/v1/items?code=32d064bf error occured.
```



Roald Jap Ignacio. August 2020