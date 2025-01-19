"use strict";
/*
  Клас Student, який містить три властивості: name, age та grade.
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення,
  напишіть скорочену ініціалізацію.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    return Student;
}());
