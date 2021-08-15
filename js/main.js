// // $(document).ready(function(){
// //     $('.btn-button').click(function(){
// //         $('p').hide()
// //     })
   
// // });


// // $(document).ready(function(){
// //     //slideUp
// //     $('.card_content').slideUp()
// //     let icon = true
// //    if(icon){
// //      $('.down').animate({opacity:0})
// //    }
// //    else{
// //     $('.up').animate({opacity:1})
// //    }
// //    $('.card_head').click(function(){
// //     $(this).toggleClass('card_head--color')
// //     $('.card_content').slideUp()
// //       $(this).next().slideToggle()
     
    
// //    console.log($(this).children('.anh').children('.down').addClass('minh'));
  
// //    })
// // });





// //JSON la kieu dinh dang du lieu giup luu tru va van chuyen du lieu de dang hon
// //viet tat cua Javascrip Object Natition
// //chuyen doi tu cac kieu du lieu mang, doi tuong,so, true,false
// //chuyen doi tu JSON sang lieu dinh dang ban dau


// //vi du ve JSON
// var jsonString = '[{"name":"nguyen Hoang Anh","age":20},{"name":"nguyen Honag minh","age":10}]'//mang doi tuong => string
// //chuyen doi ve dinh danh ban dau (mang doi tuong)
// var users = JSON.parse(jsonString)
// console.log(users[0].name);


// //localStorage.setItem("name", "nguyen hoang Anh")
// //co luu so
// //localStorage.setItem("age",20)

// // localStorage.setItem("123", {
// //     name:"hoang anh"
// // })



// //tao 1 danh sach cac users va luu vao localStorage 
// var users = [
//     {
//         name:"Nguyen Hoang Anh",
//         age:20
//     },
//     {
//         name:"Dao thi thanh huyen",
//         age:20
//     }
// ]

// //chuyen mang sang JSON(String)
// var jsonString = JSON.stringify(users)
// console.log(jsonString);
// //luu vao localStorage
// localStorage.setItem('users',jsonString)

// //lay du lieu tu localStorage
// var listUser = JSON.parse(localStorage.getItem("users"))
// console.log(listUser);


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}