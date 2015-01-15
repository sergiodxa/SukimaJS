var sukimajs = require('../index.js');

describe('SukimaJS', function () {
  var Schema, correct, wrong;

  beforeEach(function () {
    Schema = sukimajs.register({
      id: 'number',
      name: 'alpha',
      url: 'url',
      email: 'email'
    });
    correct = {
      id: 123,
      name: 'test',
      url: 'http://sergio.xalambri.com.ar/',
      email: 'sergio@xalambri.com.ar'
    };
    wrong = {
      id: 'test',
      name: 3.14,
      url: 'sergio@xalambri.com.ar',
      email: 'http://sergio.xalambri.com.ar/'
    };
  });

  it('should return a object with schema and validate properties', function () {
    expect(Schema).to.be.an('object')
      .and.to.have.property('schema').to.be.an('object');
    expect(Schema).to.be.an('object')
      .and.to.have.property('validate').to.be.an('function');
  });

  it('should validate and return true', function () {
    expect(Schema.validate(correct)).to.equal(true);
  });

  it('should validate and return an object with errors', function () {
    expect(Schema.validate(wrong)).to.be.an('array');
  });
});