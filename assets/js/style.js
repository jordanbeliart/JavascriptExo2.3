//déclaration d'une variable "image" qui récupère l'élément "photo"
var image = document.getElementById('photo');
//déclaration d'une variable "num" qui va correspondre à un état "1"
var num = 1;
//déclaration d'un évènement qui va écouter la variable "image" afin de déclencher la fonction "size" dès qu'il entendra le "click"
image.addEventListener('click', size);
//déclaration de la fonction "size"
function size(){
/* si ma variable "num" est belle et bien égale à l'état "1", alors au "click"
la variable "num" passera à l'état "0", et la source de l'image (cf"image.src")
correspondra à l'image en grand format */
  if(num == 1){
    num = 0;
    image.src ='assets/img/imgBigSize.jpg';
/* sinon, càd si la variable "num" n'est pas égale à "1", alors au "click"
la variable "num" repassera à l'état "1" et la source de l'image sera donc l'image en petit format */
  } else{
    num = 1;
    image.src ='assets/img/imgSmallSize.jpg';
  }
};
