$(document).ready(function(){

  document.getElementById("nav").style.textAlign = "center";

$('#nav > ul > li').css('height','50px');
$('#nav > ul > li').css('width', '200px');
$('#nav > ul > li').css('background-color', 'wheat');

$('#home').hover
(function(){
  $(this).css({ opacity:0.25});
},
function(){
  $(this).css({opacity:1});
}
);

$('#about').hover
(function(){
  $(this).css({ opacity:0.25});
},
function(){
  $(this).css({opacity:1});
}
);

$('#portfolio').hover
(function(){
  $(this).css({ opacity:0.25});
},
function(){
  $(this).css({opacity:1});
}
);

$('#resume').hover
(function(){
  $(this).css({ opacity:0.25});
},
function(){
  $(this).css({opacity:1});
}
);

/*$('#home').click
(function(){
  $('#home').css('background-color','lightsalmon').replaceWith('<li>Clicked</li>');
});

$('#about').click
(function(){
  $('#about').css('background-color','oldlace').replaceWith('<li>Clicked</li>');
});*/
$('#nav > ul > li').click(function(){
           if(clicked){
                $(this).css('background-color', 'oldlace');
              var  clicked  = false;
            } else {
                $(this).css('background-color', 'lightsalmon').text('Clicked');
            var  clicked  = true;
            }
        });

});
