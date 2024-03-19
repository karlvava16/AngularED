let x = 5;
let userName = 'Pit';


let num: number = 20;
num = 34;
let mess: string = 'Hello';

let type: any;
type = 4;
type = 'str';
type = true;

let color: string | number | boolean;
color = 'red';
color = 34;

let arr: number[] = [1, 3, 5];
let arrStr: string[] = ['dfsdf','sf'];
let arr2: [number, number, string] = [1,2,'dfd'];
let arr3: any[] = [1, 4, 'dsfdsf'];

// ф-ция
function getSize(): number{
  return 24;
}

let getOffeset = (): number => 300;

function print(title: string, datePost?: number ): void{
  // title = title || 'Hello';
  console.log(300);
}

print('text');
print('dfds',3432432);

function add(x: number, y: string): string;
function add(x: string, y: string): string;
function add(x: number, y: number): number;

function add(x: any, y: any): any {
  return x + y;
}

let result1 = add(5, '4'); // 9
let result2 = add("5", "4"); // 54

// let student: {name: string, age: number} = {
//   name: 'Vlad',
//   age: 22
// }

let student: {
  name: string, 
  age: number,
  lessons: string[],
  print: () => void
} = {
  name: 'Vlad',
  age: 22,
  lessons: ['JS', 'SEO', 'Ng'],
  print(): void{
    console.log('div');
  }
}

type Student = {
  name: string, 
  age: number,
  lessons: string[],
  print: () => void
}

let st1: Student = {
  name: 'Vlad',
  age: 22,
  lessons: ['JS', 'SEO', 'Ng'],
  print(): void{~
    console.log('div');
  }
}

let st2: Student = {
  name: 'Vlad',
  age: 22,
  lessons: ['JS', 'SEO', 'Ng'],
  print(): void{
    console.log('div');
  }
}

// описать типы для галерии и создать 1-2 галереи
// title
// loop - true/false
// item - количестов слайдов
// drag - (ф ция)


type Gallery = {
  title: string,
  loop: boolean,
  item: number,
  srcForItems: string[],
  drag: () => void
};

let fg : Gallery = {
  title : 'gallery',
  loop : true,
  item : 12,
  srcForItems: [],
  drag: function(){
    console.log(this.title, this.loop, this.item);
  }
};
