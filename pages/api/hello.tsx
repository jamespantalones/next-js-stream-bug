export const config = {
  runtime: "experimental-edge",
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

export default async function handler(req: NextRequest, res: NextResponse) {
  let count = 0;

  const resultStream = new ReadableStream(
    {
      pull(controller) {
        if (count < 10) {
          controller.enqueue(JSON.stringify({ foo: "bar" }) + "\n");
          count++;
        } else {
          controller.close();
        }
      },
    },
    {
      highWaterMark: 1,
      size(chunk) {
        return 1;
      },
    }
  );

  return new Response(resultStream, {
    status: 200,
    headers: {
      "content-type": "text/plain",
      "Cache-Control": "no-cache",
    },
  });
}
