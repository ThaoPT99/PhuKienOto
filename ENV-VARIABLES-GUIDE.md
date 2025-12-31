# Hướng Dẫn Environment Variables

## 🔐 NEXTAUTH_SECRET

### Nó là gì?
- **NEXTAUTH_SECRET** là một chuỗi bí mật dùng để mã hóa JWT tokens (JSON Web Tokens)
- JWT tokens được dùng để xác thực người dùng (login/authentication)
- **QUAN TRỌNG**: Phải là chuỗi ngẫu nhiên, dài, và BÍ MẬT

### Tại sao cần?
- Để bảo mật session của người dùng
- Để mã hóa cookies khi đăng nhập
- Nếu không có hoặc yếu → Hacker có thể giả mạo đăng nhập

### Cách tạo:

#### Cách 1: Dùng Node.js (Trong terminal)
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Kết quả sẽ giống: `aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890abcdefghijkl=`

#### Cách 2: Dùng OpenSSL
```bash
openssl rand -base64 32
```

#### Cách 3: Online generator
Vào: https://generate-secret.vercel.app/32

#### Cách 4: Random string bất kỳ (dài ít nhất 32 ký tự)
Ví dụ: `gnart-donat-oto-super-secret-key-2024-very-long-random-string`

### Ví dụ giá trị:
```
NEXTAUTH_SECRET=K8xY2mN9pQ5rT7wV1zA4bC6dE8fG0hI2jK4lM6nO8pQ0rS2tU4vW6xY8zA
```

---

## 🌐 NEXTAUTH_URL

### Nó là gì?
- **NEXTAUTH_URL** là URL công khai của website
- NextAuth cần biết URL này để redirect sau khi đăng nhập
- Phải là URL đầy đủ với `https://`

### Tại sao cần?
- Để redirect về đúng domain sau khi login
- Để tạo callback URLs cho OAuth providers
- Để xác định domain hợp lệ cho cookies

### Cách lấy URL:

#### Bước 1: Deploy lên Vercel trước
1. Vào https://vercel.com
2. Deploy project
3. Vercel sẽ cho bạn URL: `https://your-project-name.vercel.app`

#### Bước 2: Lấy URL từ Vercel
Sau khi deploy, URL sẽ là một trong các dạng:
- `https://phukienoto.vercel.app`
- `https://phukienoto-abc123.vercel.app`
- `https://your-custom-domain.com` (nếu bạn setup custom domain)

### Ví dụ giá trị:

**Development (localhost):**
```
NEXTAUTH_URL=http://localhost:3000
```

**Production (Vercel):**
```
NEXTAUTH_URL=https://phukienoto.vercel.app
```

**Custom Domain:**
```
NEXTAUTH_URL=https://gnartdonatoto.com
```

---

## 📝 Hướng Dẫn Setup Đầy Đủ

### Bước 1: Tạo NEXTAUTH_SECRET

Chạy trong terminal:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy kết quả (ví dụ: `K8xY2mN9pQ5rT7wV1zA4bC6dE8fG0hI2jK4lM6nO8pQ0rS2tU4vW6xY8zA`)

### Bước 2: Deploy lên Vercel

1. Vào https://vercel.com/new
2. Import repository
3. Deploy project
4. Lấy URL từ Vercel (ví dụ: `https://phukienoto.vercel.app`)

### Bước 3: Thêm Environment Variables trong Vercel

1. Vào Project → Settings → Environment Variables
2. Thêm từng biến:

**Variable 1:**
- Key: `NEXTAUTH_SECRET`
- Value: `K8xY2mN9pQ5rT7wV1zA4bC6dE8fG0hI2jK4lM6nO8pQ0rS2tU4vW6xY8zA` (secret bạn vừa tạo)

**Variable 2:**
- Key: `NEXTAUTH_URL`
- Value: `https://phukienoto.vercel.app` (URL từ Vercel)

3. Chọn Environment: **Production, Preview, Development** (hoặc chỉ Production)
4. Click "Save"

### Bước 4: Redeploy

Sau khi thêm env variables:
1. Vào Deployments tab
2. Click "..." trên deployment mới nhất
3. Chọn "Redeploy"
4. Hoặc push code mới → tự động redeploy

---

## ⚠️ Lưu Ý Quan Trọng

### 1. NEXTAUTH_SECRET
- ✅ **PHẢI** là random, dài (ít nhất 32 ký tự)
- ✅ **PHẢI** giữ bí mật, không commit vào git
- ❌ **KHÔNG** dùng giá trị cố định dễ đoán
- ❌ **KHÔNG** share với ai

### 2. NEXTAUTH_URL
- ✅ **PHẢI** có `https://` (không dùng `http://` trên production)
- ✅ **PHẢI** đúng domain của bạn
- ✅ Update nếu đổi domain
- ❌ **KHÔNG** có trailing slash (`/`)

### 3. Environment
- Development: `http://localhost:3000`
- Production: `https://your-domain.com`

---

## 🔍 Kiểm Tra

Sau khi setup, kiểm tra:
1. Vào website → Test đăng nhập
2. Xem logs trong Vercel nếu có lỗi
3. Kiểm tra cookies trong browser DevTools

---

## 💡 Quick Reference

```bash
# Tạo NEXTAUTH_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Kết quả ví dụ:
# K8xY2mN9pQ5rT7wV1zA4bC6dE8fG0hI2jK4lM6nO8pQ0rS2tU4vW6xY8zA
```

**Trong Vercel:**
```
NEXTAUTH_SECRET = K8xY2mN9pQ5rT7wV1zA4bC6dE8fG0hI2jK4lM6nO8pQ0rS2tU4vW6xY8zA
NEXTAUTH_URL = https://your-app-name.vercel.app
```

