# flattenJSON.js - MongoDB Coding Challenge

I chose to implement the JSON flattener in Node.js using Jest as the testing framework. 

## Running the Program

As requested, the program accepts input via stdin and the command line corresponds to the linux conventions, as seen below.

```console
foo@mongodb-code-challenge:~$ cat test.json | node flattenJSON.js
```

## Running the Tests
The tests can be run using the  `npm test`  command as seen below. The unit tests can be seen in the test folder inside flattenJSON.test.js.

```console
foo@mongodb-code-challenge:~$ npm test
```

## Additional Notes 
* I started the coding challenge at 06.24 AM and finished at 07.18 AM, spending a total of 54 mintues.  
* The program handles keys with "." in them, and can handle arrays using their index as the childKey (so "parentKey": [22, 42] becomes "parentKey.0": 22 and "parentKey.1": 42).
* I used the JSON.parse() to deserialize the input JSON file and JSON.stringify to serialize the output JSON file.  