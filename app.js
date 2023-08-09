function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



know = {
  "hello":"<b>hi wassup</b>",
  "hey":"<b>hi wassup</b>",
  "bye":"<b>it was good talking to you.<br>Hope we meet soon</br></b>",
  "hi":"<b>hi how was your day?</b>",
  "what is your name?": "ZEUS",
  "what is your name": "ZEUS",
  "who are you?": "<b>I am  ZEUS.A chatbot created by ABHILASH PRUSTY.</b>",
  "what can you do?":"<b>i can do anything but now I'm currently in the process of learning and might not understand everything.</b>",
  "what can you do":"<b>i can do anything but now I'm currently in the process of learning and might not understand everything.</b>",
  "tell me something": "what do you want to know?",
  "make me laugh ":"<b>hehhehehehehehhehe</b>",
  "tell a joke":"<b>hehehehehehahahahahah</b>",
  "it was good":"<b>good to know <br>what can i do for you</br></b>",
  "good":"<b>good to know <br>what can i do for you</br></b>",
  "what do think about humans":"<b>Human have emotions. It is hard to understand. But I have dream to buy a bike.</b>"
};

function talk() {
  var user = document.getElementById("userBox").value;
  document.getElementById("userBox").value = "";
  document.getElementById("chatLog").innerHTML = user + "<br>";

  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "I'm sorry, I'm currently in the process of learning and might not understand everything.";
  }
}
var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() 
{
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("f").style.display = "block";
}



var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onpageshow = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.10em solid skyblue}";
  document.body.appendChild(css);
};
