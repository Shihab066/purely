async function addProductCard(json, id) {
    // fetch json file 
    const response = await fetch(json);
    const productsData = await response.json();
    // ----------------------------------------


    // map the json file and make new element
    const section = document.getElementById(id);


    productsData.forEach(productData => {
        const newElement = document.createElement('div');
        newElement.classList.add('products-card');
        newElement.innerHTML =
        `
            <figure class="products-img-container">
                <img class="products-img" src=${productData?.image}>
            </figure>
            <p class="products-name secondary-title">${productData?.title}</p>
            <p class="products-price subtitle">${productData?.price}</p>
            <button class="btn-secondary">
                <p class="btn-secondary-text">Add to Cart</p>
                <img class="btn-secondary-icon" src="images/icons/shopping-cart2.svg" alt="">
            </button>
        `

        section.appendChild(newElement);
    })

}

addProductCard('./jsonData/regularProducts.json', 'regularProductsContainer')