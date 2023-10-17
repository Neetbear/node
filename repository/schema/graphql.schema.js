const sequelize = require('../../config/sequelize')
const { buildSchema } = require("graphql")

// GraphQL 스키마 정의
const userDefs = buildSchema(`
    type User {
        id: ID!
        name: String
        email: String
    }

    type Query {
        getAllUser: [User]
        getUserById(id: ID!): User
    }

    type Mutatus {
    }
`)

const chatDefs = buildSchema(`
    enum MessageType {
        chatting
        reply
        system
    }

    type Chat {
        id: ID!
        senderId: Int!
        roomId: Int!
        message: String!
        messageType: [MessageType]!
    }

    type Query {
    }

    type Mutatus {
    }
`)

const chatRoomDefs = buildSchema(`
    type Chat {
        id: ID!
        userId: Int!
        chatId: Int!
    }

    type Query {
    }

    type Mutatus {
    }
`)

const chatRoomJoinDefs = buildSchema(`
    type Chat {
        id: ID!
        userId: Int!
        ChatId: Int!
    }

    type Query {
    }

    type Mutatus {
    }
`)

module.exports = {
    userDefs, chatDefs, chatRoomDefs, chatRoomJoinDefs
}