// Drag and drop for pizza base
$(".base-option").draggable({
    helper: "clone"
  });
  
  $(".empty-circle").droppable({
    drop: function(event, ui) {
      var base = ui.draggable.text();
      $(this).append("<div class='base'>" + base + "</div>");
    }
  });
  
  // Drag and drop for pizza ingredients
  $(".ingredient-option").draggable({
    helper: "clone"
  });
  
  $(".
