async function addProductCard(json, id) {
    // fetch json file 
    const response = await fetch(json);
    const productsData = await response.json();
    const productsDataSmall = productsData.slice(0, 4);
    const productsDataMedium = productsData.slice(0, 6);
    const productsDataLarge = productsData.slice(0, 8);
    // ----------------------------------------

    // forEach the json file and make new element for regular product section

    const section = document.getElementById(id);
    const bodyWidth = document.body.clientWidth;

    if (bodyWidth < 375) {
        productsDataSmall.forEach(productData => {
            const newElement = document.createElement('div');
            newElement.classList.add('products-card');
            newElement.innerHTML =
                `
                <figure class="products-img-container">
                    <img class="products-img" src=${productData?.image}>
                </figure>
                <p class="products-name secondary-title">${productData?.title}</p>
                <p class="products-price subtitle">${productData?.price}</p>
                <button class="btn-secondary regular-products-btn">
                    <p class="btn-secondary-text">Add to Cart</p>
                    <img class="btn-secondary-icon" src="images/icons/shopping-cart2.svg" alt="">
                </button>
            `

            section.appendChild(newElement);
        })
    }

    else if (bodyWidth < 768) {
        productsDataMedium.forEach(productData => {
            const newElement = document.createElement('div');
            newElement.classList.add('products-card');
            newElement.innerHTML =
                `
                <figure class="products-img-container">
                    <img class="products-img" src=${productData?.image}>
                </figure>
                <p class="products-name secondary-title">${productData?.title}</p>
                <p class="products-price subtitle">${productData?.price}</p>
                <button class="btn-secondary regular-products-btn">
                    <p class="btn-secondary-text">Add to Cart</p>
                    <img class="btn-secondary-icon" src="images/icons/shopping-cart2.svg" alt="">
                </button>
            `

            section.appendChild(newElement);
        })
    }
        
    else {
        productsDataLarge.forEach(productData => {
            const newElement = document.createElement('div');
            newElement.classList.add('products-card');
            newElement.innerHTML =
                `
                <figure class="products-img-container">
                    <img class="products-img" src=${productData?.image}>
                </figure>
                <p class="products-name secondary-title">${productData?.title}</p>
                <p class="products-price subtitle">${productData?.price}</p>
                <button class="btn-secondary regular-products-btn">
                    <p class="btn-secondary-text">Add to Cart</p>
                    <img class="btn-secondary-icon" src="images/icons/shopping-cart2.svg" alt="">
                </button>
            `

            section.appendChild(newElement);
        })
    }

    // find more button functionality
    const findMoreBtn = document.getElementById('regularSeeMoreBtn');

    findMoreBtn.addEventListener('click', function () {
        findMoreBtn.style.display = 'none';
        const countElement = section.childElementCount;
        if (countElement === productsData.length) {
            return;
        }
        const allProductsData = productsData.slice(countElement);

        allProductsData.forEach(productData => {
            const newElement = document.createElement('div');
            newElement.classList.add('products-card');
            newElement.innerHTML =
        `
            <figure class="products-img-container">
                <img class="products-img" src=${productData?.image}>
            </figure>
            <p class="products-name secondary-title">${productData?.title}</p>
            <p class="products-price subtitle">${productData?.price}</p>
            <button class="btn-secondary regular-products-btn">
                <p class="btn-secondary-text">Add to Cart</p>
                <img class="btn-secondary-icon" src="images/icons/shopping-cart2.svg" alt="">
            </button>
        `

            section.appendChild(newElement);
        })
    })

}

addProductCard('./jsonData/regularProducts.json', 'regularProductsContainer')