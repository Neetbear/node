const {User, ChatRoom, ChatRoomJoin, Chat } = require('./sequelize.schema')

const userResolvers = {
    Query : {
        getAllUser: async () => {
            const users = await User.findAll();

            return users;
        },
        getUserById: async (id) => {
            const id = id;
            const user = await User.findOne({
                where: {
                    id: id,
                }
            });

            return user;
        },
        getUserByName: async (name) => {
            const name = name;
            const user = await User.findOne({
                where: {
                    name: name,
                }
            });

            return user;
        }
    }
}

const chatResolvers = {
    Query : {
    }
}

const chatRoomResolvers = {
    Query : {
    }
}

const chatRoomJoinResolvers = {
    Query : {
    }
}

module.exports = {
    userResolvers, chatResolvers, chatRoomResolvers, chatRoomJoinResolvers
}