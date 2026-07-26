export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Health check
    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({
          status: "online",
          service: "BitTradeHQ Auth Worker",
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // OAuth endpoint
    if (url.pathname === "/login") {
      const appId = "33VbNHVpYmxTsHQYWYy4j";

      const redirect =
        "https://oauth.deriv.com/oauth2/authorize?app_id=" +
        appId;

      return Response.redirect(redirect, 302);
    }

    return new Response("Not Found", {
      status: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
};
