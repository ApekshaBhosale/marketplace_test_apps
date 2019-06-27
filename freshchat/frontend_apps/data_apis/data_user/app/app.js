$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          client.instance.resize({ height: "1500px" });
          client.events.on('app.activated',
            function() {
                client.data.get('user')
                    .then(function(data) {
                        // console.log(JSON.stringify(data.user));
                        $('#apptext_user').text(data.user.first_name);

                    })
                    .catch(function(e) {
                        console.log('Exception - ', e);
                    });

                    client.data.get('loggedInAgent')
                        .then(function(data) {
                            // console.log(JSON.stringify(data.user));
                            $('#apptext_agent').text(data.loggedInAgent.first_name);

                        })
                        .catch(function(e) {
                            console.log('Exception - ', e);
                        });

                    client.data.get('conversation')
                        .then(function(data) {
                            // console.log(JSON.stringify(data.user));
                            $('#apptext_conv').text(data.conversation.conversation_id);

                        })
                        .catch(function(e) {
                            console.log('Exception - ', e);
                        });
        });
    });
});
