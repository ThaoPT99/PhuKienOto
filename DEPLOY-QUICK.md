# 🚀 Quick Deploy Guide - Gnart Độ Nát Ô Tô

## Cách Nhanh Nhất: Vercel (5 phút)

### 1. Push code lên GitHub

```bash
git add .
git commit -m "Ready to deploy"
git push origin main
```

### 2. Deploy lên Vercel

1. Vào: https://vercel.com/new
2. Đăng nhập bằng GitHub
3. Import repository: `gnart-donat-oto` (hoặc tên repo của bạn)
4. Vercel tự động detect Next.js

### 3. Thêm Environment Variables

Trong Vercel → Project Settings → Environment Variables:

```
NEXTAUTH_SECRET=<tạo random string>
NEXTAUTH_URL=https://your-app.vercel.app
DATABASE_URL=<database url nếu có>
```

**Generate NEXTAUTH_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 4. Click Deploy!

Vercel sẽ tự động build và deploy trong 2-3 phút.

### 5. Sau khi deploy

- ✅ Website sẽ có URL: `https://your-app.vercel.app`
- ✅ Tự động deploy mỗi khi push code
- ✅ SSL/HTTPS tự động
- ✅ CDN global

---

## ⚠️ Lưu Ý Quan Trọng

### Database:

**SQLite KHÔNG hoạt động trên Vercel!** Cần database cloud:

#### Option 1: PlanetScale (Miễn phí)
1. Vào https://planetscale.com
2. Tạo database MySQL
3. Copy connection string
4. Thêm vào Vercel env: `DATABASE_URL`

Cập nhật `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

#### Option 2: Supabase (Miễn phí)
1. Vào https://supabase.com
2. Tạo project PostgreSQL
3. Copy connection string
4. Thêm vào Vercel env: `DATABASE_URL`

Cập nhật `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### Migration Database:

Sau khi setup database, chạy:

```bash
npx prisma migrate deploy
```

Hoặc trong Vercel, thêm build command:
```
npm run build && npx prisma migrate deploy
```

---

## 📝 Checklist

- [ ] Code đã push lên GitHub
- [ ] Vercel đã kết nối repo
- [ ] Environment variables đã thêm
- [ ] Database cloud đã setup (không dùng SQLite)
- [ ] Migrations đã chạy
- [ ] Test website sau khi deploy

---

## 🔧 Troubleshooting

### Build failed?
- Kiểm tra logs trong Vercel
- Đảm bảo environment variables đúng
- Kiểm tra database connection

### Database error?
- Kiểm tra DATABASE_URL format
- Đảm bảo database đã được tạo
- Chạy migrations: `npx prisma migrate deploy`

### 404 on API routes?
- Kiểm tra Next.js routing
- Đảm bảo API routes trong `app/api/`

---

## 🎉 Sau khi deploy thành công:

1. Website sẽ có URL công khai
2. Có thể share link với khách hàng
3. Tự động update khi push code mới
4. Monitor trong Vercel dashboard

**Happy Deploying! 🚀**

