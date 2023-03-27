import { app } from ".";



app.listen(process.env.PORT,()=> console.log(`Server is running at the port ${process.env.PORT}`))
