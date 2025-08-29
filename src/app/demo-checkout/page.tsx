// app/demo-checkout/page.tsx (Next.js App Router, client component)
"use client";
import { store } from "../lib/medusa";

export default function DemoCheckout() {
  async function start() {
    const { cart } = await store.createCart();
    // ...add item, address, shipping...
    await store.createPaymentSessions(cart.id);
    await store.setPaymentSession(cart.id, "stripe");
    const result = await store.complete(cart.id);
    const redirect =
      result?.data?.session?.url || result?.payment_session?.data?.url || result?.redirect_url;
    window.location.href = redirect;
  }
  return <button onClick={start}>Test checkout</button>;
}
