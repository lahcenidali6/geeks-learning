import { faker } from "@faker-js/faker";
import inquirer from 'inquirer'

let users = [];
function addUsers(count=5) {
  for (let i = 0; i < count; i++) {
    const user = {
      name: faker.person.fullName(), 
      addressStreet: faker.location.streetAddress(true), 
      country: faker.location.country(), 
    };
    users.push(user);
  }
}

async function addUserManually() {
    console.log('\nPlease enter user details:');
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the user\'s name?',
            validate: input => input.length > 0 || 'Name cannot be empty!'
        },
        {
            type: 'input',
            name: 'addressStreet',
            message: 'What is the user\'s street address?',
            validate: input => input.length > 0 || 'Street address cannot be empty!'
        },
        {
            type: 'input',
            name: 'country',
            message: 'What is the user\'s country?',
            validate: input => input.length > 0 || 'Country cannot be empty!'
        },
    ]);

    const newUser = {
        name: answers.name,
        addressStreet: answers.addressStreet,
        country: answers.country
    };
    users.push(newUser);
    console.log('\nUser added manually!');
    console.log(newUser);
}

addUsers()
console.log(`list of users :`)
users.forEach(user=>{
    console.log(user)
})
addUserManually()