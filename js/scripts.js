$(document).ready(function () {
  var counter=1;
  // var newToDo;
  var toDos = [];
  var activeH2;
  $("#new-to-do-list").click(function (){
    if($("input#new-list").val().length > 0){
    var inputToDo = $("input#new-list").val().toUpperCase();
    var inputName = counter + "." + inputToDo;
    var newToDo = {toDoListName: inputToDo, tasks: [], numcounter: counter, active: false, numTasks: 0};
    counter++; // This counter increments and appends to the front of the inputName to ensure unique class names in Div
    toDos.push(newToDo);

    $("ul#to-do").append("<li><span class='list-items " + counter + "." + inputToDo + "'>" + newToDo.toDoListName + "</span></li>");
    $("#to-do-list").find("input").val("");

    $(".list-items").last().click(function (){
      $(".checkbox").hide();
      $('#second-column h2').text(newToDo.toDoListName);
      activeH2=newToDo.toDoListName;

      toDos.forEach(function(x){
        // alert(x.toDoListName);
      if (x.toDoListName === activeH2) {

        x.tasks.forEach(function(y) {
          $("#task-list").append("<div id=" + y.taskToDo + " class='checkbox'><input type='checkbox' value=''>"
          + y.taskToDo + "</div");
          });
        } else {
        }
        });

      // $(".checkbox input").last().click(function (){
      // toDos.forEach(function(xy) {
      //   xy.tasks.forEach(function(z) {
      //     if(!z.completed){
      //   $(".checkbox").css("text-decoration", "line-through");
      //   z.completed = true;
      // }else{
      //   $(".checkbox").css("text-decoration", "none");
      //   z.completed = false;
      // }
      //   });
      // });
    });
    } else{
      alert("Pay attention Dip Shit!");
    }
  });



  $("#task").submit(function(event) {
  event.preventDefault();

    if($("input#new-task").val().length > 0) {
    var inputTask = $("input#new-task").val();
    var newTask = {taskToDo: inputTask, completed: false};
    console.log(toDos);

    toDos.forEach(function(active) {
      if (active.toDoListName === activeH2) {
        active.tasks.push(newTask);
      }else{
      }
    });

    $("#second-column").show();

    $("#task-list").append("<div id=" + newTask.taskToDo + " class='checkbox'><input type='checkbox' value=''>"
          + newTask.taskToDo + "</div");

    $("#task").find("input").val(""); // this line clears the input boxes

    $(".checkbox input").last().click(function (){
      if(!newTask.completed){
        $(this).parent().css("text-decoration", "line-through");
        newTask.completed = true;
      }else{
        $(this).parent().css("text-decoration", "none");
        newTask.completed = false;
      }
    });
  }else{
    alert("Pay Attention Dip Shit!");
  }
});

});
