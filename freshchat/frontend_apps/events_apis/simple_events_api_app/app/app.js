$(document).ready( function() {
  app.initialized()
  .then(function(_client) {
    var client = _client;

    var eventCallback = function (event) {
      client.interface.trigger("showNotify", {
        type: "success",
        message:  "Your message has been sent"
      });
    };

    client.events.on("conversation.onSendClick", eventCallback);
  });
});
