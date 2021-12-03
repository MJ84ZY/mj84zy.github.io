var testing = "tesing";

function alertDeveloping() {
  alert("Still Developing");
}

function getPDF(){

  var HTML_Width = $("#nescss").width();
  var HTML_Height = $("#nescss").height();
  var top_left_margin = 15;
  var PDF_Width = HTML_Width+(top_left_margin*2);
  var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;
  
  var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
  

  html2canvas($("#nescss")[0],{allowTaint:true}).then(function(canvas) {
    canvas.getContext('2d');
    
    console.log(canvas.height+"  "+canvas.width);
    
    
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
    
    
    for (var i = 1; i <= totalPDFPages; i++) { 
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
    }
    
      pdf.save("Testing.pdf");
      });
};

//test
setInterval(function () {
  secondPlay()
}, 1000);


setInterval(function () {
  minutePlay()
}, 10000);


function secondPlay() {
$("body").removeClass("play");
var aa = $("ul.secondPlay li.active");

if (aa.html() == undefined) {
  aa = $("ul.secondPlay li").eq(0);
  aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");

}
else if (aa.is(":last-child")) {
  $("ul.secondPlay li").removeClass("before");
  aa.addClass("before").removeClass("active");
  aa = $("ul.secondPlay li").eq(0);
  aa.addClass("active")
      .closest("body")
      .addClass("play");
}
else {
  $("ul.secondPlay li").removeClass("before");
  aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
}

}

function minutePlay() {
$("body").removeClass("play");
var aa = $("ul.minutePlay li.active");

if (aa.html() == undefined) {
  aa = $("ul.minutePlay li").eq(0);
  aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");

}
else if (aa.is(":last-child")) {
  $("ul.minutePlay li").removeClass("before");
  aa.addClass("before").removeClass("active");
  aa = $("ul.minutePlay li").eq(0);
  aa.addClass("active")
      .closest("body")
      .addClass("play");
}
else {
  $("ul.minutePlay li").removeClass("before");
  aa.addClass("before")
      .removeClass("active")
      .next("li")
      .addClass("active")
      .closest("body")
      .addClass("play");
}

}
