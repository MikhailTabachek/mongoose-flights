import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET flights listing. */
router.get('/new', flightsCtrl.new)

export {
  router
}
