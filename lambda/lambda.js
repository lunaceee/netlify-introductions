// show object spread works, i.e. babel works
export function handler(event, context, callback) {
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!", ...obj })
  });
}
