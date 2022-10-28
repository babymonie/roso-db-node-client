
## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
## Authors

- [@thatfriendlyasiandev](https://www.github.com/babymonie)


# ROSO DB

ROSODB is a database that uses a combination of SQL and JSON. It is easy to use, making it a great choice for those who need a simple database solution.
you may have also known about my other project causedb well, here's it brother, better lighter faster and more secure.


## Tech Stack

**Client:** NODE.JS


## Installation

Install rosodb with npm

```bash
  npm install rosodb-client
```
    
## Usage/Examples

```javascript
    const Client = require('rosodb-client');
    const client = new Client("localhost",3000,"admin","123");
    client.connect();
    const userInfo = {
        username: "test",
        password: "123",
        email: "test@example.com",
        firstName: "Test",
        lastName: "User"
    };
    client.executeCommand("insert into table",{databaseName:"testDB",tableName:"testTable",data:userInfo});
    client.onResult((result )=> {
        console.log(result);
    });
```

## Features

- SQL Based comamnds
- Fast
- Light
- JSON Storage

## Appendix

Clients for more languages are coming soon.

## FAQ

#### How good is the speed

Decent,better than CauseDB.

#### Why should i use the database?

First of all its, made to be used on simple projects and client and server hosted on the same device,meaning if you hosted an api in a server the database server would also,be hosted there.
## Feedback

If you have any feedback, please reach out to us at fake@fake.com

