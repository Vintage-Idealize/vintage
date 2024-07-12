const app=require('./app');
const port=3001;
const host='127.0.0.1';
cosnt

const server=app.listen(port,host,()=>{
    console.log(`Node server is listening to ${server.address().port}`)
})