import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { PORT } from './config.js'
import empleadosRoutes from './routes/empleados.routes.js'
import usersRoutes from './routes/users.routes.js'

const app = express()

app.use(morgan('dev'));
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hola Mundo!!')
})

app.use('/api',empleadosRoutes);
app.use('/api',usersRoutes);

app.listen(PORT)
console.log(`Server on port: ${PORT}`)

