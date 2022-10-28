const Client =require('./index.js');
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
client.onResult((result)=>{
    console.log(result);
});