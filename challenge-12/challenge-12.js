(function(){

    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */

    var person = {
        name: 'Marcos',
        lastname: 'Menezes',
        age: 23
    }

    console.log( 'Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    var arrayPerson = Object.keys(person)

    console.log(arrayPerson)


    /*
    Crie um array vazio chamado `books`.
    */

    var arrBooks = [];


    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */

    arrBooks.push({nome: 'Jquery Mobile', pages: 250})
    arrBooks.push({nome: 'JavaScript de alto desepenho', pages: 150})
    arrBooks.push({nome: 'CSS3', pages: 280})


    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */

   console.log(arrBooks)

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */

    console.log(arrBooks.pop())

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(arrBooks.length)

    /*
    Converta os objetos que ficaram em `books` para strings.
    */


    console.log( '\nLivros em formato string:' );

    arrBooks = JSON.stringify(arrBooks)


    /*
    Mostre os livros nesse formato no console:
    */

    console.log(arrBooks)

    /*
    Converta os livros novamente para objeto.
    */
    console.log( '\nAgora os livros são objetos novamente:' );

    arrBooks = JSON.parse(arrBooks)
    
    console.log(arrBooks)


    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for(var i = 0; i < Object.keys(arrBooks).length; i++ ){
        for (var prop in arrBooks[i]){
            console.log(prop +' : '+arrBooks[i][prop])
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */

    console.log( '\nMeu nome é:' );

    var arrName = ['M', 'a','r','c','o','s']

    console.log(arrName.join(''))





    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */

    console.log(arrName.join(''))

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(arrName.reverse().join(''))
    

    console.log( '\nAgora em ordem alfabética:' );
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */

    console.log(arrName.sort().join(''))

})();
