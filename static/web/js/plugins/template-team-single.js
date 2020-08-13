$(document).ready(function() {
    "use strict";
    

    var executed = false;
           $('#owl-skill').waypoint(function() {
            if (!executed) {
              executed = true;
                 $('.progress .progress-bar').progressbar({
                    update: function(current_percentage, $this) {
                        
                        $this.parent().parent().find(".update-v").html(current_percentage  + '%');
                        $this.parent().parent().find(".update-v").css("bottom", current_percentage + '%'); 
                    }
                  });
              }
          },{offset: 'bottom-in-view' })

});
