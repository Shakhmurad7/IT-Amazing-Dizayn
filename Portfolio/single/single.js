const id = new URLSearchParams(window.location.search).get(`id`)
const sectionbigcart = document.querySelectorAll('.section-container-cart img');
url = `https://json-server-wigy.vercel.app/posts/${id}`
fetch(url).then((req) => req.json()).then((data)=>{
    console.log(data);
    setid(data)
})


function setid(data){
    sectionbigcart.forEach((elem, i)=>{
        elem.src = data.img[i].img
    })
}
console.log(sectionbigcart);