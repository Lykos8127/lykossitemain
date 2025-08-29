// app/api/medusa/[...path]/route.ts
const MEDUSA = process.env.NEXT_PUBLIC_MEDUSA_URL!;
const PUB = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!;

async function forward(req: Request, path: string) {
  const url = `${MEDUSA}/${path}`;
  const method = req.method;
  const body = ["GET", "HEAD"].includes(method) ? undefined : await req.text();

  const res = await fetch(url, {
    method,
    headers: {
      "content-type": req.headers.get("content-type") ?? "application/json",
      "x-publishable-api-key": PUB, // required by Medusa /store/*
    },
    body,
    cache: "no-store",
  });

  // pass Medusa's response back to the browser
  return new Response(await res.text(), {
    status: res.status,
    headers: { "content-type": res.headers.get("content-type") ?? "application/json" },
  });
}

export async function GET(req: Request, { params }: { params: { path: string[] } }) {
  return forward(req, params.path.join("/"));
}
export async function POST(req: Request, { params }: { params: { path: string[] } }) {
  return forward(req, params.path.join("/"));
}
export async function PUT(req: Request, { params }: { params: { path: string[] } }) {
  return forward(req, params.path.join("/"));
}
export async function PATCH(req: Request, { params }: { params: { path: string[] } }) {
  return forward(req, params.path.join("/"));
}
export async function DELETE(req: Request, { params }: { params: { path: string[] } }) {
  return forward(req, params.path.join("/"));
}
// satisfy preflight quickly
export async function OPTIONS() {
  return new Response(null, { status: 204 });
}
