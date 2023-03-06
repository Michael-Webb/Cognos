define(function () {
  "use strict";

  function AdvancedControl() {}
  AdvancedControl.prototype.initialize = function (
    oControlHost,
    fnDoneInitializing
  ) {
    function enterSubmit(e) {
      if (e.keyCode === 13) {
        try {
          oControlHost.finish();
        } catch {}
      }
    }
    function setTab() {
      const textItems = document.querySelectorAll("[specname=textItem]");
      for (const item of textItems) {
        item.tabIndex = -1;
      }
    }
    setTab();
    let exec_submit = document.addEventListener("keydown", enterSubmit, false);
    try {
      exec_submit;
    } catch {}

    fnDoneInitializing();
  };
  AdvancedControl.prototype.destroy = function( oControlHost )
  {
    document.removeEventListener("keydown", this.enterSubmit);
  };
  AdvancedControl.prototype.draw = function (oControlHost) {
    const finishBtn = oControlHost.configuration.Finish_Button,
      cancelBtn = oControlHost.configuration.Cancel_Button;
    //console.log(finishBtn,cancelBtn)
    
      if (finishBtn === true && cancelBtn === true) {
      oControlHost.container.innerHTML =
        "<style>" +
        ".MyPromptButton" +
        "{" +
        "background-color: white;" +
        "border: 2px solid #4178BE;" +
        "color: #4178be;" +
        "font-size: 14px;" +
        "height: 32px;" +
        "width: 120px;" +
        "margin-left: 20px;" +
        "cursor: pointer;" +
        "} " +
        ".MyPromptButton:hover" +
        "{" +
        "background-color: #4178BE;" +
        "color: white;" +
        "}" +
        "</style>" +
        '<button class="MyPromptButton btn1">Submit</button>'+
        '<button class="MyPromptButton btn2">Cancel</button>';
      oControlHost.container.querySelector(".btn1").onclick =
        oControlHost.finish.bind(oControlHost);
        oControlHost.container.querySelector(".btn2").onclick =
        oControlHost.cancel.bind(oControlHost);
    } else if (finishBtn === true && cancelBtn === false) {
        oControlHost.container.innerHTML =
        "<style>" +
        ".MyPromptButton" +
        "{" +
        "background-color: white;" +
        "border: 2px solid #4178BE;" +
        "color: #4178be;" +
        "font-size: 14px;" +
        "height: 32px;" +
        "width: 120px;" +
        "margin-left: 20px;" +
        "cursor: pointer;" +
        "} " +
        ".MyPromptButton:hover" +
        "{" +
        "background-color: #4178BE;" +
        "color: white;" +
        "}" +
        "</style>" +
        '<button class="MyPromptButton btn1">Submit</button>';
    } else if (finishBtn === false && cancelBtn === true){
        oControlHost.container.innerHTML =
        "<style>" +
        ".MyPromptButton" +
        "{" +
        "background-color: white;" +
        "border: 2px solid #4178BE;" +
        "color: #4178be;" +
        "font-size: 14px;" +
        "height: 32px;" +
        "width: 120px;" +
        "margin-left: 20px;" +
        "cursor: pointer;" +
        "} " +
        ".MyPromptButton:hover" +
        "{" +
        "background-color: #4178BE;" +
        "color: white;" +
        "}" +
        "</style>" +
        '<button class="MyPromptButton btn2">Cancel</button>';
    } else {
      return;
  };
}
  return AdvancedControl;
});
