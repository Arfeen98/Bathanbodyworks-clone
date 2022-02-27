    var cartPage = JSON.parse(localStorage.getItem('cartPage'))||[];

    // <---------- MAPPING OF CART ITEMS ------------------>

    carData(cartPage)
  
    //  var parentcart = document.querySelector("#child1");
  
    function carData(cartPage) {
      // parentcart=null;
      // document.querySelector("#container").innerHTML = ""
     
      cartPage.map(function (elem, index) {
       
        console.log(cartPage)

        // -------------> tr
        var row = document.createElement("tr") 
        row.setAttribute("id","row1")
        
        
        var col1 = document.createElement("td")
        col1.setAttribute("class", "col1")

        var div1 = document.createElement("div")
        div1.setAttribute("class", "div1")
        var img = document.createElement("img")
        img.setAttribute("src", elem.image_url)

        var div2 = document.createElement("div")
        div2.setAttribute("class", "div2")
        var name = document.createElement("h2");
        name.innerText = elem.name;
        var uses = document.createElement("h4");
        uses.innerText = elem.uses;

        //  col2.innerText =  ele.quatity;
        var div3 = document.createElement("div")
        div3.setAttribute("class", "div3")

        // var div4 = document.createElement("div")
        // div4.setAttribute("class", "div4")

        var col2 = document.createElement("h3")
        col2.setAttribute("class", "col2")
        col2.innerText = "Rs. " + elem.price;



        // var btn123 = document.createElement("button");
        // btn123.innerText = "+"

        // btn123.addEventListener("click", function () {
        //     increaseData(index)
        // })

        // var btn1234 = document.createElement("button");
        // btn1234.innerText = "-"
        // btn1234.addEventListener("click", function () {
        //     decresingData(index)
        // })




        var del = document.createElement("img");
        del.setAttribute("src", "https://cdn.pixabay.com/photo/2012/04/18/02/43/cross-36646_1280.png");
        del.setAttribute("class", "btn");

        del.addEventListener('click', function () {
          cartPage.splice(index, 1);
          localStorage.setItem('cartPage', JSON.stringify(cartPage));
          window.location.reload();


        });

        div1.append(img);
        div2.append(name, uses)
        // div3.append(btn123,btn1234)
        col1.append(div1, div2)
        row.append(col1, col2,del, div3);

        document.querySelector("#child1").append(row)
        // parentcart.append(row)


      });

    }

    // <------------------ SHOW TOTAL ---------------------------->


    // carData(cartPage)  /// cartPage
    // showtotal()
    // function increaseData(index) {
    //     cartPage[index].quatity++;  // cartPage

    //     carData(cartPage)
    //     showtotal()
    // }


    // function decresingData(index) {
    //     cartPage[index].quatity--;

    //     carData(cartPage)
    //     showtotal()
    // }



   
    var totalAmt = JSON.parse(localStorage.getItem("totalamt"));
    var total = 0;
    function showtotal() {
      var total = cartPage.reduce(function (acc, item) {
        return acc + item.price + (item.price * .10) + (item.price * .16);

      }, 0);

      document.getElementById("text14").innerText = " ORDER TOTAL   :     Rs " + total;

     var t =  discount(total);
     console.log(t)

      // console.log(total)
      // document.localStorage.setItem("Totalamt",JSON.stringify("t"))
    }
  

    showtotal()
    //    console.log(total)
    //<-------------------SHOW TAX ------------------------------------->
    var tax = 0;
    function showtax() {
      var tax = cartPage.reduce(function (acc, item) {
        return acc + item.price * .10;

      }, 0);

      document.getElementById("text12").innerText = "SALES TAX:   Rs " + tax;
    }
    showtax()


    //<--------------------- SHOW SUBTOTAL------------------------->

    var subtotal = 0;
    function showsubtotal() {
      var subtotal = cartPage.reduce(function (acc, item) {
        return acc + item.price;

      }, 0);

      document.getElementById("text10").innerText = "  MERCHANDISE SUBTOTAL :       Rs " + subtotal;
    }
    showsubtotal()


    //<--------------------- SHOW HANDELING -------------------------->
    var handeling = 0;
    function showhandelingprice() {
      var handeling = cartPage.reduce(function (acc, item) {
        return acc + item.price * .16;

      }, 0);

      document.getElementById("text11").innerText = "ESTIMATED SHIPPING & HANDLING - Standard :     Rs " + handeling;
    }
    showhandelingprice()


    //   <----------------- PROMO CODE FUNCTION --------------------->

    localStorage.setItem("totalamt",total)

    function discount(total) {

      document.querySelector("#myform").addEventListener("submit", funApplyPRo)

      function funApplyPRo(event) {
        event.preventDefault();
        // console.log(price1)
        var promo = document.querySelector("#pmo").value;  // .coupontext
        // console.log()
        if (promo == "masai30") {

          var pricee = ((total / 100) * 30);
          var disc = total - pricee
          showdisc(Math.floor(disc))
        }
        else {
          alert("not valid promo code")
        }

      }



      function showdisc(bis) {
        document.querySelector("#discPrice").innerText = bis;


      }
      // window.location.reload();
    }