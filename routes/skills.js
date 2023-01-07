import { Router } from 'express'
import { skills } from '../data/skills-data.js'

const router = Router()

/* GET skills index. */
router.get('/', function(req, res){
  res.render('skills/index',{
    skills: skills
  })
})

export {
  router
}
