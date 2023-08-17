const pElement = document.querySelectorAll('.sectin-center-text p')

pElement[0].classList.add('active-p')
    pElement.forEach((element , i)=>{
        element.addEventListener('click' , function(){
            for(let i = 0; i<pElement.length; i++){
                pElement[i].classList.remove('active-p')
            }
            element.classList.add('active-p')
        })
    })

const sectionbigcart = document.querySelector('.section-container-cart')
const url = `https://json-server-wigy.vercel.app/posts`
fetch(url).then((req)=> req.json()).then((data)=>{
    data.forEach((elem)=>{
        console.log(elem.img[0].img)
        sectionbigcart.innerHTML+=` 
        <div class="section-block-cart">
              <img src='${elem.img[0].img}'>
              <p>lorem</p>
               </div>
        `
    })
})







