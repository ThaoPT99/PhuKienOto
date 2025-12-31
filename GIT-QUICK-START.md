# Quick Start - Kết Nối Git

## ✅ Đã khởi tạo Git Repository

Git đã được khởi tạo trong project. Bây giờ bạn cần:

## Bước 1: Thêm tất cả files vào Git

```bash
git add .
```

## Bước 2: Commit lần đầu

```bash
git commit -m "Initial commit: Website bán phụ kiện ô tô với Next.js, Prisma, TypeScript"
```

## Bước 3: Kết nối với GitHub/GitLab

### Tạo Repository mới trên GitHub:

1. Vào https://github.com/new
2. Đặt tên repository (ví dụ: `phukienoto`)
3. Chọn Public hoặc Private
4. **KHÔNG** tích "Initialize with README"
5. Click "Create repository"

### Kết nối:

```bash
# Thay YOUR_USERNAME và REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Ví dụ:
# git remote add origin https://github.com/yourusername/phukienoto.git
```

## Bước 4: Push code lên GitHub

```bash
# Đổi tên branch thành main
git branch -M main

# Push code
git push -u origin main
```

## Sau này, khi có thay đổi:

```bash
# 1. Xem thay đổi
git status

# 2. Thêm file
git add .

# 3. Commit
git commit -m "Mô tả thay đổi"

# 4. Push
git push
```

## ⚠️ Lưu Ý

Các file/folder sau **KHÔNG** được commit (đã có trong .gitignore):
- ✅ `.env` - chứa thông tin nhạy cảm
- ✅ `node_modules/` - quá nặng
- ✅ `.next/` - build cache
- ✅ `prisma/dev.db` - database file
- ✅ `public/uploads/` - file upload

## Cấu hình Git (nếu chưa có)

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

