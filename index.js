function validateSchema (data) {
  try {
    // require validator.js
    var validator = require('validator');
    // reference this as self
    var self = this;

    // call a validator method depending on type
    function isValid (type, value) {
      switch (type) {
        case 'email':
          return validator.isEmail(value);
          break;
        case 'url':
          return validator.isURL(value);
          break;
        case 'domain':
          return validator.isFQDN(value);
          break;
        case 'ip':
          return validator.isIP(value);
          break;
        case 'alpha':
          return validator.isAlpha(value);
          break;
        case 'number':
          return validator.isNumeric(value);
          break;
        case 'alphanumeric':
          return validator.isAlphanumeric(value);
          break;
        case 'base64':
          return validator.isBase64(value);
          break;
        case 'hexadecimal':
          return validator.isHexadecimal(value);
          break;
        case 'hexcolor':
          return validator.isHexColor(value);
          break;
        case 'int':
          return validator.isInt(value);
          break;
        case 'float':
          return validator.isFloat(value);
          break;
        case 'null':
          return validator.isNull(value);
          break;
        case 'uuid':
          return validator.isUUID(value);
          break;
        case 'date':
          return validator.isDate(value);
          break;
        case 'creditcard':
          return validator.isCreditCard(value);
          break;
        case 'isbn':
          return validator.isISBN(value);
          break;
        case 'mobilephone':
          return validator.isMobilePhone(value);
          break;
        case 'json':
          return validator.isJSON(value);
          break;
        case 'ascii':
          return validator.isAscii(value);
          break;
        case 'mongoid':
          return validator.isMongoId(value);
          break;
        default:
          return false;
          break;
      }
    }

    // array of errors, by default is empty
    var errors = [];

    // walk for data and validate each property
    Object.keys(data).forEach(function (property) {
      // if the property doesn't exist in the schema
      if (!self.schema[property]) {
        var error = new Error(property + ' is invalid.');
        errors.push(error);
      }

      // if the property is invalid
      if (!isValid(self.schema[property], data[property])) {
        var error = new Error(property + ' must be ' + self.schema[property] + '.');
        errors.push(error);
      }
    });

    // return errors array or true if there are no errors
    return (errors.length) ? errors : true;
  } catch (err) {
    return err;
  }
}

var sukimajs = {
  register: function registerSchema (schema) {
    try {
      // return an object with the schema and a validate method
      return {
        schema: schema,
        validate: validateSchema
      }
    } catch (err) {
      return err;
    }
  }
}

module.exports = sukimajs;