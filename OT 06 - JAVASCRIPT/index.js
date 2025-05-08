let carro ={
   marca: 'chevrolet', 
   modelo: 'Equinox Turbo',
   ano: 2025
}
   console.log(carro.modelo);

   carro.ano = 2026;
   carro.cor = 'verde';
   console.log(carro);

   let caculdadora ={
      soma: function(a,b)
      {
        return a+b;
      }
   }
   console.log(calculdaora.soma(5,3))

   for(let propriedade in carro)
   {
      console.log(propriedade + carro[propriedade])
   }

   let livro ={
      titulo:"45",
      autor:"54"
   }
   let outroLivro = livro;
   {
      outroLivro.titulo ='54'

   }
   console.log(livro.titulo);


   console.log(Object.keys(carro),Object.values(carro));