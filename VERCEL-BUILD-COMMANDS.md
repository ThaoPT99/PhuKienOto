# Vercel Build Commands Cấu Hình

## 🔧 Nếu Build Thất Bại với Prisma

Thêm build command trong Vercel Settings → General:

```
npx prisma generate && npm run build
```

Điều này sẽ:
1. Generate Prisma Client trước
2. Sau đó build Next.js

## 📋 Các Build Commands Khác

### Nếu có Database Migrations:
```
npx prisma generate && npx prisma migrate deploy && npm run build
```

### Nếu cần seed data (không khuyến nghị trên build):
```
npx prisma generate && npm run build
# Seed data chạy qua API sau khi deploy
```

## 🎯 Recommended Settings

**Build Command:**
```
npm run build
```

**Install Command:**
```
npm install
```

**Output Directory:**
```
.next
```
(Để Next.js tự detect)

**Framework Preset:**
```
Next.js
```
(Vercel tự động detect)

## ⚠️ Lưu Ý

- **KHÔNG** chạy migrations trong build command nếu dùng SQLite
- **KHÔNG** seed data trong build command
- Chỉ generate Prisma Client và build Next.js

