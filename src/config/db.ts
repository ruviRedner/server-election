import { connect } from "mongoose";
export default ( async()=>{
    try {
      await  connect(process.env.DB_URL as string)
      // console.log("conncted to mongo ")
    } catch (error) {
       console.log("can`t connedt to mongo",error) 
    }
})
