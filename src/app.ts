import exp from "express"
import "dotenv/config"
import userController from "./controllers/userController"
import adminController from "./controllers/admin"
import candidatesController from "./controllers/candidates"
import votesController from "./controllers/votes"
import { connectToMongo } from "./config/db"
import cors from "cors"
import http from "http"
const PORT = process.env.PORT || 3000

const app = exp()
const httpServer = http.createServer(app)
app.use(exp.json())
app.use(cors())
connectToMongo()
app.use("/api/users",userController)
app.use("/api/admin",adminController)
app.use("/api/candidates",candidatesController)
app.use("/api/votes",votesController)



app.listen(PORT,()=>{
    console.log(`server app and runing in port ${PORT}`);
    
})