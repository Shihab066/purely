async function addTrandingProducts(json, id) {
    const response = await fetch(json);
    const productData = await response.json();
    const productDataReduce = productData.slice(0, 3);

    const trandingSection = document.getElementById(id);

    productDataReduce.forEach(productData => {
        const { image, title, offerPrice, mainPrice } = productData;
        const newElement = document.createElement('div');
        newElement.classList.add('tranding-product-card');
        newElement.innerHTML =
        `<figure class="tranding-product-img-container">
            <img class="tranding-product-img" src=${image}>
        </figure>
    
        <div class="tranding-product-info">
            <div>
                <h3 class="tranding-product-title secondary-title">${title}</h3>
                <div class="tranding-product-price-container">
                    <p class="tranding-product-offer-price product-price">${offerPrice}</p>
                    <p class="tranding-product-main-price product-price-main">
                        <del>
                            ${mainPrice}
                        </del>
                    </p>
                </div>
            </div>
            <button class="btn-secondary">
                <p class="btn-secondary-text">Add to Cart</p>
                <img class="btn-secondary-icon" src="images/icons/shopping-cart2.svg">
            </button>
        </div>
        `;

        trandingSection.appendChild(newElement);
    })
}


addTrandingProducts('../jsonData/trandingProducts.json', 'trandingProduct');
addTrandingProducts('../jsonData/bestSellerProduct.json', 'bestSellerProduct');

export default addTrandingProducts;