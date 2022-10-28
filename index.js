const io = require("socket.io-client");

class Client 
{
    constructor(host,port,username,password)
    {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.socket = io.connect("http://" + this.host + ":" + this.port);
    }
    connect()
    {
        this.socket.emit('authentication', {username: "admin", password: "123"}); 
    }
    executeCommand(command,args)
    {
        this.socket.emit("command",{command: command,args: args});
    }
    onResult(callback)
    {
        this.socket.on("result",(result)=>{
            const data = result;
            if(data.success)
            {
                if(data.result)
                {
                    callback(data.result);
                }
                else
                {
                    callback({success: true,message: "Command executed successfully"});
                }
            }
            else
            {
                callback({success: false,message: data.message});
            }
        });
    }
}

module.exports = Client;