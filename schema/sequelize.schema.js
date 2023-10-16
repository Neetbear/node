const sequelize = require('../config/sequelize')
const { DataTypes } = require('sequelize');

// Sequelize 모델 정의
const User = sequelize.define('user', {
    Id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Name : {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const ChatRoom = sequelize.define('chat_room', {
    Id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    MasterId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    Name : {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const ChatRoomJoin = sequelize.define('chat_room_join', {
    Id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    UserId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    ChatId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
})

const Chat = sequelize.define('chat', {
    Id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    SenderId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    RoomId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    Message : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MessageType : {
        type: DataTypes.ENUM('chatting', 'reply','system'),
        defaultValue : 'chatting',
        allowNull: false,
    },
})

module.exports = {
    User,
    ChatRoom,
    ChatRoomJoin,
    Chat,
};