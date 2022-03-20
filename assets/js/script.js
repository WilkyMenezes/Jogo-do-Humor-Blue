var img = document.querySelectorAll(".min")


    var contador = 0;
    var btn = document.getElementById("btn")

 function trocar () {
    for (let index = 0; index < img.length; index++) {
        const element = img[index];
        
        console.log(element)

        if (index == contador){
            element.style.display ="block"
        }else {
            element.style.display ="none"
        }
        console.log(contador)
    }
 }
 trocar()


    btn.addEventListener('click', ()=>{
        contador++
        trocar()
        if (contador == 8){
            contador = 0;
        }

    });







