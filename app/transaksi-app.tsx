/** @format */

"use client";

import { useTransaksi } from "./hooks/use-transaksi";
import { TransaksiForm } from "./transaksi-form";
import { Button } from "@/components/ui/button";
import { TransaksiTable } from "./transaksi-table";

export default function TransaksiApp() {
  const { data, addTransaksi, deleteTransaksi, clearTransaksi, total } = useTransaksi();

  return (
    <div className="space-y-6">
      <TransaksiForm onAdd={addTransaksi} />
      <p className="text-sm text-muted-foreground">
        {new Date().toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <TransaksiTable data={data} total={total} onDelete={deleteTransaksi} />

      {data.length > 0 && (
        <Button variant="destructive" onClick={clearTransaksi}>
          Hapus data shift ini
        </Button>
      )}
    </div>
  );
}
