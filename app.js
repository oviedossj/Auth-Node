const express = require('express')
const routerApi = require('./router/routes');
require("./config/database").connect();
class Server{
    constructor(){
        this.app = express();
        this.port=process.env.PORT;
        this.middleware();
        this.router();
    }
middleware(){
    this.app.set('views')   
    this.app.use('',express.static('public'));
    this.app.use('',express.static(__dirname +'public'));
    this.app.use( express.json());
    this.app.use(express.urlencoded({extended:true}));
}
router(){
    const app = this.app;
    routerApi(app);
    this.app.get('/', function (req, res) {
        res.send('Hello World')
      })

}
listen(){
    this.app.listen(this.port,()=>{console.log('corriendo correctamente')})}
}

module.exports=Server;