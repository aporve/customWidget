function openWidget() {
    // jQuery("#v-chat-icon").addClass("open");
    // parent.document.getElementById("v-chat-box").classList.add("max-widget");
    parent.document.getElementById("v-frame").classList.add("v-frame-max");
    parent.document.getElementById("v_widget_container").classList.add("v-widget-max");
}

function closeWidget() {
    // jQuery("#v-chat-icon").removeClass("open");
    // parent.document.getElementById("v-chat-box").classList.remove("max-widget");
    parent.document.getElementById("v-frame").classList.remove("v-frame-max");
    parent.document.getElementById("v_widget_container").classList.remove("v-widget-max");
}



$(document).ready(function() {
    var show_widget = false;
    $('[data-toggle="dc-frame-show"], [data-toggle="dc-frame-hide"]').on("click", function() {
        show_widget = !show_widget;
        if(show_widget)
        {
            openWidget();
        }
        else{
            closeWidget();
        }				
    });

});


