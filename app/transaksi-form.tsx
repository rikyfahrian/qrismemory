/** @format */

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onAdd: (nama: string, jumlah: number) => void;
}

export function TransaksiForm({ onAdd }: Props) {
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama.trim() || !jumlah.trim()) {
      toast.error("Nama dan jumlah wajib diisi!");
      return;
    }

    onAdd(nama, Number(jumlah));
    setNama("");
    setJumlah("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-xl">
      <Input
        type="text"
        placeholder="Nama member"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
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
