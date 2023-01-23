function createNewUser () {
    let newUser = new Object();
    newUser.firstName = prompt('Write please your firstname');
    newUser.lastName = prompt('Write please your lastname');
    newUser.birthday = prompt('Write please your birthday date, `dd.mm.yyyy`')
    newUser.getLogin = function () {
        return `${(newUser.firstName.charAt(0) + newUser.lastName).toLowerCase()}`;
    }
    newUser.getAge = function () {
        return `${new Date(). getFullYear() - newUser.slice(6)}`;
    };
    newUser.getPassword = function (){
        return `${newUser.firstName[0].toUpperCase() + newUser.lastName + newUser.birthday.slice(6)}`;
    }
    return newUser;

}

let user = createNewUser();
console.log(user.getPassword());

