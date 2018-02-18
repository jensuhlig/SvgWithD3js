$(document).ready(function() {
    console.debug("jQuery ready!");
    const distance = svgTest(55);

    $(".button").click(function(){
      distance.update(23);
    });
  });