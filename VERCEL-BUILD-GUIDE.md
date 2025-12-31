# Hướng Dẫn Build Trên Vercel

## 📊 Các Giai Đoạn Build

### 1. ✅ Cloning Repository
- Vercel đã clone code từ GitHub
- Branch: `main`
- Commit: `d547526`

### 2. 🔄 Installing Dependencies
- Đang chạy: `npm install`
- Cài đặt tất cả packages từ `package.json`
- Thời gian: 1-3 phút (tùy số lượng packages)

### 3. ⚙️ Building Project
- Chạy: `npm run build`
- Next.js sẽ compile code
- Generate static pages
- Thời gian: 2-5 phút

### 4. 🚀 Deployment
- Upload files lên Vercel CDN
- Setup routing
- Kích hoạt website

## ⚠️ Các Lỗi Có Thể Gặp

### Lỗi 1: Prisma Client Not Found
```
Error: Cannot find module '@prisma/client'
```

**Giải pháp:**
- Thêm build command trong Vercel:
```
npx prisma generate && npm run build
```

### Lỗi 2: Environment Variables Missing
```
Error: NEXTAUTH_SECRET is not defined
```

**Giải pháp:**
- Vào Project Settings → Environment Variables
- Thêm: `NEXTAUTH_SECRET` và `NEXTAUTH_URL`

### Lỗi 3: Database Connection Error
```
Error: P1001: Can't reach database server
```

**Giải pháp:**
- SQLite không hoạt động trên Vercel!
- Cần setup database cloud (PlanetScale/Supabase)
- Thêm `DATABASE_URL` vào environment variables

### Lỗi 4: Build Timeout
```
Error: Build exceeded maximum build time
```

**Giải pháp:**
- Giảm số lượng dependencies
- Optimize build process
- Hoặc upgrade Vercel plan

## ✅ Checklist Sau Khi Build Thành Công

### 1. Kiểm Tra Website
- [ ] Website accessible tại URL Vercel
- [ ] Homepage load được
- [ ] Không có lỗi 404

### 2. Kiểm Tra Environment Variables
- [ ] `NEXTAUTH_SECRET` đã được thêm
- [ ] `NEXTAUTH_URL` đã được thêm (URL từ Vercel)
- [ ] `DATABASE_URL` đã được thêm (nếu có database)

### 3. Kiểm Tra Database
- [ ] Database connection working
- [ ] Migrations đã chạy (nếu cần)
- [ ] Test query database

### 4. Kiểm Tra Authentication
- [ ] Login page accessible
- [ ] Test login functionality
- [ ] Session working

## 🔧 Nếu Build Thất Bại

### Bước 1: Xem Logs
1. Vào Vercel Dashboard
2. Click vào deployment failed
3. Xem logs để tìm lỗi

### Bước 2: Kiểm Tra Common Issues
- Environment variables đã đủ chưa?
- Database connection string đúng chưa?
- Prisma client đã generate chưa?

### Bước 3: Fix và Redeploy
1. Fix lỗi trong code
2. Commit và push lại
3. Vercel tự động redeploy

## 📝 Recommended Build Settings

Trong Vercel → Settings → General:

**Build Command:**
```
npm run build
```

**Output Directory:**
```
.next
```
(Next.js tự động detect, không cần set)

**Install Command:**
```
npm install
```

**Development Command:**
```
npm run dev
```

## 🎯 Next Steps Sau Khi Build Thành Công

1. ✅ Copy URL từ Vercel
2. ✅ Update `NEXTAUTH_URL` với URL thực tế
3. ✅ Test website
4. ✅ Setup database (nếu chưa)
5. ✅ Seed data (nếu cần)
6. ✅ Test authentication
7. ✅ Test các tính năng chính

## 💡 Tips

- Build lần đầu có thể lâu hơn (3-5 phút)
- Build sau sẽ nhanh hơn (có cache)
- Monitor build logs để catch errors sớm
- Test trên preview URL trước khi promote lên production

