var x = 5;
var userName = 'Pit';
var num = 20;
num = 34;
var mess = 'Hello';
var type;
type = 4;
type = 'str';
type = true;
var color;
color = 'red';
color = 34;
var arr = [1, 3, 5];
var arrStr = ['dfsdf', 'sf'];
var arr2 = [1, 2, 'dfd'];
var arr3 = [1, 4, 'dsfdsf'];
// ф-ция
function getSize() {
    return 24;
}
var getOffeset = function () { return 300; };
function print(title, datePost) {
    // title = title || 'Hello';
    console.log(300);
}
print('text');
print('dfds', 3432432);
function add(x, y) {
    return x + y;
}
var result1 = add(5, '4'); // 9
var result2 = add("5", "4"); // 54
// let student: {name: string, age: number} = {
//   name: 'Vlad',
//   age: 22
// }
var student = {
    name: 'Vlad',
    age: 22,
    lessons: ['JS', 'SEO', 'Ng'],
    print: function () {
        console.log('div');
    }
};
var st1 = {
    name: 'Vlad',
    age: 22,
    lessons: ['JS', 'SEO', 'Ng'],
    print: function () {
        console.log('div');
    }
};
var st2 = {
    name: 'Vlad',
    age: 22,
    lessons: ['JS', 'SEO', 'Ng'],
    print: function () {
        console.log('div');
    }
};
var fg = {
    title: 'gallery',
    loop: true,
    item: 12,
    srcForItems: [],
    drag: function () {
        console.log(this.title, this.loop, this.item);
    }
};
