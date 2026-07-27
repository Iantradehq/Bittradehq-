export default {
  async fetch(request) {
    const url = new URL(request.url);

    return new Response(
      JSON.stringify({
        success: true,
        project: "BitTradeHQ",
        message: "Worker is running",
        path: url.pathname
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};
