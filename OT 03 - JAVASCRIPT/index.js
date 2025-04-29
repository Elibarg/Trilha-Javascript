for (let i = 0; i < 10; i++) 
{
    console.log(i);
}

for(let i =0; i <20;i++)
{
    if(i % 2 === 1)
    {
        console.log(i);
    }    
}

let i = 0; while (i < 10)
{
    console.log(i); i++;
}

for (let i = 0; i < 100; i++) 
{
        console.log(i);
        if (i === 50) 
        {
            break
        }
}
for (let i = 0; i < 20; i++) 
{
     if(i === 13)
     {
        continue
     }
     console.log(i);
}

let nomes = ["Marcelo","Lais","Bia"];
for(let nome of nomes)
{
 console.log(nome);
}