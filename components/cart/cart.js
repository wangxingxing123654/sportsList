
 angular.module('cart',[])
     .factory('carts',function () {
         var cartData=[];
         return {
             addProducts:function (name,id,price) {
                 var addedToExistingItem=false;
                 for(var i=0;i<cartData.length;i++){
                     if(cartData[i].id==id){
                         cartData[i].count++;
                         addedToExistingItem=true;
                         break;
                     }
                 }
                 if(!addedToExistingItem){
                     cartData.push({
                         count:1,id:id,price:price,name:name
                     })
                 }
             },
             removeProducts:function (id) {
                 for(var i=0;i<cartData.length;i++){
                     if(cartData[i].id==id){
                         cartData.splice(id,1);
                         break;
                     }
                 }
             },
             getProducts:function () {
                 return cartData;
             }
         }
     })
     .directive('cartSummary',function (carts) {
         return{
             restrict:'E',
             templateUrl:'/components/cart/cartSummary.html',
             controller:function ($scope) {
                 var cartData=carts.getProducts();
                 $scope.total=function () {
                     var total=0;
                     for(var i=0;i<cartData.length;i++){
                         total+=cartData[i].price*cartData[i].count;
                     }
                     return total;
                 }
                 $scope.itemCount=function () {
                     var total=0;
                     for(var i=0;i<cartData.length;i++){
                         total+=cartData[i].count;
                     }
                     return total;
                 }
             }
         }
         
     })