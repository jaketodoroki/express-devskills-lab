import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET skills index. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.post('/', skillsCtrl.create)

export {
  router
}
