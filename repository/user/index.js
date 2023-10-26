const {User} = require('../schema/sequelize.schema')

const getAllUser = async() => {
    try {
        const users = await User.findAll();
    
        return users;
    } catch (err) {
        console.error(err);

        return null;
    }
}

const getUserById = async(req) => {
    try {
        const id = req.Id;
        const user = await User.findOne({
            where: {
                id: id
            }
        });

        return user;
    } catch (err) {
        console.error(err);

        return null;
    }
    
}

const getUserByName = async(req) => {
    try {
        const name = req.name;
        const user = await User.findOne({
            where: {
                name: name
            }
        }).then().catch()

        return user;
    } catch (err) {
        console.error(err);

        return null;
    }
}

const createUser = async(req) => {
    try {
        const name = req.name;
        const password = req.password;
        const result = await User.create({
            name: name,
            password: password,
        });
        return result;
    } catch (err) {
        console.error(err);

        return null;
    }
}

const deleteUserById = async(req) => {
    try { 
        const id = req.Id;
        const user = await User.destroy({
            where: {
                id: id
            }
        });

        return user;
    } catch (err) {
        console.error(err);

        return null;
    }
}

const deleteUserByName = async(req) => {
    try { 
        const name = req.name;
        const user = await User.destroy({
            where: {
                name: name,
            }
        });

        return user;
    } catch (err) {
        console.error(err);

        return null;
    }
}

const updateUserById = async(req) => {
    try {
        const id = req.Id;
        const name = req.name;
        const password = req.password;
        const user = await User.update({
                name: name,
                password: password,
            },
            {where: {
                id: id
            }
        });

        return user;
    } catch (err) {
        console.error(err);

        return null;
    }
}

module.exports = {
    UserRepository:{getAllUser, getUserById, getUserByName, createUser, deleteUserById, deleteUserByName, updateUserById}
};