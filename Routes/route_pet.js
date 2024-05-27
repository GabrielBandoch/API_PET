import express from 'express'

import { pet } from "../Controller/controller_pets.js"

let router = express.Router()
router.get('/pet', pet.all);
router.get('/pet/search', pet.procurarNome);
router.post('/pet', pet.create);
router.put('/pet/:codigo_pet', pet.update);
router.delete('/pet/:codigo_pet', pet.delete);

export { router }