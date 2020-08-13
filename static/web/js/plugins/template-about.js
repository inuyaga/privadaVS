$( document ).ready(function() {"use strict";
    // <!-- Intializing Navigation Effect-->
   var executed = false;
           $('#ourskill1').waypoint(function() {
            if (!executed) {
              executed = true;
                 $('.progress .progress-bar').progressbar({
                    update: function(current_percentage, $this) {
                        $this.parent().parent().find(".update-h").html(current_percentage  + '%');
                    }
                  });
              }
          },{offset: 'bottom-in-view' })

});

