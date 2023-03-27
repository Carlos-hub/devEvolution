import { app } from ".";



app.listen(process.env.PORT, '0.0.0.0' ,()=> console.log(`Server is running at the port ${process.env.PORT}`))
