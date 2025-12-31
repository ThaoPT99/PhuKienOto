# Hướng Dẫn Sử Dụng Scripts

## Các Lệnh NPM

### Development (Phát Triển)

#### `npm run dev` hoặc `npm run dev:start`
- Chạy Next.js ở **development mode**
- Có **hot reload** (tự động reload khi code thay đổi)
- Nhanh hơn, phù hợp cho development
- Chạy tại: `http://localhost:3000`

**Sử dụng khi:**
- Đang phát triển/viết code
- Cần xem thay đổi ngay lập tức
- Debug và test tính năng

```bash
npm run dev
```

### Production (Sản Xuất)

#### `npm run build`
- Build project thành production-ready code
- Tối ưu hóa và minify code
- Tạo các file tĩnh tối ưu

```bash
npm run build
```

#### `npm start`
- Chạy Next.js ở **production mode**
- **Cần chạy `npm run build` trước**
- Tối ưu hóa hiệu năng
- Không có hot reload

**Sử dụng khi:**
- Test production build locally
- Deploy lên server
- Đã hoàn thành development

```bash
npm run build
npm start
```

## Workflow Đề Xuất

### Khi Development:
```bash
npm run dev
```

### Khi Deploy Production:
```bash
# 1. Build
npm run build

# 2. Start production server
npm start
```

## Tóm Tắt

| Lệnh | Mục đích | Khi nào dùng |
|------|----------|--------------|
| `npm run dev` | Development server | Đang code/phát triển |
| `npm run build` | Build production | Trước khi deploy |
| `npm start` | Production server | Sau khi build, test production |

## Lưu Ý

- **Development**: Luôn dùng `npm run dev`
- **Production**: Dùng `npm start` sau khi `npm run build`
- `npm start` KHÔNG có hot reload, không phù hợp cho development
- `npm run dev` có hot reload, phù hợp cho development

