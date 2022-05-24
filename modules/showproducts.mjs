
import { getProducts } from '/modules/api.product.mjs'

export function showProduct(url, parseParams){

    let Products = getProducts(url, parseParams);
    
    let main_div = document.getElementById('indexProducts'); 
    Products.then(data => {
    
        createCardProduct(data, main_div);

         })
} 



const createCardProduct =  ( product_data , main_div) =>
{
      
       product_data.forEach(element => {
    
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-3', 'py-3', 'cardiv');
        main_div.appendChild(cardDiv);

        let cardProduct = document.createElement('div');
        cardProduct.classList.add('card', 'cardProduct');
        cardDiv.appendChild(cardProduct);

        let image_product = document.createElement('img');
        image_product.classList.add('imageCard');
        image_product.src = element.image;
        cardProduct.appendChild(image_product);
        
        let quick_view = document.createElement('div');
        let link_quick_view = document.createElement('a');
        quick_view.classList.add('quickView');
        link_quick_view.classList.add('linkquickView');
        
        link_quick_view.innerText = 'Quick View';
        quick_view.appendChild(link_quick_view);
        cardProduct.appendChild(quick_view);
        
        let card_body = document.createElement('div');
        cardDiv.appendChild(card_body);
        card_body.classList.add('cardBody', 'px-2');
        
        let flex_div = document.createElement('div');
        let link_product = document.createElement('a');
        let category_product = document.createElement('p'); 
        let heart = document.createElement('i');
        heart.classList.add('fa-regular','fa-heart', 'heart');

        flex_div.classList.add('d-flex','justify-content-between','my-3');
        link_product.setAttribute('href', '#');
        category_product.classList.add('categoryProduct');
        link_product.classList.add('categoryProduct');
        category_product.innerText = element.category;

        card_body.appendChild(flex_div);
        flex_div.appendChild(link_product);
        flex_div.appendChild(heart);
        link_product.appendChild(category_product);

        let title_product = document.createElement('p');
        title_product.classList.add('titleProduct');
        title_product.innerText = element.title;
        card_body.appendChild(title_product);

        let price_product = document.createElement('p');
        price_product.classList.add('priceproduct');
        price_product.innerText = `$${element.price}`;
        card_body.appendChild(price_product);
        
        let div_to_card = document.createElement('div');
        div_to_card.classList.add('divtocard');
        let add_to_card = document.createElement('a');
        add_to_card.innerText = '+Add To Cart';
        add_to_card.classList.add('addtocard');
        div_to_card.appendChild(add_to_card);
        card_body.appendChild(div_to_card);

     });
    

}