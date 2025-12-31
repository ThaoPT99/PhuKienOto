# Hướng Dẫn Kết Nối Git

## Bước 1: Khởi tạo Git Repository (nếu chưa có)

```bash
cd C:\PhuKienOto
git init
```

## Bước 2: Kiểm tra .gitignore

Đảm bảo file `.gitignore` đã có các nội dung cần thiết (đã có sẵn):
- `node_modules/`
- `.next/`
- `.env`
- `prisma/dev.db`
- `*.log`

## Bước 3: Thêm tất cả files vào staging

```bash
git add .
```

## Bước 4: Commit lần đầu

```bash
git commit -m "Initial commit: Website bán phụ kiện ô tô"
```

## Bước 5: Kết nối với Remote Repository

### Nếu chưa có repository trên GitHub/GitLab:

1. **Tạo repository mới trên GitHub:**
   - Vào https://github.com/new
   - Tạo repo mới (ví dụ: `phukienoto`)
   - **KHÔNG** chọn "Initialize with README"

2. **Kết nối với remote:**

```bash
# Thay YOUR_USERNAME và REPO_NAME bằng thông tin của bạn
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Hoặc dùng SSH (nếu đã setup SSH key)
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
```

### Nếu đã có repository:

```bash
git remote add origin <URL_REPOSITORY_CỦA_BẠN>
```

## Bước 6: Push code lên remote

```bash
# Đổi tên branch thành main (nếu cần)
git branch -M main

# Push code lên
git push -u origin main
```

## Các lệnh Git thường dùng

### Xem trạng thái
```bash
git status
```

### Thêm file vào staging
```bash
git add .
# hoặc thêm file cụ thể
git add filename
```

### Commit changes
```bash
git commit -m "Mô tả thay đổi"
```

### Push lên remote
```bash
git push
```

### Pull từ remote
```bash
git pull
```

### Xem lịch sử commit
```bash
git log
```

### Xem remote đã kết nối
```bash
git remote -v
```

## Lưu ý quan trọng

1. **KHÔNG commit file .env** - chứa thông tin nhạy cảm
2. **KHÔNG commit node_modules/** - quá nặng, dùng npm install
3. **KHÔNG commit .next/** - build cache, tự động tạo lại
4. **KHÔNG commit database file** - prisma/dev.db

## Cấu hình Git (lần đầu sử dụng)

Nếu chưa cấu hình Git trên máy:

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

## Workflow thông thường

```bash
# 1. Xem thay đổi
git status

# 2. Thêm file vào staging
git add .

# 3. Commit
git commit -m "Mô tả thay đổi"

# 4. Push lên GitHub
git push
```

## Tạo README.md cho repository

Đã có file README.md sẵn trong project, bạn có thể cập nhật nội dung nếu cần.

