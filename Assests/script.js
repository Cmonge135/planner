

//Time display 
function update() {  
  $('#currentDay').html(moment().format('ddd. MMMM DD, YYYY  hh:mm:ss a'));    //H:mm:ss  Makes it 0:09:10  vs  12:09:10 am 
}
setInterval(update, 1000);

var saveBtn = document.getElementById("btn");
var userTextInput = document.querySelector("#inputField");


//colors for past present and future
  $(".time-block").each(function() {
    var hour = parseInt($(this).data().number);
    var currentTime = parseInt(moment().format("HH"))
      if(currentTime > hour){
        $(this).addClass("past")
      } else if (currentTime < hour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
  });



//save btn local.Storage
saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Your event has been saved");
    var inputField = document.getElementById("inputField").value;
    console.log(inputField);
  
    if (inputField === "") {
      console.log("error");
    } else {
      localStorage.setItem("inputField", inputField);
    }
  });


  
  //keep textarea saved after page refresh
  function renderMessege() { 
    var userInput = localStorage.getItem("inputField")
    userTextInput.textContent = userInput;
  }
  renderMessege();
