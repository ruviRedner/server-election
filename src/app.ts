import exp from "express"
import "dotenv/config"
const PORT = process.env.PORT || 3000

const app = exp()
app.listen(PORT,()=>{
    console.log(`server app and runing in port ${PORT}`);
    
})