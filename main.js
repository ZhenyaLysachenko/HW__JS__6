// 1 --- Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
// Екранування – це заміна в тексті спеціальних символів 
// Екрануючий символ (\) повідомляє інтерпретатору, що символ,
// що слідує за ним, повинен сприйматися як звичайний символ.
// 2---Які засоби оголошення функцій ви знаєте?
// Ім'я функції,спосіб параметрів () та інструкція, яка буде виконуватися {}
// function declaration, function expression, стрелочные функции.
// 3---Підняття або hoisting - це механізм JavaScript, в якому змінні і
// оголошення функцій, пересуваються вгору своєї області видимості перед 
// тим, як код буде виконано.




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

