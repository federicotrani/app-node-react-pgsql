import {Router} from 'express'

const router = Router()

router.get('/empleados', (req, res) => {
  res.send('obteniendo usuarios')
})

router.get('/empleados/:id', (req, res) => {
  const {id} = req.params;
  res.send('obteniendo usuario: '+id)
})

router.get('/empleados', (req, res) => {
  res.send('obteniendo usuarios')
})

router.get('/empleados', (req, res) => {
  res.send('obteniendo usuarios')
})

router.get('/empleados', (req, res) => {
  res.send('obteniendo usuarios')
})

export default router