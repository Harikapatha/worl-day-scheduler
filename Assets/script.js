var dateDisplayEl = $('#currentDay');
var saveBtn = $(".saveBtn");
var hours = [];
var numbers = [];


$(function () {
  displayDate();
  displaywork();
  workTime();
  //The purpose of this function is to save the user input into the localStorage 
  //and display confirm message on the screen
  function saveworkToStorage(event)  {
    //hide the previous 'section' class to prevent duplicated text
    $('section').hide();
    var container = $('<section>').css({
      "display":"flex",
      "justify-content": "center",
      "align-items": "center"
    });
    var saveConfirm = $('<p>').css("margin", "0");
    var localstorage = $('<span>').text("localStorage").addClass('localStorage-color');
    var checkmark = $('<i>').addClass("fa fa-check").css("margin-left", "5px");
    saveConfirm.text("Appointment Added to ");
    saveConfirm.append(localstorage);
    saveConfirm.append(checkmark);
    container.append(saveConfirm);
    $('.container-lg').prepend(container);
    var whatTime = $(event.target).closest('.time-block').attr('id');
    var usertext = $(event.target).closest('.time-block').find('.description').val();
    localStorage.setItem(whatTime, usertext);
  }


  //The purpose of the function is to display the stored values 
  function displaywork()  {
    var work9 = localStorage.getItem('hour-9');
    var detail9 = $('#hour-9 .description');
    detail9.val(work9);
    
    //repeat until hour-17
    var work10 = localStorage.getItem('hour-10');
    var detail10 = $('#hour-10 .description');
    detail10.val(work10);

    var work11 = localStorage.getItem('hour-11');
    var detail11 = $('#hour-11 .description');
    detail11.val(work11);

    var work12 = localStorage.getItem('hour-12');
    var detail12 = $('#hour-12 .description');
    detail12.val(work12);

    var work13 = localStorage.getItem('hour-13');
    var detail13 = $('#hour-13 .description');
    detail13.val(work13);

    var work14 = localStorage.getItem('hour-14');
    var detail14 = $('#hour-14 .description');
    detail14.val(work14);

    var work15 = localStorage.getItem('hour-15');
    var detail15 = $('#hour-15 .description');
    detail15.val(work15);

    var work16 = localStorage.getItem('hour-16');
    var detail16 = $('#hour-16 .description');
    detail16.val(work16);

    var work17 = localStorage.getItem('hour-17');
    var detail17 = $('#hour-17 .description');
    detail17.val(work17);
  }
  

    saveBtn.on("click", saveworkToStorage);

    //The purpose of this function is to compare the current hour and each of the time-block's 
    //assigned hour and add class of the past, present or futhre accordingly. 
    function workTime() {
      var workDate = dayjs().format("HH");
      workDate = parseInt(workDate,10);
      var number = document.querySelectorAll(".my-1");
      console.log(number)
      for (var i =0; i < number.length;i++) {
        var idSplit = ((number[i].id).split('-'));
        console.log("length "+ idSplit) 
        if (idSplit.length > 1) {
          idSplit.splice(0,1);
          hours.push(idSplit)
        }
      }
      
      for (i=0; i< hours.length; i++) {
        if(hours[i] < workDate)  {
          number[i].classList.add('past');
        }
        if(hours[i] == workDate)  {
          number[i].classList.add('present');
        }
        if(hours[i] > workDate) {
          number[i].classList.add('future');
        }
      }
    }

    function displayDate()  {
      var today = dayjs().format("dddd, MMMM D[th]");
      dateDisplayEl.text(today);
    }
    
  });
  
