$(document).ready( function() {
    // Initialize channel
    app.initialized().then(function(_client) {
      var client = _client;
      // App activate callback
      client.events.on('app.activated', function() {
        // client.interface.trigger("showNotify", {type: "alert", message: "Successfully show emojipicker"});
        // Disable Ticket Pri ority
        client.interface.trigger("hide", {id: "emojiPicker"});
        // client.interface.trigger("show", {id: "emojiPicker"});
        client.interface.trigger("hide", {id: "addImage",value:true});
        client.interface.trigger("hide", {id: "coBrowse",value:true});
        // client.interface.trigger("hide", {id: "addAttachment"});
        client.interface.trigger("disable", {id: "resolveConversation",value:true});
        client.interface.trigger("disable", {id: "assignGroup",value:true});
        client.interface.trigger("disable", {id: "assignAgent",value:true});
        client.interface.trigger("hide", {id: "addAttachment"});
        client.interface.trigger("showNotify", {type: "alert", message: "Successfully hiding and disabling options"});
      });
    });
});
