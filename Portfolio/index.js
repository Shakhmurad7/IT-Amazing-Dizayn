
const pElements = document.querySelectorAll('.sectin-center-text p');

pElements[0].classList.add('active-p');
pElements.forEach((element, i) => {
    element.addEventListener('click', function() {
        pElements.forEach(p => p.classList.remove('active-p'));
        element.classList.add('active-p');

        const title = encodeURIComponent(element.textContent.trim());
        console[title]
        console.log(title);
        if(`https://json-server-wigy.vercel.app/posts?titl=${title}` === `https://json-server-wigy.vercel.app/posts?titl=B%C3%BCt%C3%BCn%20layih%C9%99l%C9%99r`){
            const url = `https://json-server-wigy.vercel.app/posts`;
            
            fetch(url)
            .then(req => req.json())
            .then(data => {
                let cartContent = '';
                data.forEach(elem => {
                    cartContent += `
                    <div class="section-block-cart">
                    
                    <a href="../Portfolio/single.html?id=${elem.id}">
                    <img src="${elem.img[0].img}">
                    <p>lorem</p>
                    </a>
                    </div>`;
                });
                sectionbigcart.innerHTML = cartContent;
            });
        }
        else{
            const url = `https://json-server-wigy.vercel.app/posts?title=${title}`;
            
            fetch(url)
            .then(req => req.json())
            .then(data => {
                let cartContent = '';
                data.forEach(elem => {
                    cartContent += `
                    <div class="section-block-cart">
                    
                    <a href="../Portfolio/single.html?id=${elem.id}">
                    <img src="${elem.img[0].img}">
                    <p>lorem</p>
                    </a>
                    </div>`;
                });
                sectionbigcart.innerHTML = cartContent;
            });
        }
    });
});

const sectionbigcart = document.querySelector('.section-container-cart');
const url = `https://json-server-wigy.vercel.app/posts`;

fetch(url)
    .then(req => req.json())
    .then(data => {
        let cartContent = '';
        data.forEach(elem => {
            cartContent += `
            <div class="section-block-cart">
                        <a href="../Portfolio/single.html?id=${elem.id}">
                        <img src="${elem.img[0].img}">
                        <p>lorem</p>
                        </a>
            </div>`;
        });
        sectionbigcart.innerHTML = cartContent;
    });







