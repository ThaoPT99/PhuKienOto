# Hướng Dẫn Fix Lỗi Prisma Client

Nếu gặp lỗi "Cannot find module '.prisma/client/default'", làm theo các bước sau:

## Bước 1: Xóa cache và regenerate

```bash
# Xóa .next cache
rm -rf .next
# hoặc trên Windows
Remove-Item -Recurse -Force .next

# Xóa Prisma client cũ
Remove-Item -Recurse -Force node_modules\.prisma
Remove-Item -Recurse -Force node_modules\@prisma

# Cài lại @prisma/client
npm install @prisma/client

# Generate lại Prisma client
npx prisma generate
```

## Bước 2: Restart Dev Server

Sau khi generate xong, **bắt buộc phải restart dev server**:

```bash
# Dừng server (Ctrl+C)
# Sau đó chạy lại
npm run dev
```

## Bước 3: Kiểm tra

Đảm bảo các file sau tồn tại:
- `node_modules/.prisma/client/index.js`
- `node_modules/@prisma/client`

## Lưu Ý Quan Trọng

1. **Luôn restart server sau khi `prisma generate`**
2. **Xóa `.next` folder nếu vẫn lỗi**
3. **Prisma 6 yêu cầu output path trong schema.prisma**

## Nếu vẫn lỗi

Thử chạy:
```bash
npm install
npx prisma generate
# Restart server
npm run dev
```

