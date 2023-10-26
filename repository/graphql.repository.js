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
    },
    Mutation: {   
        createUser: async () => {
            
        },
        updateUser: async () => {},
        disabledUser: async () => {},
        deleteUser: async () => {}
    }
}

const chatResolvers = {
    Query : {
    },
    Mutation: {
        createChat: async () => {},
        updateChat: async () => {},
        disabledChat: async () => {},
        deleteChat: async () => {}
    }
}

const chatRoomResolvers = {
    Query : {
    },
    Mutation: {   
        createChatRoom: async () => {},
        updateChatRoom: async () => {},
        disabledChatRoom: async () => {},
        deleteChatRoom: async () => {}
    }
}

const chatRoomJoinResolvers = {
    Query : {
    },
    Mutation: {   
        createChatRoomJoin: async () => {},
        updateChatRoomJoin: async () => {},
        disabledChatRoomJoin: async () => {},
        deleteChatRoomJoin: async () => {}
    }
}

module.exports = {
    userResolvers, chatResolvers, chatRoomResolvers, chatRoomJoinResolvers
}