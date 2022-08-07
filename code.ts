// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__uiFiles__.main, { width: 384, height: 680, title: "ChuckIt!" });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

figma.on('selectionchange', () => {
 
  if(figma.currentPage.selection.length != 0){
    console.log("Length",figma.currentPage.selection[0].name)
    if(figma.currentPage.selection[0].name==="Moodboard"){
      figma.showUI(__uiFiles__.artboard, { width: 384, height: 680, title: "ChuckIt - Choose Your Artboard" });
    }
  
    // check the selection name

    console.log(figma.currentPage.selection[0].name.indexOf("Artboard A"))
  
    if(figma.currentPage.selection[0].name.indexOf("Artboard A") > -1){
      figma.showUI(__uiFiles__.analysize, { width: 384, height: 680, title: "ChuckIt - Analyzing" });
    }
  
    if(figma.currentPage.selection[0].name.indexOf("Artboard B") > -1){
      figma.showUI(__uiFiles__.analysizeb, { width: 384, height: 680, title: "ChuckIt - Analyzing" });
    }
   
  }

  
});

figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-rectangles') {

    figma.showUI(__uiFiles__.moodboard, { width: 384, height: 680, title: "ChuckIt - Choose Your Moodboard!" });
    // const nodes: SceneNode[] = [];
    // for (let i = 0; i < msg.count; i++) {
    //   const rect = figma.createRectangle();
    //   rect.x = i * 150;
    //   rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
    //   figma.currentPage.appendChild(rect);
    //   nodes.push(rect);
    // }
    // figma.currentPage.selection = nodes;
    // figma.viewport.scrollAndZoomIntoView(nodes);
  }

  if (msg.type === 'skip-to-analyze') {
    figma.showUI(__uiFiles__.analysize, { width: 384, height: 680, title: "ChuckIt - Analyzing" });
  }

  if (msg.type === 'result') {
    figma.showUI(__uiFiles__.result, { width: 384, height: 680, title: "ChuckIt - Result" });
  }
  if (msg.type === 'resultb') {
    figma.showUI(__uiFiles__.resultb, { width: 384, height: 680, title: "ChuckIt - Result" });
  }


  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  //figma.closePlugin();
};
