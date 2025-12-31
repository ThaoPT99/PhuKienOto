# Website Bán Phụ Kiện & Nội Thất Ô Tô

Website bán hàng phụ kiện và nội thất ô tô với giao diện hiện đại, phù hợp với người đam mê độ xe.

## Tính Năng

### Frontend (User)
- ✅ Trang chủ với hero section và featured products
- ✅ Danh sách sản phẩm với filter theo danh mục
- ✅ Chi tiết sản phẩm
- ✅ Giỏ hàng
- ✅ Danh mục sản phẩm
- ✅ Responsive design với dark theme hiện đại

### Admin Panel
- ✅ Dashboard với thống kê tổng quan
- ✅ Quản lý sản phẩm (CRUD)
- ✅ Quản lý đơn hàng
- ✅ Giao diện admin chuyên nghiệp
- ✅ Authentication với NextAuth.js

### Backend
- ✅ RESTful API với Next.js API Routes
- ✅ Prisma ORM với SQLite database
- ✅ NextAuth.js cho authentication
- ✅ Email service (nodemailer)
- ✅ Image upload
- ✅ Search functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: SQLite (Prisma ORM)
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: Nodemailer

## Cài Đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Setup database:
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed data (run API endpoint hoặc script)
# POST /api/seed
```

3. Cấu hình environment variables (.env):
```env
DATABASE_URL="file:./prisma/dev.db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

4. Chạy development server:
```bash
npm run dev
```

5. Mở [http://localhost:3000](http://localhost:3000) trong browser

## Default Credentials

**Admin:**
- Email: `admin@phukienoto.com`
- Password: `admin123`

**User:**
- Email: `user@example.com`
- Password: `user123`

## Cấu Trúc Project

```
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # NextAuth
│   │   ├── products/     # Products API
│   │   ├── orders/       # Orders API
│   │   ├── categories/   # Categories API
│   │   ├── stats/        # Statistics API
│   │   ├── seed/         # Seed data endpoint
│   │   └── upload/       # File upload
│   ├── admin/            # Admin pages
│   ├── products/         # Product pages
│   ├── cart/             # Cart page
│   └── ...
├── components/
│   └── Layout/           # Layout components
├── lib/
│   ├── prisma.ts         # Prisma client
│   ├── auth.ts           # Auth utilities
│   └── email.ts          # Email service
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Database migrations
└── public/
    └── uploads/          # Uploaded files
```

## API Endpoints

### Products
- `GET /api/products` - Lấy danh sách sản phẩm
- `GET /api/products/[id]` - Lấy chi tiết sản phẩm
- `POST /api/products` - Tạo sản phẩm mới
- `PUT /api/products/[id]` - Cập nhật sản phẩm
- `DELETE /api/products/[id]` - Xóa sản phẩm

### Orders
- `GET /api/orders` - Lấy danh sách đơn hàng
- `GET /api/orders/[id]` - Lấy chi tiết đơn hàng
- `POST /api/orders` - Tạo đơn hàng mới
- `PUT /api/orders/[id]` - Cập nhật đơn hàng

### Categories
- `GET /api/categories` - Lấy danh sách danh mục

### Stats
- `GET /api/stats` - Lấy thống kê tổng quan

### Seed
- `POST /api/seed` - Seed data mẫu

### Upload
- `POST /api/upload` - Upload file/image

## Triển Khai

### Vercel
```bash
npm run build
vercel deploy
```

### Docker
```bash
docker build -t phukienoto .
docker run -p 3000:3000 phukienoto
```

## Lưu Ý

- Database hiện tại dùng SQLite (phù hợp development)
- Để production, nên chuyển sang PostgreSQL hoặc MySQL
- Cấu hình email service để gửi email xác nhận đơn hàng
- Cập nhật NEXTAUTH_SECRET cho production
- Setup Cloudinary hoặc S3 cho image storage ở production

## Tác Giả

Website được xây dựng với Next.js, TypeScript và Prisma.
