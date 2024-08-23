import {Router} from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.controllers.js'

const router = Router()

router.get('/usuarios', getUsers)

router.get('/usuarios/:id', getUser)

router.post('/usuarios', createUser)

router.delete('/usuarios/:id', deleteUser)

router.put('/usuarios', updateUser)

export default router