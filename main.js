// var prouductNameInput=document.getElementById('ProuductName');
// var prouductpriceInput=document.getElementById('ProuductPrice');
// var prouductDescInput=document.getElementById('ProuductDesc');
// var prouductCategoreyInput=document.getElementById('ProuductCategory');
// var prouductImageInput=document.getElementById('productImage');
// var searchInput=document.getElementById('searchInput')
// var rowdata=document.getElementById('rowdata');

// var productlist=JSON.parse(localStorage.getItem('product'));
// console.log(productlist);
// displayproduct(productlist);

// function addproduct(){
//     var product={
//          Name:prouductNameInput.value,
//          category:prouductCategoreyInput.value,
//          Price:prouductpriceInput.value,
//          Desc:prouductDescInput.value,
//          image:'Daniels/'+prouductImageInput.files[0]?.name
//     }
//     productlist.push(product);
//     console.log(productlist);
//     // clearform();
//     localStorage.setItem('product', JSON.stringify(productlist))
//     displayproduct(productlist);
// }
// function clearform(){
//     prouductNameInput.value=null;
//     prouductpriceInput.value=null;
//     prouductCategoreyInput.value=null;
//     prouductDescInput.value=null;
//     prouductCategoreyInput.value=null;
// }
// function displayproduct(arr){
//     var hamads=``
//     for( var i=0 ; i< productlist.length ;i++ ){
//     hamads+=` <div class="card col-lg-4 mx-5" style="width: 18rem;">
//   <img src=${arr[i].image} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${arr[i].Name}</h5>
//     <p class="card-text">${arr[i].Desc}</p>
//    <p>
//       <h6><span class="fw-bold">price: </span>${arr[i].Price}</h6>
//        <h6><span class="fw-bold">category: </span>${arr[i].category}</h6>
//     </p>
//    <div class="d-flex justify-content-between">
//       <button class="btn btn-primary">UPDATE </button>
//      <button onclick="deleteproduct(${i})" class="btn btn-danger">DELETE </button>
//    </div>
//   </div>
// </div>`
//     }
//     rowdata.innerHTML=hamads;
// }
// function deleteproduct(deletindex){
//     console.log(deletindex)
//     productlist.splice(deletindex,1);
//     localStorage.setItem('product',JSON.stringify(productlist));
//     displayproduct(productlist);
// }


// function searchProduct() {
//     var searchResult = [];
//     var query = searchInput.value.toUpperCase();

//     for (var i = 0; i < productlist.length; i++) {
//         if (productlist[i].Name.toUpperCase().includes(query)) {
//             searchResult.push(productlist[i]);
//         }
//     }

//     displayproduct(searchResult);
// }

// function searchproduct(){
//     var searchReasult=[];
//     for(var i=0; i<productlist.length ;i++){
//          if( productlist[i].Name.toUpperCase().includes(searchInput.value.toUpperCase())){
//             searchReasult.push(productlist[i])
//          }
//     }
//    console.log(searchReasult)
//    displayproduct(searchReasult);
// }

// var prouductNameInput = document.getElementById('ProuductName');
var prouductpriceInput = document.getElementById('VISIT');
var prouductDescInput = document.getElementById('ProuductDesc');
var rowdata = document.getElementById('rowdata');
var addbtn = document.getElementById('addbtn');
var updatebtn = document.getElementById('updatebtn');
var rowdata = document.getElementById('rowdata');

var productlist = JSON.parse(localStorage.getItem('product')) || [];
console.log(productlist);
displayproduct(productlist);

function addproduct() {

if(validateForme(prouductpriceInput)&&
validateForme(prouductDescInput)
){
      var product = {
        Price: prouductpriceInput.value,
        Desc: prouductDescInput.value,
    };
    productlist.push(product);
    localStorage.setItem('product', JSON.stringify(productlist));
    displayproduct(productlist);
    clearform();
}
}

function clearform() {
    // prouductNameInput.value = "";
    prouductpriceInput.value = "";
    // prouductCategoreyInput.value = "";
    prouductDescInput.value = "";
}

function displayproduct(arr) {
    var hamads = ``;
    for (var i = 0; i < arr.length; i++) {
        hamads += `
       <div class="col-12 bg-light kjh p-3 mb-2">
  <div class="row align-items-center text-center gy-2">
    <div class="col-12 col-md-3">
      <h5 class="card-title mb-0">${i + 1}</h5>
    </div>

    <div class="col-12 col-md-3">
      <p class="card-text fw-bold mb-0">${arr[i].Desc}</p>
    </div>

    <div class="col-12 col-md-3">
      <a href="https://www.${arr[i].Price}/" target="_blank" class="btn btn-warning w-100 fw-bold">
        <i class="fa-solid fa-eye"></i> VISIT
      </a>
    </div>

    <div class="col-12 col-md-3">
      <button class="btn btn-danger w-100" onclick="deleteproduct(${i})">
        <i class="fa-solid fa-trash"></i> DELETE
      </button>
    </div>
  </div>
</div>
`;
    }
    rowdata.innerHTML = hamads;
}

function deleteproduct(deletindex) {
    productlist.splice(deletindex, 1);
    localStorage.setItem('product', JSON.stringify(productlist));
    displayproduct(productlist);
}


function validateForme(element){
   console.log(element.id)
   var regex={
   ProuductDesc:/^[\w ]{4,300}$/,
   VISIT: /^([\w-]+\.)+[\w-]{2,}$/
   }
   console.log(regex[element.id])

    if (regex[element.id].test(element.value)) {
        element.classList.add('is-valid')
           element.classList.remove('is-invalid')
          element.nextElementSibling.classList.add('d-none')
          return true;
    } else {
          element.classList.add('is-invalid')
           element.classList.remove('is-valid')
          element.nextElementSibling.classList.remove('d-none')
          return false;
    }
}



//  <div class="col-lg-12 bg-light kjh">
//           <div class="row">
//             <h5 class="card-title col-md-3 my-2 text-center">${[i+1]}</h5>
//             <p class="card-text col-md-3 fw-bold my-2 text-center">${arr[i].Desc}</p>
//               <button class="btn btn-warning col-md-3 my-1 text-center fdfd fw-bold "> <a href="https://www.${arr[i].Price}/" ><i class="fa-solid fa-eye"></i> VISIT</a></button> 
//              <button class="buttonn my-1 text-center col-sm-3 fdfb " onclick="deleteproduct(${i})">
//              <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>
//           </div>
//         </div>


//  <button>- <a href="https://www.youtube.com/" target="blank" >يوتيوب</a></button> 
//  <h6 class="col-lg-3 my-1 text-center fw-bold">${arr[i].Price}</h6>
//  <button onclick="deleteproduct(${i})" class="btn btn-danger my-1 text-center fdfb fw-bold"><i class="fa-solid fa-trash-can"></i> DELETE</button>
//             </div>