var client;
$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          client = _client;
          client.instance.resize({ height: "1500px" });
            // client.interface.trigger('showModal', {title: 'Translate buddy', template: 'template.html'})

          client.events.on('app.activated',
            function() {
              client.interface.trigger('showModal', {title: 'Translate buddy', template: 'modal.html'});
                // console.log('hello');
              //   document.getElementById("addTextToEditor").addEventListener("click", () => {
              //     client.interface.trigger("setValue", {id: "editor", value: document.getElementById("final_span").innerText});
              // });
              });
          });
    });

function addText() {
    client.interface.trigger("setValue", {id: "editor", value: document.getElementById("final_span").innerText});
}
