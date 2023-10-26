const sequelize = require('../config/sequelize')
const { buildSchema } = require("graphql")

// GraphQL 스키마 정의
const userDefs = buildSchema(`
    type User {
        id: ID!
        name: String
        password: String
    }

    type Query {
        getAllUser: [User]
        getUserById(id: ID!): User
        getUserByName(name: string): User
    }

    type Mutation {
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

    type Mutation {
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

    type Mutation {
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

    type Mutation {
    }
`)

module.exports = {
    userDefs, chatDefs, chatRoomDefs, chatRoomJoinDefs
}