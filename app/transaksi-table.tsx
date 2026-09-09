/** @format */

// components/transaksi-table.tsx
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Transaksi } from "./types/transaksi";
import { formatRupiah } from "./lib/format";

interface Props {
  data: Transaksi[];
  total: number;
  onDelete: (id: number) => void;
}

export function TransaksiTable({ data, total, onDelete }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Waktu</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>Jumlah</TableHead>
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, idx) => (
          <TableRow key={item.id}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell>{new Date(item.waktu).toLocaleString("id-ID")}</TableCell>
            <TableCell>{item.nama.toUpperCase()}</TableCell>
            <TableCell>{item.deskripsi.toUpperCase()}</TableCell>

            <TableCell>{formatRupiah(item.jumlah)}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" onClick={() => onDelete(item.id)}>
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell colSpan={4}>{formatRupiah(total)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
