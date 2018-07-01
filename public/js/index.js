var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'jess@example.com',
  //   text: 'Hey, this is Jessica.'
  // });
  socket.emit('createMessage', {
    from: 'Jess',
    text: 'Hey, this is Jessica.'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New message', message);
});
