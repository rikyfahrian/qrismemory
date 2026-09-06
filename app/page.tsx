/** @format */

import Image from "next/image";
import TransaksiApp from "./transaksi-app";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-24 font-sans gap-2">
      <h1 className="text-3xl font-bold">QRIS History Payment</h1>

      <TransaksiApp />

      <Image
        src="/oke.jpg"
        alt="Logo"
        width={400}
        height={100}
        className="self-center rounded-2xl"
      />
    </div>
  );
}
