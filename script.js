function ProcessAdd() {
    let productImg = document.getElementById("product-img").value;
    let productName = document.getElementById("product-name").value;
    let productNewPrice = document.getElementById("new-price").value;
    let productOldPrice = document.getElementById("old-price").value;
    let productType = document.getElementById("product-type").value;
    let productCode = document.getElementById("product-code").value;

    const products = document.getElementById('products');
    const product_man = document.getElementById("product_man");
    const product_woman = document.getElementById("product_woman");

    const card = document.createElement('div');
    card.classList.add('product-card');
    
    const image = document.createElement('img');
    card.appendChild(image);
    image.src = productImg;
    const info = document.createElement('div');
    info.classList.add('product-info');
    info.innerHTML = `
    <h5>${productName} ${productType} - ${productCode}</h5>
    <p style="display: inline-block;">${productNewPrice} vnd</p>
    <p style="display: inline-block;" class="line-through">${productOldPrice} vnd</p>
    <br>
    <button class="buy-btn">Đặt mua</button>`;
    card.appendChild(info);


    if (productType == "nam" || productType == "Nam") {
        product_man.appendChild(card);
    }else if(productType == "nu" || productType == "Nu"){
        product_woman.appendChild(card);
    }else {
        const newDiv = document.createElement("div");
        newDiv.textContent = "Lỗi rồi, nhập lại Type đi! ";
        products.appendChild(newDiv);
    }
}