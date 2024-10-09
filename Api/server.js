import express from 'express'
import dotenv from 'dotenv'
import auhtRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import matchesRoutes from './routes/matchesRoutes.js'
import messagesRoutes from './routes/messagesRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5002

app.use(express.json())

app.use('/api/auth', auhtRoutes)
app.use('/api/users', userRoutes)
app.use('/api/matches', matchesRoutes)
app.use('/api/messages', messagesRoutes )

app.listen(PORT, () => {
  console.log(`Server in port: ${PORT}`)
})
