const hamburger = document.getElementById("hamburger")
const menulist = document.getElementById("menu-links")
const close = document.getElementById("close")
const email = document.getElementById('email')
const errorMessage = document.getElementById('badMessage')
const overlay = document.getElementById('overlay')

hamburger.addEventListener('click', ()=>{
    menulist.style.width="250px"
    overlay.classList.toggle('keep')
})
close.addEventListener('click', ()=>{
    menulist.style.width='0px'
    overlay.classList.toggle('keep')

})
overlay.addEventListener("click", ()=>{
    menulist.style.width='0px'
    overlay.classList.toggle('keep')

})

function validateEmail (){
    let emailName = email.value
    let regExp = /[a-zA-z @]/
    if (regExp.test(emailName)){
        errorMessage.innerText="valid Input"
        return errorMessage.style.color='darkblue'
    }else{
        errorMessage.innerText ="Invalid input and cannot be empty"
        return errorMessage.style.color="red"
    }
}
email.addEventListener('keyup', validateEmail)
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("btn");
var dot = document.getElementById("dot");
var mores = document.getElementById("mores");
var btns = document.getElementById("btns");
function myFunction() {
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
function myFunctionText() {
    if (dot.style.display === "none") {
      dot.style.display = "inline";
      btns.innerHTML = "Read more";
      mores.style.display = "none";
    } else {
      dot.style.display = "none";
      btns.innerHTML = "Read less";
      mores.style.display = "inline";
    }
  }
 

  btnText.addEventListener('click', myFunction)
  btns.addEventListener('click', myFunctionText)

  // const hideOne = document.getElementById('hide-one')
  const currentDate=document.getElementById('date-now')

  const date= new Date();
  currentDate.textContent=date
  // currentDate.textContent=date.toUTCString();
  // currentDate.textContent=date.toLocaleString('en-GB');

  const dotsOne= document.getElementById('dots-one')
  const btnOne = document.getElementById('btn-one')
  const moreOne = document.getElementById('more-one')
  const dotsTwo= document.getElementById('dots-two')
  const btnTwo = document.getElementById('btn-two')
  const moreTwo = document.getElementById('more-two')
  function myBlogOne (){
    if(dotsOne.style.display==='none'){
      dotsOne.style.display='inline';
      btnOne.innerHTML='Read more';
      moreOne.style.display='none';
    }else{
      dotsOne.style.display='none';
      btnOne.innerHTML='Read less';
      moreOne.style.display='inline';
    }
  }
  btnOne.addEventListener('click', myBlogOne)
  function myBlogTwo (){
    if(dotsTwo.style.display==='none'){
      dotsTwo.style.display='inline';
      btnTwo.innerHTML='Read more';
      moreTwo.style.display='none';
    }else{
      dotsTwo.style.display='none';
      btnTwo.innerHTML='Read less';
      moreTwo.style.display='inline';
    }
  }
  btnOne.addEventListener('click', myBlogOne)
  btnTwo.addEventListener('click', myBlogTwo)

  //   btnText.addEventListener('click', ()=>{
//     moreText.style.display="block"
//     btnText.textContent='read less'
//   })
  
 

