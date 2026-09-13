let http=require("http");
let server=http.createServer((req,res)=>{
    console.log("hellow i m server")
    res.end("mai server ke andar hu")
})

server.listen(3000,()=>{
    console.log("server is running at port 3000")

})