const express = require('express');
const router = express.Router();

//const group = require('../controllers/groups');
const reply = require('../controllers/replies');

const middleware = require('../middleware/login')

// router.post('/createGroup/:user_id',middleware.verifyToken, group.CreateGroup);
// router.delete('/deleteGroup/:user_id',middleware.verifyToken, group.DeleteGroup);
// router.get('/getAllGroups', group.GetALlGroups);
// router.post('/joinRequest/:user_id',middleware.verifyToken, group.JoinRequest);
// router.post('/acceptJoinRequest/:user_id',middleware.verifyToken, group.AcceptJoinRequest);

module.exports = router;