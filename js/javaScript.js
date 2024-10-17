function addAlunos (){
    let alunos = [
        {
            "matricula": "12026",
            "nome": "Gabriel",
            "data": "08/10/2007",
            "curso": "Informática",
            "genero": "masculino"
        },
        {
            "matricula": "11090",
            "nome": "Ruan Sapeca",
            "data": "",
            "curso": "Informática",
            "genero": "Masculino"
        },
        {
            "matricula": "18400",
            "nome": "Breno",
            "data": "12/06/2005",
            "curso": "Informática",
            "genero": "Masculino"
        },
        {
            "matricula": "13997",
            "nome": "Nicholas",
            "data": "08/01/2005",
            "curso": "Informática",
            "genero": "Masculino"
        },
        {
            "matricula": "10002",
            "nome": "Eduarda",
            "data": "27/03/2007",
            "curso": "Informática",
            "genero": "Feminino"
        }
    ];

    let cadastro = {
        "matricula": document.getElementById("matricula").value ,
        "nome": document.getElementById("nome").value ,
        "data": document.getElementById("data").value ,
        "curso": document.getElementById("curso").value ,
        "genero": document.getElementById("genero").value 
    }

    alunos.push(cadastro);

    let filterG = alunos.filter(cadastro => cadastro.genero == "Feminino");
    console.log(filterG);

    let filterCeS = alunos.filter(cadastro => cadastro.curso == "Informática" && cadastro.genero == "Masculino");
    console.log(filterCeS);

    let filterM = alunos.filter(cadastro => cadastro.matricula > 100);
    console.log(filterM);

}