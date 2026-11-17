#!/usr/bin/env python3
"""Kecilkan & beri nomor foto untuk galeri.
Pemakaian:  python tools/kompres_foto.py "C:/folder/foto-asli"
Hasil: photos/galeri/1.jpg ... (maks 50, urut berdasarkan tanggal foto diambil).
Butuh Pillow:  pip install pillow   (opsional untuk HEIC: pip install pillow-heif)"""
import sys, argparse
from pathlib import Path
from PIL import Image, ImageOps
try:
    import pillow_heif; pillow_heif.register_heif_opener()
except Exception: pass

p = argparse.ArgumentParser()
p.add_argument("sumber", help="folder berisi foto asli")
p.add_argument("--maks", type=int, default=50)
p.add_argument("--sisi", type=int, default=1600, help="sisi terpanjang (px)")
p.add_argument("--keluar", default=str(Path(__file__).resolve().parent.parent / "photos" / "galeri"))
a = p.parse_args()

ext = {".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"}
files = [f for f in Path(a.sumber).iterdir() if f.suffix.lower() in ext]
def tgl(f):
    try:
        t = Image.open(f).getexif().get(36867) or Image.open(f).getexif().get(306)
        if t: return str(t)
    except Exception: pass
    return __import__("time").strftime("%Y:%m:%d %H:%M:%S", __import__("time").localtime(f.stat().st_mtime))
files.sort(key=tgl)
out = Path(a.keluar); out.mkdir(parents=True, exist_ok=True)
for i, f in enumerate(files[:a.maks], 1):
    im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
    im.thumbnail((a.sisi, a.sisi))
    im.save(out / f"{i}.jpg", quality=82, optimize=True)
    print(f"{f.name} -> {i}.jpg")
print(f"Selesai: {min(len(files), a.maks)} foto di {out}")
if len(files) > a.maks: print(f"Catatan: {len(files)-a.maks} foto tidak dipakai (batas {a.maks}).")
