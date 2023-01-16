// ES Module
import {faker} from '@faker-js/faker';

// CommonJS
// import {faker} = require('@faker-js/faker');

const randomName = faker.name.fullName();
const randomEmail = faker.internet.email();

console.log('randomName: ' + randomName);
console.log('randomEmail: ' + randomEmail);