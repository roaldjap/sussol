// Coding Challenge #2
var _ = require("underscore");

const drinkLog = 'Ron:black tea,Luna:peppermint,Neville:green tea,Neville:black tea,Hermione:lemon & ginger,Neville:espresso,Ron:peppermint,Neville:peppermint,Luna:espresso,Luna:espresso,Luna:mocha,Ron:black tea,Ron:mocha,Harry:long black,Neville:green tea,Hermione:green tea,Ron:hot water,Harry:espresso,Luna:lemon & ginger,Ron:green tea,Neville:hot water,Harry:lemon & ginger,Ron:mocha,Hermione:lemon & ginger,Luna:hot water,Luna:lemon & ginger,Harry:peppermint,Hermione:lemon & ginger,Neville:peppermint,Ron:lemon & ginger,Neville:flat white,Ron:peppermint,Neville:flat white,Ron:black tea,Neville:black tea,Neville:lemon & ginger,Luna:mocha,Harry:peppermint,Hermione:hot water,Harry:espresso,Ron:long black,Ron:lemon & ginger,Ron:long black,Neville:green tea,Ron:peppermint,Neville:mocha,Hermione:mocha,Neville:espresso,Harry:mocha,Ron:espresso,Luna:espresso,Luna:hot water,Harry:espresso,Harry:hot water,Ron:green tea,Neville:green tea,Luna:flat white,Harry:lemon & ginger,Luna:lemon & ginger,Luna:espresso,Neville:lemon & ginger,Hermione:black tea,Luna:espresso,Hermione:green tea,Harry:peppermint,Ron:peppermint,Luna:green tea,Harry:lemon & ginger,Hermione:lemon & ginger,Harry:hot water,Harry:green tea,Harry:hot water,Harry:espresso,Hermione:espresso,Luna:black tea,Neville:long black,Hermione:green tea,Neville:black tea,Hermione:long black,Ron:mocha,Luna:green tea,Hermione:espresso,Neville:mocha,Neville:mocha,Luna:peppermint,Luna:flat white,Neville:mocha,Neville:long black,Luna:black tea,Neville:green tea,Harry:peppermint,Harry:hot water,Ron:mocha,Hermione:long black,Neville:black tea,Harry:peppermint,Luna:mocha,Hermione:black tea,Luna:lemon & ginger,Luna:flat white,Neville:green tea,Luna:flat white,Luna:hot water,Harry:mocha,Ron:hot water,Luna:espresso,Harry:mocha,Harry:flat white,Hermione:flat white,Neville:green tea,Harry:flat white,Luna:green tea,Neville:long black,Harry:hot water,Hermione:flat white,Harry:flat white,Ron:espresso,Ron:flat white,Luna:green tea,Luna:flat white,Harry:green tea,Neville:peppermint,Harry:long black,Harry:green tea,Hermione:espresso';

// Split and convert to JSON
const enlistDrinks = drinkLog.split(',')
  .map(item =>{ 
    const orderedItem = item.split(":");

    const TYPES = [];
    TYPES['long black'] = 'coffee';
    TYPES['flat white'] = 'coffee';
    TYPES['espresso'] = 'coffee';
    TYPES['mocha'] = 'coffee';
    TYPES['peppermint'] = 'tea';
    TYPES['lemon & ginger'] = 'tea';
    TYPES['green tea'] = 'tea';
    TYPES['black tea'] = 'tea';
    TYPES['hot water'] = 'other';

    const loggedItem = {
      "name": orderedItem[0],
      "drink": orderedItem[1],
      "type": TYPES[orderedItem[1]]
    };

    return loggedItem;
  });

// Helpers: Map and Count function
var mapToProp = (data, prop) => {
  return data
    .reduce((res, item) => Object
      .assign(res, {
        [item[prop]]: 1 + (res[item[prop]] || 0)
      }), JSON.parse(JSON.stringify(Object.create(null))));
  ;
}

// Helpers: Returns the key of the selected value from the object
var findKey = (obj, value) =>{
  let key;

  _.each(_.keys(obj), function(k){
    let v = obj[k];
    if (v === value){
      key = k;
    }
  });

  return key;
}

// returns object from the block text
let enlistAllByName = mapToProp(enlistDrinks, 'name'),
    enlistAllByDrink = mapToProp(enlistDrinks, 'drink'),
    enlistAllByType = mapToProp(enlistDrinks, 'type');

// Get the highest value json
let maxKeyName = _.max(enlistAllByName);
let maxKeyDrink = _.max(enlistAllByDrink);
let maxKeyType = _.max(enlistAllByType);

// Enlist the total number by name/drink/type
console.log('-------enlistAllByName--------\n\n', enlistAllByName);
// OUTPUT:
// -------enlistAllByName--------
// { Ron: 22, Luna: 29, Neville: 28, Hermione: 18, Harry: 28 }

console.log('\n-------enlistAllByDrink--------\n\n', enlistAllByDrink);
// OUTPUT:
// -------enlistAllByDrink--------
// {
//   'black tea': 11,
//   peppermint: 14,
//   'green tea': 19,
//   'lemon & ginger': 15,
//   espresso: 17,
//   mocha: 15,
//   'long black': 9,
//   'hot water': 12,
//   'flat white': 13 }

console.log('\n-------enlistAllByType--------\n\n', enlistAllByType);
// OUTPUT
// -------enlistAllByType--------
// { tea: 59, coffee: 54, other: 12 }


console.log('\n\n\n😁 Who drank the most:', findKey(enlistAllByName, maxKeyName));
console.log('\n☕ Popular drink:', findKey(enlistAllByDrink, maxKeyDrink));
console.log('\n🍵 Popular type of drink:', findKey(enlistAllByType, maxKeyType));