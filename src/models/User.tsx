class User {
    id: string;
    name: string;
    email: string
    city: string
    constructor(userData: any) {
        this.id = userData.id
        this.name = userData.name
        this.email = userData.email
        this.city = userData.address.city

    }
}

export default User