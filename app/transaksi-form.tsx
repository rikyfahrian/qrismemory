/** @format */

// components/transaksi-form.tsx
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onAdd: (nama: string, jumlah: number, deskripsi: string) => void;
}

export function TransaksiForm({ onAdd }: Props) {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama.trim() || !jumlah.trim() || !deskripsi.trim()) {
      toast.error("Nama, jumlah, dan item wajib diisi!");
      return;
    }

    onAdd(nama, Number(jumlah), deskripsi);
    setNama("");
    setJumlah("");
    setDeskripsi("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        type="text"
        placeholder="Nama member"
        className="w-fit"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Item (contoh: VIP 3 jam, Fanta 2)"
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Rp</span>
        <Input
          type="number"
          placeholder="Jumlah"
          value={jumlah}
          onChange={(e) => setJumlah(e.target.value)}
        />
      </div>
      <input type="hidden" name="waktu" />
      <Button type="submit">Tambah</Button>
    </form>
  );
}
