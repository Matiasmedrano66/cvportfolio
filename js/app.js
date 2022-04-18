$(document).ready(function(){
    
    //animacion correspondiente a las imagenes de la seccion hero y about
    //Hero picture and About picture animation 
    $(".animation-pic1").css("display", "none");
    $(".animation-pic1").fadeIn(3000);

    $(".animation-pic2").css("display", "none");
    $(".animation-pic2").fadeIn(4000);

    //Año obtenido de manera dinámica para establecer en la seccion de copyright
    //Dynamic year for copyright
    let year = new Date().getFullYear();
    $(".footer").append(`<p class="text-white">Copyright © ${year}</p>`);

    //declarando e inicializando dos arreglos de objetos con información sobre habilidades para la seccion skills
    //Declaring and initializing two array of objects with information about skills
    const skillsRate1 = [
        {name: "HTML", rate: "90%", img:'./images/icons/html-5.png' },
        {name: "Css", rate: "90%", img:'./images/icons/css-3.png' },
        {name: "Javascript", rate: "80%", img:'./images/icons/js.png' },
        {name: "React.js", rate: "80%", img:'./images/icons/react.png' },
        {name: "C#", rate: "90%", img:'./images/icons/c-sharp.png' }
    ];
    const skillsRate2 = [
        {name: "SQL Server", rate: "90%", img:'./images/icons/database.png' },
        {name: "MongoDB", rate: "70%", img:'./images/icons/mongo.png' },
        {name: "OOP", rate: "90%", img:'./images/icons/oop.png' },
        {name: "MVC", rate: "80%", img:'./images/icons/mvc.png' },
        {name: "Elasticsearch", rate: "60%", img:'./images/icons/elk.png' },     
    ];

    //realizando un mapeo a los arreglos correspondietnes a las habilidades y agregandolos al div bars-container con la descripcion, iconos y barras (dependiendo del tamaño de la pantalla del dispositivo)
    //Maping all the skills and append to bars-container div with description, icons and bars (depending of the screen-size device)
    skillsRate1.map(skill => { 
        return (
        $("#bars-container1").append(   
            `<div class="row">
                <img class="skill-icon col-1" src="${skill.img}" ></img>
                <p class='skill-label text-white col-4'>${skill.name}</p>
            </div>`,
            `<div class="progress animation-bar">
                <div class="progress-bar skill-bar progress-bar-striped progress-bar-animated" role="progressbar" style='width: ${skill.rate}' aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${skill.rate}</div>
            </div>`)      
    )});
    skillsRate2.map(skill => { 
        return(
        $("#bars-container2").append(
            `<div class="row">
                <img class="skill-icon col-lg-1 col-sm-4" src="${skill.img}" ></img>
                <p class='skill-label text-white col-4'>${skill.name}</p>
            </div>`,
            `<div class="progress animation-bar">
                <div class="progress-bar skill-bar progress-bar-striped progress-bar-animated" role="progressbar" style='width: ${skill.rate}' aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${skill.rate}</div>
            </div>`)  
    )});
    $(".skills").hover(function(){
        $(".progress-bar").addClass("load-bar");
      },
      function(){
        $(".progress-bar").removeClass("load-bar");
      });

      //Decarando e inicializando un arreglo de objetos con información sobre proyectos
      //Declaring and initializing an array of objects with information about projects
      const projects = [
        {
            name: "MALMA Designs", 
            description: "A landin page presenting the autum collection of MALMA designs", 
            image: "./images/malma.jpg", 
            link: "https://matiasmedrano66.github.io/malmalandingspa/",
            repo: "https://github.com/Matiasmedrano66/malmaspacode"
        },
        {
            name: "Break Timer",
            description: "With this Break Timer you can keep track of all your training rutines", 
            image: "./images/timer.jpg", 
            link:"https://matiasmedrano66.github.io/trainingtimemachine/",
            repo: "https://github.com/Matiasmedrano66/trainingtimemachine/tree/master"
        },
        {
            name: "Expenses Tracker", 
            description: "Keep track of your money expenses with this great app", 
            image: "./images/expenses.jpg", 
            link: "https://matiasmedrano66.github.io/expensestracker/",
            repo: "https://github.com/Matiasmedrano66/expensestracker"
        }
    ]
    //realizando un mapeo del arreglo de proyectos y agregandolos al dic cards-container con su correspondiente titulo, descripcion, imagen y liks al repositorio y al proyecto
    //Maping all the projects and append to the cards-container div with title, description, image and links to the repository and the project itself
    projects.map(project => {
        return (
            $("#cards-container").append(
                `<div class="col-sm-12 col-lg-6 col-xl-4" >
                        <div class="card project-card" >
                            <a href=${project.link} target="_blank"><img src=${project.image} class="card-img-top" alt="..." ></img></a>
                            <div class="card-body">
                                <h5 class="card-title">${project.name}</h5>
                                <p class="card-text">${project.description}</p>
                                <a href=${project.link} target="_blank" class="btn card-button-page">Project</a>
                                <a href=${project.repo} target="_blank" class="btn card-button-repo">Repository</a>
                            </div>
                        </div>
                </div>`
            ))
        });
    
    //Funcionalidad del boton de scrollTop
    //Funcionality of scrollTop button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
             $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
            }, 400);
        return false;
    });

});

//Validacion del formularion de contacto
//Contact form validation
function validate(){
let txtName = document.getElementById("name");
let txtEmail = document.getElementById("email");
let txtSubject = document.getElementById("subject");
let txtMessage = document.getElementById("message");

    if(txtName.value == ""){
        Swal.fire({
            icon: 'error',
            text: 'Please insert your Name!',
          })
        return false;
    }  
    if(txtEmail.value == ""){
        Swal.fire({
            icon: 'error',
            text: 'Please insert your Email!',
          })
        return false;
    }
    if(txtSubject.value == ""){
        Swal.fire({
            icon: 'error',
            text: 'Please insert a Subject!',
          })
        return false;
    }  
    if(txtMessage.value == ""){
        Swal.fire({
            icon: 'error',
            text: 'Please write a Message!',
          })
        return false;
    }  

    return true;
}  

//Contando los caracteres del elemento textarea que contiene el cuerpo del mensaje, mediante una funcion
//Counting chars of textarea message
function charCount(){
    let txtMessageLength = document.getElementById("message");
    document.getElementById("count").innerHTML = txtMessageLength.value.length;
}

