/** @format */

"use client";

import { useSyncExternalStore } from "react";
import {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  addTransaksi,
  deleteTransaksi,
  clearTransaksi,
} from "../lib/transaksi-store";

export function useTransaksi() {
  const data = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const total = data.reduce((sum, item) => sum + item.jumlah, 0);

  return { data, addTransaksi, deleteTransaksi, clearTransaksi, total };
}
