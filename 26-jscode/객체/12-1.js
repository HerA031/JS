const person = {
    name:'홍길동',
    age:30,
    'lick cat':true,
    greet: function() {
        console.log(`나는 ${this.name}이고, 내 나이는 ${this.age}살 입니다.`);
        
    }
}

person.greet()
console.log(person.name);
console.log(person['lick cat']);