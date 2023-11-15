async function addMostViewCard(json, id) {
    // fetch json file 
    const response = await fetch(json);
    const productsData = await response.json();
    // ----------------------------------------

    // forEach the json file and make new element for regular product section

    const section = document.getElementById(id);

    productsData.forEach(productData => {
        const { image, title, offerPrice, mainPrice, availableItem, discount } = productData;
        const newElement = document.createElement('div');
        newElement.classList.add('best-deals-card');
        newElement.innerHTML =
            `
            <p class="best-deals-discount-card">${discount}</p>
            <figure class="best-deals-card-img-container">
                <img class="best-deals-card-img" src=${image}>
            </figure>

            <div class="best-deals-card-info-container">
                <h3 class="best-deals-card-title secondary-title">${title}</h3>
                <p class="best-deals-card-price product-price">
                ${offerPrice} - <del class="best-deals-main-price product-price-main">${mainPrice}</del>/piece
                </p>
                <img class="best-deals-card-rating" src="images/bestDealsImg/rating.svg">                                        
            </div>

            <div class="best-deals-btn-holder">
                <p class="product-stock">Available: ${availableItem}</p>
                <button class="btn-secondary best-deals-card-btn">
                    <p class="btn-secondary-text">Add to Cart</p>
                    <img class="btn-secondary-icon best-deals-card-btn-icon" src="images/icons/shopping-cart2.svg"
                        alt="">
                </button>
            </div>
            `

        section.appendChild(newElement);
    })

}

addMostViewCard('../jsonData/bestDealsProducts.json', 'bestDealsCards')