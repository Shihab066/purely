// this function is used to add card at most view product seciton

async function addMostViewCard(json, id) {
    // fetch json file 
    const response = await fetch(json);
    const productsData = await response.json();
    console.log(productsData)
    // ----------------------------------------

    // forEach the json file and make new element for regular product section

    const section = document.getElementById(id);

    productsData.forEach(productData => {
        const { image, title, price } = productData;
        const newElement = document.createElement('div');
        newElement.classList.add('products-card');
        newElement.classList.add('card');
        newElement.innerHTML =
            `
        <figure class="products-img-container">
            <img class="products-img" src=${image}>
        </figure>
        <p class="products-name secondary-title">${title}</p>
        <p class="products-price subtitle">${price}</p>
        <button class="btn-secondary slider-card-btn">
            <p class="btn-secondary-text">Add to Cart</p>
            <img class="btn-secondary-icon" src="images/icons/shopping-cart2.svg" alt="">
        </button>
            `

        section.appendChild(newElement);
    })

}

addMostViewCard('../jsonData/mostViewProducts.json', 'sliderCards')
