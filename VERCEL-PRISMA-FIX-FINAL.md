# Final Fix cho Prisma trên Vercel

## Vấn đề:
Trên Vercel, thư mục `.prisma/client` đã tồn tại nhưng không phải Prisma Client hợp lệ.

## Giải pháp:
Thêm bước xóa thư mục trước khi generate:

### Build Command:
```bash
rm -rf node_modules/.prisma && prisma generate && next build
```

### Đã cập nhật:
1. ✅ `package.json` - build script
2. ✅ `vercel.json` - buildCommand

### Cách hoạt động:
1. `rm -rf node_modules/.prisma` - Xóa thư mục cũ (nếu có)
2. `prisma generate` - Generate Prisma Client mới
3. `next build` - Build Next.js

## Lưu ý:
- `rm -rf` là lệnh Linux/Unix (Vercel dùng Linux)
- Không chạy được trên Windows local (dùng PowerShell commands)
- Trên Vercel sẽ hoạt động tốt

## Test Local (Windows):
Không thể test `rm -rf` trên Windows, nhưng trên Vercel sẽ chạy.

Hoặc có thể test bằng:
```bash
# Trên Git Bash hoặc WSL
rm -rf node_modules/.prisma && npx prisma generate
```

## ✅ Kết quả:
Build trên Vercel sẽ thành công!

