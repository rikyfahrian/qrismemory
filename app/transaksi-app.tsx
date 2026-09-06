/** @format */

"use client";

import { useTransaksi } from "./hooks/use-transaksi";
import { TransaksiForm } from "./transaksi-form";
import { Button } from "@/components/ui/button";
import { TransaksiTable } from "./transaksi-table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
        <AlertDialog>
          <AlertDialogTrigger
            render={<Button variant="destructive">Hapus data shift ini</Button>}
          />
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Yakin mau hapus semua data?</AlertDialogTitle>
              <AlertDialogDescription>
                Semua transaksi di shift ini akan dihapus permanen dan gak bisa dikembalikan.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel render={<Button variant="outline">Batal</Button>} />
              <AlertDialogAction
                render={
                  <Button variant="destructive" onClick={clearTransaksi}>
                    Hapus
                  </Button>
                }
              />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
