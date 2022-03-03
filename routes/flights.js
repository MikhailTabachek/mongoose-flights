import { Router } from 'express'
import methodOverride from 'method-override'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET flights listing. */
router.get('/new', flightsCtrl.new)
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.get('/:id/edit', flightsCtrl.edit)
router.post('/', flightsCtrl.create)
router.delete('/:id', flightsCtrl.delete)
router.put('/:id', flightsCtrl.update)

export {
  router
}
