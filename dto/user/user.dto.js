class UserDto {
    id;
    status;
    name;
    email;
    password;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.password = data.password;
        this.email = data.email;
        this.status = data.password;
    }
}

module.exports = UserDto