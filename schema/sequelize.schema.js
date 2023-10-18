const sequelize = require('../config/sequelize')
const { DataTypes } = require('sequelize');

// Sequelize 모델 정의
const User = sequelize.define('user', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const ChatRoom = sequelize.define('chat_room', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    masterId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const ChatRoomJoin = sequelize.define('chat_room_join', {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    chatId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
})

const Chat = sequelize.define('chat', {
    id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    senderId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    roomId : {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    message : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    messageType : {
        type: DataTypes.ENUM('chatting', 'reply','system'),
        defaultValue : 'chatting',
        allowNull: false,
    }, 
}
// , {
//     timestamps: false, // 생성일과 수정일을 사용하지 않도록 설정
// }
)

sequelize
    .sync({force: true})
    .then(() => {
        console.log('Database synchronized');
})
    .catch((err) => {
        console.log('Database synchronize failed:', err);
});

module.exports = {
    User,
    ChatRoom,
    ChatRoomJoin,
    Chat,
    sequelize
};