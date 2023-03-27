import { app } from ".";



app.listen(process.env.PORT, process.env.HOST ,()=> console.log(`Server is running at the port ${process.env.PORT}`))
