function main() {
   var colorClass = "";
  $(".select-color").on("click", function() {
   var inter;
   var selectedColor = $(this).attr("class");
  switch (selectedColor) {
  case 'select-color cyan not-selected':
    colorClass = "cyan";
    break;
  case 'select-color yellow not-selected':
    colorClass = "yellow";
    break;
  case 'select-color magenta not-selected':
    colorClass = "magenta";
    break;
	}
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });

  $(".box").on("click", function() {
      $(this).toggleClass(colorClass);
			if(colorClass == "cyan") {
        $(this).removeClass("yellow");
        $(this).removeClass("magenta");
      } else if(colorClass == "yellow") {
        $(this).removeClass("cyan");
        $(this).removeClass("magenta");
      } else if(colorClass == "magenta") {
        $(this).removeClass("cyan");
        $(this).removeClass("yellow");
      }
  });
	
	$('.toggle-blink').click(function() {
		if (colorClass) {
			$('.toggle-blink').toggleClass('opacity');
			var opacityColor = $('.toggle-blink').attr("class");
      if(opacityColor == "toggle-blink not-selected opacity") {
        console.log(opacityColor);
        inter = setInterval(function() {
					$('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
				}, 365);
      } else if (opacityColor == "toggle-blink not-selected") {
        // $('.box').removeClass("blink");
        clearInterval(inter);
      }
		}
	});
}

$(document).ready(main);