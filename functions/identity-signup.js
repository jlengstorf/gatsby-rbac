// docs: https://docs.netlify.com/functions/functions-and-identity/

exports.handler = async () => {
  // for a more practical example of using this event handler, see:
  // https://github.com/stripe-samples/netlify-stripe-subscriptions/blob/main/functions/identity-signup.js
  return {
    statusCode: 200,
    body: JSON.stringify({
      app_metadata: {
        roles: ["user"],
      },
    }),
  }
}
