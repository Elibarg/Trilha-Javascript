let frutas = new Set();
frutas.add("Banana");
frutas.add("Banana");

console.log(frutas.has(Banana));

frutas.delete("Banana");

frutas.clear();

let num = new Set();
num.add(1);
num.add(2);
num.add(3);
num.add(4);

console.log(num.size);

for(let i of num)
{
    console.log(i);
}

let nume = [1,2,2,3,4,5,6,4,5];

let numUnico = new Set(nume);