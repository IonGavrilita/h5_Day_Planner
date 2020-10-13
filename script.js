var time = moment();

function setClock(){
 //Display current date and time    
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


//Check and display if there is saved value in local storage and display.
$(".timeBlock").each(function(){
   var id = $(this).attr("id");
   var content = localStorage.getItem(id);
   if (content !== null){
      $(this).children(".content").val(content)
   }
});
};
setClock();

//Add event listener on click save button save value in local storage
$(".btn").on("click", function(){
   var timeEl=$(this).parent().attr("id")
   var contentEl= $(this).siblings(".content").val();
   localStorage.setItem(timeEl, contentEl);
});
//color the input with actual time color(past, present, future)
function colorBlock(){
   hour = time.hours();
   $(".content").each(function(){
      var currentHour = parseInt($(this).attr("id"));
      // console.log(currentHour);
      if (currentHour > hour){
         $(this).addClass("future")
      }
      else if (currentHour === hour) {
         $(this).addClass("present")
      }
      else {
         $(this).addClass("past");
      }
   })
}
colorBlock();

