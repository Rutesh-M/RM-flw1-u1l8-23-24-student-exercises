// html elements
let tile1 = document.querySelector('.tile-1')
let tile2 = document.querySelector('.tile-2')
let tile3 = document.querySelector('.tile-3')
let tile4 = document.querySelector('.tile-4')
let tile5 = document.querySelector('.tile-5')
let tile6 = document.querySelector('.tile-6')
let tile7 = document.querySelector('.tile-7')
let tile8 = document.querySelector('.tile-8')
let tile9 = document.querySelector('.tile-9')


/********* NOTE: unsure which tile is which? Be sure to reference the HTML when you need to double-check! ************/


// 1. Tile 1 feels a little sad. 
// - Update the inner HTML to show an encouraging message! 
// - Something like "YOU GOT THIS!" or even a "You're a beautiful person!" 
let para=document.createElement("p")
para.innerHTML="YOU GOT THIS!"
tile1.appendChild(para)


// 2. Tile 2 has a button. 
// - Create a click event and have the background color of tile 2 change to a shade of green.
// - BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.
// - Can you see if there's a way to toggle it???
let button1= document.querySelector('.tile-2-button')

button1.addEventListener('click', function () {
  tile2.style.backgroundColor="green";
});
// 3. What's this? A totoro? Where's his friends? 
// - Using createElement, create a friend (an image element).
// - Once created, set the src of it to the image address.
// - Append the element to tile 3. 
// - Need some inspiration? Go to giphy.com, search a character and choose the "stickers".
let totoro=document.createElement("img")

  totoro.src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTB6NGkyM2s3c3c1ODIxang1eTE0MnNodnJ1NDQ0aXZ5Ym55MWtrbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q81HvLDOingrbbpc9K/giphy.gif"
    tile3.appendChild(totoro)
// 4. Oh no! A broken image! We need to fix this.
// - Set the src for tile 4 to have an image of your favorite TV show.
let img2=document.createElement("img")
img2.src="https://people.com/thmb/xE9UNogGcWjaA7Zkj-nWfEz6Vtk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(689x409:691x411)/Ezra-Miller-as-Flash-Warner-Bros-080422-1a1d7a5357a84f5e8fe25fc4833afeef.jpg"
tile4.appendChild(img2)



// These following tasks may require a little bit of digging. 
// Unsure how to complete the task? Use your resources! Code Nation reference table might help. 
// Can't find it there? Google search the keywords of what you're trying to do and use web dev documentation! 
// W3schools, MDN Web Docs, and Stack Overflow all super reliable 😊


// 5. Hmm. Looks like the font is too small. 
// - Update the font-size of tile 5 to 35 pixels.
tile5.style.fontSize="40px"

// 6. Another sad box! 
// - Let make this tile 6 feel special and add a gradient background! 
// - What kind of gradient? What color? YOU CHOOSE!
tile6.style.background="linear-gradient(to right,black,blue)"
// 7. Too many squares. 
// - Let's change tile 7 to have rounded edges - be sur7e to search for which CSS property does this :)
tile7.style.borderRadius="50px"
// 8. Replace the image with your favorite emoji. 
// - Try going to this site to search: https://emojipedia.org/

// 9. Display a random number in the tile when the button is clicked.
// - BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.
let but2=document.querySelector(".random-button")
let para2=document.createElement("p")
but2.addEventListener("click", function(){
  let ran=Math.random();
  para2.innerHTML=ran;
  tile9.appendChild(para2);
  
})


