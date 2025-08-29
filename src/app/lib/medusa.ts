// src/lib/medusa.ts


export const MEDUSA_URL = process.env.NEXT_PUBLIC_MEDUSA_URL!;
const PUB_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY!;


function join(base: string, path: string) {
  return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

export async function api(path: string, init?: RequestInit) {
  // call our local proxy (no CORS)
  const url = `/api/medusa/${path.replace(/^\/+/, "")}`;

  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`${res.status} ${res.statusText}: ${body}`);
  }
  return res.json();
}

export const store = {
  createCart: () => api("/store/carts", { method: "POST" }),
  addItem: (cartId: string, variantId: string, quantity: number) =>
    api(`/store/carts/${cartId}/line-items`, {
      method: "POST",
      body: JSON.stringify({ variant_id: variantId, quantity }),
    }),
  setAddress: (cartId: string, addr: any) =>
    api(`/store/carts/${cartId}`, {
      method: "POST",
      body: JSON.stringify({ shipping_address: addr, billing_address: addr }),
    }),
  listShippingOptions: (cartId: string) => api(`/store/shipping-options?cart_id=${cartId}`),
  addShippingMethod: (cartId: string, optionId: string) =>
    api(`/store/carts/${cartId}/shipping-methods`, {
      method: "POST",
      body: JSON.stringify({ option_id: optionId }),
    }),
  createPaymentSessions: (cartId: string) =>
    api(`/store/carts/${cartId}/payment-sessions`, { method: "POST" }),
  setPaymentSession: (cartId: string, providerId: string) =>
    api(`/store/carts/${cartId}`, {
      method: "POST",
      body: JSON.stringify({ payment_session: { provider_id: providerId } }),
    }),
  complete: (cartId: string) => api(`/store/carts/${cartId}/complete`, { method: "POST" }),
};
