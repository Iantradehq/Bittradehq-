export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      switch (url.pathname) {

        case "/":
          return json({
            success: true,
            project: "BitTradeHQ",
            version: "1.0.0",
            status: "Running"
          });

        case "/login":
          return await login(request, env);

        case "/callback":
          return await callback(request, env);

        case "/api/me":
          return await me(request, env);

        default:
          return json({
            success: false,
            error: "Route not found"
          }, 404);

      }

    } catch (error) {

      return json({
        success: false,
        message: error.message
      }, 500);

    }

  }
};



/* -------------------------------- */

function json(data, status = 200) {

  return new Response(

    JSON.stringify(data, null, 2),

    {
      status,

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*"
      }

    }

  );

}



/* -------------------------------- */

const CONFIG = {

  CLIENT_ID: "33VbNHVpYmxTsHQYWYy4j",

  REDIRECT_URI:
    "https://bittradehq-auth-v2.ianmunene391.workers.dev/callback",

  AUTH_URL:
    "https://auth.deriv.com/oauth2/auth",

  TOKEN_URL:
    "https://auth.deriv.com/oauth2/token"

};



/* -------------------------------- */

async function login(request, env) {

  const state = crypto.randomUUID();

  const authUrl = new URL(CONFIG.AUTH_URL);

  authUrl.searchParams.set(
    "client_id",
    CONFIG.CLIENT_ID
  );

  authUrl.searchParams.set(
    "redirect_uri",
    CONFIG.REDIRECT_URI
  );

  authUrl.searchParams.set(
    "response_type",
    "code"
  );

  authUrl.searchParams.set(
    "scope",
    "read"
  );

  authUrl.searchParams.set(
    "state",
    state
  );

  return Response.redirect(
    authUrl.toString(),
    302
  );

}



/* -------------------------------- */

async function callback(request, env) {

  return json({

    message:
      "Callback function will be completed in Part 3."

  });

}



/* -------------------------------- */

async function me(request, env) {

  return json({

    message:
      "Account endpoint will be completed in Part 3."

  });

}
