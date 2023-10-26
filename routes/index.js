const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const chatRouter = require('./chat');
const chatRoomRouter = require('./chatRoom');

router.use('/user', userRouter);

// router.use('/chat', chatRouter);

// router.use('/chatroom', chatRoomRouter);

module.exports = router;