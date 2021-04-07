class User{
    constructor(user){
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.city = user.address.city;
        this.street = user.address.street;
        this.companyName = user.company.name;
        this.website = user.website;
        this.phone = user.phone;
    }
}

export { User };