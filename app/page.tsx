/** @format */

import TransaksiApp from "./transaksi-app";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-24 font-sans gap-2">
      <h1 className="text-3xl font-bold">QRIS History Payment</h1>

      <TransaksiApp />
    </div>
  );
}
