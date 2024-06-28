/*task-1
დაწერეთ if პირობა, თუ ცვლადის მნიშვნელობა ნაკლებია 50ზე დაუბეჭდოს - ნაკლებია 50ზე, თუ ცვლადის მნიშვნელობა მეტია 20ზე დაიბეჭდოს მეტია 20ზე, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - შეცდომა.*/

let x = 100;
if (x < 50) {
    console.log(`${x} is less then 50`);
}
if (x > 20 ) {
     console.log(`${x} is more then 20`);
} else {
     console.log(`Error`);
}

/*Task 2  მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. ახალი if ის სინტაქსით დაწერეთ, 
თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,
 ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; */
let firstName = "Mariam";
console.log(firstName == "Mariam" ? true : false);
/*task-3 მოცემულია ცვლადი, რომლის მნიშვნელობაა მარიამ. switch case ის საშუალებით დაწერეთ, 
თუ ცვლადის მნიშვნელობა უდრის მარიამ-ს დაიბეჭდოს - true,ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 
*/
let userName = 'Mariam';
switch (userName) {
  case 'Mariam':
    console.log("true");
    break;
  default:
    console.log('false');
}

/*task-4 ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე*/

for (let i = 5; i < 100; i++){
    console.log(i);
}
/*task 5 მოცემულია მასივი:
let array1= [1, 2, 4, -. 1, -3, 8, 7, 0, -5, 18, 12];
ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე
*/
let array1 = [1, 2, 4, -0.1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] <10) {
        console.log(array1[i]);
    }
}
/*task 6 -თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
*/
let user2 = {
    name: 'anna',
    age: 20,
    studentstatus: 'active'
}

if (user2.age > 18 && user2.studentstatus == 'active') {
    console.log("hello user");
} else if (user2.name == 'Levani') {
    console.log('Hello Levan');
} else if (user2.studentstatus == 'active' || user2.age < 25) {
    console.log("hello anna");
} else {
    console.log("error");
}
/*user2.age > 18 && user2.studentstatus == 'active' 
    ? console.log("hello user")
    : user2.name == 'Levani' 
        ? console.log('Hello Levan')
        : user2.studentstatus == 'active' || user2.age < 25 
            ? console.log("hello anna")
            : console.log("error");
            */
/*Task 7  მოცემულია მასივი:
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ] 
ამოიღეთ მხოლოდ ლუწი რიცხვები
*/
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];

for (let i = 0; i < array6.length; i++) {
    if (array6[i] %2==0) {
        console.log(array6[i]);
    }
}

/*task 8* კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;*/
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
];

for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
        console.log(users[i]);
    }
}