/** @format */

import { Transaksi } from "../types/transaksi";

const STORAGE_KEY = "transaksi-data";
const listeners = new Set<() => void>();
const EMPTY: Transaksi[] = [];

let cachedRaw: string | null = null;
let cachedData: Transaksi[] = EMPTY;

function emitChange() {
  listeners.forEach((listener) => listener());
}

export function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function getSnapshot(): Transaksi[] {
  const raw = localStorage.getItem(STORAGE_KEY);

  // kalau raw string sama kayak terakhir kali, return cache lama (referensi sama)
  if (raw === cachedRaw) {
    return cachedData;
  }

  cachedRaw = raw;
  cachedData = raw ? JSON.parse(raw) : EMPTY;
  return cachedData;
}

export function getServerSnapshot(): Transaksi[] {
  return EMPTY;
}

function persist(data: Transaksi[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  emitChange();
}

export function addTransaksi(nama: string, jumlah: number) {
  const current = getSnapshot();
  persist([...current, { id: Date.now(), nama, jumlah, waktu: new Date().toISOString() }]);
}

export function deleteTransaksi(id: number) {
  persist(getSnapshot().filter((item) => item.id !== id));
}

export function clearTransaksi() {
  persist([]);
}
