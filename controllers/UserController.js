const m$user = require('../modules/user.module')
const {Router} = require('express')
const response = require('../helpers/response')

const UserController = Router()

//GET
//POST
//PUT
//DELETE
UserController.get('/', async (req, res) =>{
    const list = await m$user.listUser()

    response.sendResponse(res, list)
})


/**
 * Update User
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * 
 * http://localhost:8000/api/user
 */


UserController.post('/add', async (req,res)=>{
    //req.body
    const add = await m$user.createUser(req.body)

    //response helper
    response.sendResponse(res, add)
})


/**
 * Update User
 * @param {number} id
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * 
 * http://localhost:8000/api/user
 */


UserController.put('/', async (req,res)=>{
    //req.body
    const update = await m$user.updateUser(req.body)

    //response helper
    response.sendResponse(res, update)
})

/**
 * Delete User
 * @param {number} id
 * 
 * http://localhost:8000/api/user/:id
 */
UserController.delete('/:id', async (req, res)=>{
    const del = await m$user.deleteUser(Number(req.params.id))

    response.sendResponse(res,del)
})


module.exports = UserController