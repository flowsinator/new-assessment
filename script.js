// Obtain the img element, and assign it to the image variable
let image

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "300px") {
    image.style.height = "150px"
    image.style.width = "150px"
  }
  else {
    image.style.height = "300px"
    image.style.width = "300px"
  }
})