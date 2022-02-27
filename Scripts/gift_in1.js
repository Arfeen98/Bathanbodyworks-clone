
    var gift_data=[
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce50b09f/crop/026268190_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"A Thousands Wishes",
        uses:"Ultimate Hydration Body Cream",
        price:450,
    },
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf04b4e6d/crop/026300695_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"FairyTale",
        uses:"Super Smooth Body Lotion",
        price:400,
    },
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7a5f1f22/crop/026393539_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"Gingham Love",
        uses:"Ultimate Hydration Body Cream",
        price:450,
    },
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa3bae3e1/crop/026393064_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"Black Cherry Merlot",
        uses:"Gentle Gel Hand Soap",
        price:280,
    },
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwaf3dc995/crop/026407750_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"Fiji White Sands",
        uses:"Gentle Hand Soap",
        price:180,
    },
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0ae07f6e/crop/026419429_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"Coconut Sandalwood",
        uses:"Gentle Foaming Hand Soap",
        price:210,
    },
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1a04ae08/crop/026407242_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"Beautiful Day",
        uses:"Gentle Foaming Hand Soap",
        price:180,
    },
    { 
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1f18944/crop/026410629_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Pink Watermelon",
    uses:"Concenttrated Room Sprays",
    price: 450,
    },

    ]
    localStorage.setItem("gift_Data",JSON.stringify(gift_data))
    var data=JSON.parse(localStorage.getItem("gift_Data"));
    var cartPage = JSON.parse(localStorage.getItem('cartPage')) || [];

    
    // cartLength()
    data.map(function(elem){
  //  console.log(data);
    var maindiv=document.createElement("div");
    maindiv.setAttribute("class","box");

    var img=document.createElement("img");
    img.setAttribute("src",elem.image_url);

    var name=document.createElement("h2");
    name.innerText=elem.name;

    var uses=document.createElement("h4");
    uses.innerText=elem.uses;

    var price=document.createElement("h2");
    price.innerText="Rs "+ elem.price;

    var cart=document.createElement("button");
    cart.innerText="ADD TO BAG";
    cart.setAttribute("class","btn");

    maindiv.append(img,name,uses,price,cart);

    document.querySelector("#container2").append(maindiv);     
    document.querySelector("#container2").append(maindiv);     
    cart.addEventListener('click',function(){
            if(!cartPage.includes(elem)){
                cartPage.push(elem);
                localStorage.setItem('cartPage',JSON.stringify(cartPage));
                alert('Added To Cart')
            
            }
        });
        function cartLength(){
        var cartItem = document.querySelector('.cartSize');
        var Len = JSON.parse(localStorage.getItem('cartPage'))||[];
        if(Len.length > 0){
            cartItem.innerText = '(' + Len.length + ')';
        }
    }

});


    
var gift_data2=[
{
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd55f9605/crop/026360580_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"Moonlight Path",
        uses:"Super Smooth Body Lotion",
        price:399,
    },
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0f485df2/crop/026297830_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"Beautiful Day",
        uses:"Ultimate Hydration Body Cream",
        price:450,
    },
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc189b575/crop/026240389_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"A Thousand Wishes",
        uses:"Ultimate Hydration Body Cream",
        price:350,
    },
    {
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd58c0d1f/crop/026400341_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
        name:"Confetti Day Dream",
        uses:"Ultimate Hydration Body Cream",
        price:600,
    },
    { 
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw881e45ac/crop/026410631_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Pink Apple Punch",
    uses:"Concenttrated Room Sprays",
    price: 750,
    },
    { 
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1f18944/crop/026410629_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Pink Watermelon",
    uses:"Concenttrated Room Sprays",
    price: 450,
    },

    { 
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfc594c6f/crop/026410616_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Coconut Sandalwood",
    uses:"Concenttrated Room Sprays",
    price: 850,
    },
    { 
        image_url:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.1f3/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9e410d94/crop/026438911_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    name: "Tiki Beach",
    uses:"Concenttrated Room Sprays",
    price: 800,
    },
    
]

localStorage.setItem("gift_Data2",JSON.stringify(gift_data2))
    var data2=JSON.parse(localStorage.getItem("gift_Data2"));
    var cartPage = JSON.parse(localStorage.getItem('cartPage')) || [];

displayData(data)
function displayData(data){
    data2.map(function(elem){
  //  console.log(data);
    var maindiv=document.createElement("div");
    maindiv.setAttribute("class","box");

    var img=document.createElement("img");
    img.setAttribute("src",elem.image_url);

    var name=document.createElement("h2");
    name.innerText=elem.name;

    var uses=document.createElement("h4");
    uses.innerText=elem.uses;

    var price=document.createElement("h2");
    price.innerText="Rs "+ elem.price;

    var cart=document.createElement("button");
    cart.innerText="ADD TO BAG";
    cart.setAttribute("class","btn");

    maindiv.append(img,name,uses,price,cart);

    document.querySelector("#container3").append(maindiv);     
    document.querySelector("#container3").append(maindiv); 

    cart.addEventListener('click',function(){
            if(!cartPage.includes(elem)){
                cartPage.push(elem);
                localStorage.setItem('cartPage',JSON.stringify(cartPage));
                alert('Added To Cart')
                window.location.href="cartPage.html"
                
        
            }
        });
});
}
