
export class User {
    constructor(
        private _id?: string,
        private _username?: string,
        private _email?: string,
        private _token?: string) { }

    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set username(username) {
        this._username = username;
    }

    get username() {
        return this._username;
    }

    set email(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set token(token) {
        this._token = token;
    }

    get token() {
        return this._token;
    }
}
