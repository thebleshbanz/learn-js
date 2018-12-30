/**
 * object practice and learning *
 */

 var $car = {
     brand : 'BMW',
     price:'10,000 dollor',
     fuel_type:'petrol',
     engine:'1500 hp',
     string : function () {
         return "Brand Of Car is "+this.brand+" And its cost is "+this.price;
     }
 };
 console.log($car.string());