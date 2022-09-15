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
  currentDate.textContent=date.toLocaleString('en-GB');

  const dotsOne= document.getElementById('dots-one')
  const btnOne = document.getElementById('btn-one')
  const moreOne = document.getElementById('more-one')
  const dotsTwo= document.getElementById('dots-two')
  const btnTwo = document.getElementById('btn-two')
  const moreTwo = document.getElementById('more-two')
  const dotsThree= document.getElementById('dots-three')
  const btnThree = document.getElementById('btn-three')
  const moreThree = document.getElementById('more-three')
  const dotsFour= document.getElementById('dots-four')
  const btnFour = document.getElementById('btn-four')
  const moreFour = document.getElementById('more-four')
  const dotsFive= document.getElementById('dots-five')
  const btnFive = document.getElementById('btn-five')
  const moreFive = document.getElementById('more-five')
  const dotsSix= document.getElementById('dots-six')
  const btnSix = document.getElementById('btn-six')
  const moreSix = document.getElementById('more-six')
  const dotsSeven= document.getElementById('dots-seven')
  const btnSeven = document.getElementById('btn-seven')
  const moreSeven = document.getElementById('more-seven')

  // function myReadMoreAndLess(){
  //   if(dotsOne.style.display==='none'){
  //     dotsOne.style.display='inline';
  //     btnOne.innerHTML='Read more';
  //     moreOne.style.display='none';
  //   }else{
  //     dotsOne.style.display='none';
  //     btnOne.innerHTML='Read less';
  //     moreOne.style.display='inline';
  //   }
  // }
  function myBlogSeven (){
    if(dotsSeven.style.display==='none'){
      dotsSeven.style.display='inline';
      btnSeven.innerHTML='Read more';
      moreSeven.style.display='none';
    }else{
      dotsSeven.style.display='none';
      btnSeven.innerHTML='Read less';
      moreSeven.style.display='inline';
    }
  }
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
  function myBlogThree (){
    if(dotsThree.style.display==='none'){
      dotsThree.style.display='inline';
      btnThree.innerHTML='Read more';
      moreThree.style.display='none';
    }else{
      dotsThree.style.display='none';
      btnThree.innerHTML='Read less';
      moreThree.style.display='inline';
    }
  }
  function myBlogFour (){
    if(dotsFour.style.display==='none'){
      dotsFour.style.display='inline';
      btnFour.innerHTML='Read more';
      moreFour.style.display='none';
    }else{
      dotsFour.style.display='none';
      btnFour.innerHTML='Read less';
      moreFour.style.display='inline';
    }
  }
  function myBlogFive (){
    if(dotsFive.style.display==='none'){
      dotsFive.style.display='inline';
      btnFive.innerHTML='Read more';
      moreFive.style.display='none';
    }else{
      dotsFive.style.display='none';
      btnFive.innerHTML='Read less';
      moreFive.style.display='inline';
    }
  }
  function myBlogSix (){
    if(dotsSix.style.display==='none'){
      dotsSix.style.display='inline';
      btnSix.innerHTML='Read more';
      moreSix.style.display='none';
    }else{
      dotsSix.style.display='none';
      btnSix.innerHTML='Read less';
      moreSix.style.display='inline';
    }
  }
  btnOne.addEventListener('click', myBlogOne)
  btnTwo.addEventListener('click', myBlogTwo)
  btnThree.addEventListener('click', myBlogThree)
  btnFour.addEventListener('click', myBlogFour)
  btnFive.addEventListener('click', myBlogFive)
  btnSix.addEventListener('click', myBlogSix)
  btnSeven.addEventListener('click', myBlogSeven)

  //   btnText.addEventListener('click', ()=>{
//     moreText.style.display="block"
//     btnText.textContent='read less'
//   })
  
 

