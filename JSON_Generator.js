function generateRandomObjects(schema, count) {
  const result = [];

  for (let i = 0; i < count; i++) {
    const newObj = {};

    for (let prop in schema.properties) {
      const type = schema.properties[prop].type;

      switch (type) {
        case 'string':
          newObj[prop] = generateRandomString();
          break;
        case 'number':
          newObj[prop] = generateRandomNumber();
          break;
        case 'boolean':
          newObj[prop] = generateRandomBoolean();
          break;
        case 'object':
          newObj[prop] = generateRandomObject(schema.properties[prop]);
          break;
        default:
          throw new Error(`Unsupported type: ${type}`);
      }
    }

    result.push(newObj);
  }

  return result;
}

function generateRandomString() {
  return Math.random().toString(36).substr(2, 10);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function generateRandomBoolean() {
  return Math.random() >= 0.5;
}

function generateRandomObject(schema) {
  const newObj = {};

  for (let prop in schema.properties) {
    const type = schema.properties[prop].type;

    switch (type) {
      case 'string':
        newObj[prop] = generateRandomString();
        break;
      case 'number':
        newObj[prop] = generateRandomNumber();
        break;
      case 'boolean':
        newObj[prop] = generateRandomBoolean();
        break;
      case 'object':
        newObj[prop] = generateRandomObject(schema.properties[prop]);
        break;
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
  }

  return newObj;
}




console.log(generateRandomObjects({properties:{name:{type:'object',properties:{surname:{type:"string"}}}}},10))