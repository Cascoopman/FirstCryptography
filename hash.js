const { createHash } = require('crypto');

// create a string hash

function hash(input) {
    return createHash('sha256').update(input).digest('hex');

}

// compare two hashed passwords

let password = 'hi-mom!';
const hash1 = hash(password);
console.log(hash1)

// ... some time later

password ='hi-mom';
const hash2 = hash(passwords);
const match = hash1 == hash2;

console.log(match ? 'good password' : 'passwords do not match');
