async function insertToDb(event: any) {
  console.log({ event });
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda! changed!"),
  };
  return response;
}

exports.handler = insertToDb;
