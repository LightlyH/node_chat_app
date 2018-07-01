var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Elaine';
    var text = 'Good morning';
    var message = generateMessage(from, text);

    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Elaine'; // should not be comma!
    var latitude = 123.12;
    var longitude = -122.12;
    var locationMessage = generateLocationMessage(from, latitude, longitude);
    // var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var url = 'https://www.google.com/maps?q=123.12,-122.12';

    expect(locationMessage).toInclude({from, url});
    expect(locationMessage.createdAt).toBeA('number');

  });
});
