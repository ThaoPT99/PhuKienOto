# Hướng Dẫn Deploy Website

## 🚀 Option 1: Vercel (Khuyến nghị - Dễ nhất cho Next.js)

### Bước 1: Push code lên GitHub

```bash
# Đảm bảo đã commit và push code
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Bước 2: Deploy lên Vercel

1. Vào https://vercel.com
2. Đăng nhập bằng GitHub
3. Click "Add New Project"
4. Import repository từ GitHub
5. Vercel tự động detect Next.js và cấu hình

### Bước 3: Cấu hình Environment Variables

Trong Vercel Dashboard → Settings → Environment Variables, thêm:

```
DATABASE_URL=file:./prisma/dev.db
NEXTAUTH_SECRET=your-secret-key-here-change-this
NEXTAUTH_URL=https://your-domain.vercel.app
```

**⚠️ Lưu ý**: SQLite không hoạt động tốt trên Vercel. Cần dùng database cloud như:
- **PlanetScale** (MySQL)
- **Supabase** (PostgreSQL)
- **Railway** (PostgreSQL/MySQL)

### Bước 4: Deploy

Click "Deploy" và chờ. Vercel sẽ tự động build và deploy!

## 🚂 Option 2: Railway

### Bước 1: Tạo account Railway

Vào https://railway.app và đăng ký

### Bước 2: Tạo project mới

1. Click "New Project"
2. Chọn "Deploy from GitHub repo"
3. Chọn repository

### Bước 3: Add Database

1. Click "New" → "Database" → "PostgreSQL" hoặc "MySQL"
2. Railway tự động tạo database

### Bước 4: Cấu hình Environment Variables

Trong Variables tab, thêm:

```
DATABASE_URL=<Railway cung cấp>
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-app.railway.app
```

### Bước 5: Deploy

Railway tự động deploy khi push code lên GitHub.

## 🐳 Option 3: Docker + VPS

### Bước 1: Tạo Dockerfile

Đã có file Dockerfile trong project.

### Bước 2: Build và chạy

```bash
docker build -t gnart-donat-oto .
docker run -p 3000:3000 gnart-donat-oto
```

## 📋 Checklist trước khi Deploy

- [ ] Code đã được push lên GitHub/GitLab
- [ ] Environment variables đã được cấu hình
- [ ] Database đã được setup (cloud database)
- [ ] Domain đã được config (nếu cần)
- [ ] Email service đã được config (nếu dùng)
- [ ] File upload service đã được config (nếu dùng)

## 🔧 Cấu hình cần thiết

### 1. Database (Production)

**KHÔNG dùng SQLite trên production!** Cần database cloud:

#### PlanetScale (MySQL):
```env
DATABASE_URL="mysql://..."
```

#### Supabase (PostgreSQL):
```env
DATABASE_URL="postgresql://..."
```

#### Railway (PostgreSQL):
```env
DATABASE_URL="postgresql://..."
```

### 2. Environment Variables

```env
# Database
DATABASE_URL=your-cloud-database-url

# NextAuth
NEXTAUTH_SECRET=generate-random-secret-key-here
NEXTAUTH_URL=https://your-domain.com

# Email (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Next.js
NODE_ENV=production
```

### 3. Generate NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

Hoặc online: https://generate-secret.vercel.app/32

## 📝 Migration từ SQLite sang Production Database

### Nếu dùng PostgreSQL/MySQL:

1. Cập nhật `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql" // hoặc "mysql"
  url      = env("DATABASE_URL")
}
```

2. Tạo migration mới:
```bash
npx prisma migrate dev --name init
```

3. Deploy migration:
```bash
npx prisma migrate deploy
```

## 🌐 Domain Setup

### Vercel:
1. Vào Project Settings → Domains
2. Add custom domain
3. Cấu hình DNS theo hướng dẫn

### Railway:
1. Vào Project → Settings → Domain
2. Generate domain hoặc add custom domain
3. Cấu hình DNS

## 📊 Monitoring

Sau khi deploy, có thể monitor:
- **Vercel**: Dashboard có analytics sẵn
- **Railway**: Metrics trong dashboard
- **Logs**: Xem logs trực tiếp trong platform

## 🐛 Troubleshooting

### Build failed:
- Kiểm tra logs trong deployment
- Đảm bảo tất cả dependencies đã được cài
- Kiểm tra environment variables

### Database connection error:
- Kiểm tra DATABASE_URL
- Đảm bảo database đã được tạo
- Kiểm tra network/firewall settings

### 404 errors:
- Kiểm tra routing trong Next.js
- Đảm bảo API routes đúng path
- Kiểm tra basePath nếu có

## 🚀 Quick Deploy với Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

