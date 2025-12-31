# Hướng Dẫn Chạy Project

## Bước 1: Kiểm tra Requirements

Đảm bảo bạn đã cài đặt:
- **Node.js** (phiên bản 18 trở lên)
- **npm** (đi kèm với Node.js)

Kiểm tra:
```bash
node --version
npm --version
```

## Bước 2: Di chuyển vào thư mục project

```bash
cd C:\PhuKienOto
```

## Bước 3: Cài đặt Dependencies

```bash
npm install
```

Lệnh này sẽ cài đặt tất cả các package cần thiết (Next.js, Prisma, v.v.)

## Bước 4: Setup Database

### 4.1. Generate Prisma Client
```bash
npx prisma generate
```

### 4.2. Chạy Migrations (tạo database)
```bash
npx prisma migrate dev
```

Lệnh này sẽ tạo database SQLite tại `prisma/dev.db`

## Bước 5: Seed Data (Tạo dữ liệu mẫu)

### Cách 1: Dùng API endpoint (sau khi chạy server)

Chạy server trước (bước 6), rồi mở browser và truy cập:
```
http://localhost:3000/api/seed
```

Hoặc dùng curl:
```bash
curl -X POST http://localhost:3000/api/seed
```

### Cách 2: Dùng script (nếu đã fix)
```bash
npm run db:seed
```

## Bước 6: Chạy Development Server

```bash
npm run dev
```

Server sẽ chạy tại: **http://localhost:3000**

## Bước 7: Truy cập Website

Mở browser và truy cập:
- **Website User**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## Đăng nhập Admin

**Email:** `admin@phukienoto.com`  
**Password:** `admin123`

## Tóm Tắt Nhanh

```bash
# 1. Di chuyển vào thư mục
cd C:\PhuKienOto

# 2. Cài đặt dependencies
npm install

# 3. Setup database
npx prisma generate
npx prisma migrate dev

# 4. Chạy server
npm run dev

# 5. Seed data (sau khi server chạy)
# Mở browser: http://localhost:3000/api/seed
```

## Troubleshooting

### Lỗi "Prisma Client not found"
```bash
npx prisma generate
```

### Lỗi "Database not found"
```bash
npx prisma migrate dev
```

### Lỗi Port đã được sử dụng
Thay đổi port trong `.env` hoặc kill process đang dùng port 3000

### Reset database
```bash
npx prisma migrate reset
npx prisma migrate dev
```

## Các Lệnh Hữu Ích

| Lệnh | Mục đích |
|------|----------|
| `npm run dev` | Chạy development server |
| `npm run build` | Build production |
| `npm start` | Chạy production server |
| `npx prisma studio` | Mở Prisma Studio (xem database) |
| `npx prisma migrate dev` | Tạo migration mới |
| `npx prisma generate` | Generate Prisma Client |
| `npm run db:seed` | Seed data |

## Next Steps

1. ✅ Server đã chạy
2. ✅ Seed data đã xong
3. 🎉 Bắt đầu phát triển!

Bạn có thể:
- Truy cập http://localhost:3000 để xem website
- Truy cập http://localhost:3000/admin để quản lý
- Bắt đầu code và thấy thay đổi ngay lập tức (hot reload)

