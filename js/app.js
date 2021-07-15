$(function () {
  $('.btn-outline-success').click(function (e) {
    const product = $(this).data();
    console.log(product)



    
    const itemTemplate = document.getElementById('basketTemplate');
    if(itemTemplate) {
      const basketItem = itemTemplate.children[0].cloneNode(true);
      const firstRow = basketItem.children[0].children[0]
      const thirdRow = basketItem.children[0].children[2]
      firstRow.innerHTML = product.title
      thirdRow.innerHTML = "£" + product.price
      console.log(basketItem)
      const shoppBasket = document.getElementById('shoppingBasket')
      shoppBasket.appendChild(basketItem)
    }
  });
})
