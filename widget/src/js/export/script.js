var makeIframe = document.createElement("iframe");
// makeIframe.setAttribute("src", "./widget/public/index.html"); //local
makeIframe.setAttribute("src", "customWidget/widget/public/index.html");
makeIframe.setAttribute("scrolling", "no");
makeIframe.style.border = "none";
makeIframe.style.width = "100%";
makeIframe.style.borderRadius = "20px";
// makeIframe.style.display = "none"



var makeIframe2 = document.createElement("iframe");
// makeIframe2.setAttribute("src", "./widget/public/widget-fame.html"); //local
makeIframe2.setAttribute("src", "./widget/test.html");
makeIframe2.setAttribute("id", "ymbtn");
makeIframe2.setAttribute("scrolling", "no");
makeIframe2.style.border = "none";

var vChatFrame = document.createElement("div");
vChatFrame.setAttribute("class", "v-frame");
vChatFrame.setAttribute("id", "v-frame");
vChatFrame.appendChild(makeIframe);

var ymbtn = document.createElement("div");
ymbtn.setAttribute("class", "ym-chat-btn here-note-show");
ymbtn.setAttribute("id", "ym-chat-btn");
ymbtn.appendChild(makeIframe2);


var vChatBox = document.createElement("div");
vChatBox.setAttribute("class", "v-chat-box");
vChatBox.setAttribute("id", "v-chat-box");
vChatBox.appendChild(vChatFrame);
vChatBox.appendChild(ymbtn);
 

var vWrap = document.createElement("div");
vWrap.setAttribute("class", "v_widget_right v_widget_bottom v_widget_container");
vWrap.setAttribute("id", "v_widget_container");
vWrap.appendChild(vChatBox);



var style = document.createElement('style');
style.innerHTML = `
    .v_widget_container {position: fixed; z-index: 99999; overflow: hidden; width: auto; padding: 10px; display: flex; flex-direction: column; justify-content: flex-end; -webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out; }
    .v_widget_container.v-widget-max{width: 100%; max-width: 400px; max-height: 600px; height: 100%;}
    .v_widget_container.v-widget-max.v-expand-max{max-width: 430px; max-height: 700px;}
    .v_widget_container.v_widget_right{right: 10px;}   // To make widget right
    // .v_widget_container.v_widget_left{left: 10px;}
    .v_widget_container.v_widget_bottom{bottom: 10px;}
    // .v_widget_container.v_widget_top{top: 10px;}

    .ym-chat-btn {position: relative; width: 200px; height: 65px;cursor: pointer;margin-left: auto;}
    .ym-chat-btn iframe{width: 100%; height: 100%;}
    .ym-chat-btn .here-note-show{ width: 270px; height: 90px;}

    .v-chat-box{height: 100%;width: 100%;display: flex;flex-direction: column;justify-content: flex-end;align-items: center;}
    // .v_widget_container.v_widget_left .v-chat-box{align-items: flex-start;}
    .v-frame iframe{height: 100%; width: 0; display: block; border-radius: 20px;}

    .v-frame {width: 0; height: 0; -webkit-transition: height 0.3s ease;-moz-transition: height 0.3s ease;-o-transition: height 0.3s ease;transition: height 0.3s ease; -webkit-box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.09); -moz-box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.09); box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.09);}
    
    .v-frame.v-frame-max{width: 100%; height: 85%; margin-top: 10%; margin-bottom: 5%;  border-radius: 20px;}
    .v-chat-box .v-frame.v-frame-max iframe{height: 100%; width: 100%;}
    .v_widget_container.dc_widget_left .dc-chat-btn{margin-left: 0;}
    .v_widget_container.dc_widget_top .v-chat-box{flex-direction: column-reverse;}
    .v_widget_container.dc_widget_top .v-frame.v-frame-max{margin-top: 5%; margin-bottom: 10%;}
`;

document.head.appendChild(style);
document.body.appendChild(vWrap);