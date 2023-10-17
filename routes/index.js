const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');
const chatRoomRouter = require('./chatRoomRouter');

router.use('/user', userRouter);

router.use('/chat', chatRouter);

router.use('/chatroom', chatRoomRouter)

module.exports = router;