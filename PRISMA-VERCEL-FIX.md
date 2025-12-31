# Fix Prisma trên Vercel

## Vấn đề:
Prisma 6 yêu cầu output path trong schema.prisma

## Giải pháp:
Đã set output path: `../node_modules/.prisma/client`

Đây là path chuẩn mà Prisma sử dụng và sẽ hoạt động tốt trên Vercel.

## Build Command trong Vercel:
```
npm run build
```

Script trong package.json đã có:
```json
"build": "prisma generate && next build"
```

Vercel sẽ tự động:
1. `npm install` - Cài dependencies
2. `prisma generate` - Generate Prisma Client (trong build script)
3. `next build` - Build Next.js

## Lưu ý:
- Output path phải là relative path từ prisma/ directory
- `../node_modules/.prisma/client` là path chuẩn
- Không cần thay đổi gì thêm trong Vercel settings

