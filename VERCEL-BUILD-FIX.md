# Fix Build Error - Prisma Client

## 🔴 Lỗi:
```
Module '"@prisma/client"' has no exported member 'PrismaClient'.
```

## ✅ Giải Pháp:

### Trong Vercel Dashboard:

1. Vào **Project Settings** → **General**
2. Tìm **Build Command**
3. Thay đổi từ:
   ```
   npm run build
   ```
   
   Thành:
   ```
   npx prisma generate && npm run build
   ```

4. Click **Save**

5. Redeploy project (hoặc push code mới)

---

## 📝 Giải Thích:

- Prisma Client cần được **generate** trước khi TypeScript compile
- Command `npx prisma generate && npm run build` sẽ:
  1. Generate Prisma Client từ schema
  2. Sau đó build Next.js

---

## 🔄 Alternative: Thêm vào package.json

Nếu muốn, có thể thêm script vào `package.json`:

```json
{
  "scripts": {
    "build": "prisma generate && next build"
  }
}
```

Nhưng cách tốt nhất là set trong Vercel Build Command như trên.

---

## ⚠️ Lưu Ý:

- **KHÔNG** chạy `prisma migrate` trong build command
- Chỉ cần `prisma generate`
- Migrations chạy riêng sau khi deploy (nếu cần)

