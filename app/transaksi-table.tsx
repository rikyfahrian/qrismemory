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
          <TableHead>Nama</TableHead>
          <TableHead>Jam</TableHead>
          <TableHead>Jumlah</TableHead>
          <TableHead className="w-10" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, idx) => (
          <TableRow key={item.id}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell>{item.nama}</TableCell>
            <TableCell>
              {new Date(item.waktu).toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </TableCell>

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
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell colSpan={3}>{formatRupiah(total)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
