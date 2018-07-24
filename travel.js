// var images = ["paris.jpg","rome.jpg","maldives.jpg","yellow.jpg"]
// var n = 0
//
// function changeImage()
// {
//   document.getElementById("image").src = images[n]
//   n+=1
//   if (n > images.length-1){
//     n = 0
//   }
// }
// console.log("called changeImage")


var n = 0;

function changeImage() {
  if ( n == 0 ) {
    document.images["flag"].src = "paris.jpg";
    n = 1;
  }
  else if ( n == 1 ) {
    document.images["flag"].src = "rome.jpg";
    n = 2;
  }
  else {
    document.images["flag"].src = "maldives.jpg";
    n = 0;
  }
}
