# ✅ Deploy Checklist - Gnart Độ Nát Ô Tô

## Pre-Deployment

### Code
- [ ] Code đã được commit
- [ ] Code đã được push lên GitHub/GitLab
- [ ] Không có lỗi trong local build (`npm run build`)
- [ ] Tất cả dependencies đã được cài đặt

### Environment Variables
- [ ] `DATABASE_URL` - Database connection string (cloud database)
- [ ] `NEXTAUTH_SECRET` - Random secret key (32+ characters)
- [ ] `NEXTAUTH_URL` - Production URL
- [ ] `SMTP_*` - Email config (optional)
- [ ] `NODE_ENV=production`

### Database
- [ ] **KHÔNG dùng SQLite trên production**
- [ ] Đã setup cloud database (PlanetScale/Supabase/Railway)
- [ ] Database URL đã được test
- [ ] Migrations đã được chạy trên production database

### Testing
- [ ] Test build locally: `npm run build`
- [ ] Test production build: `npm start`
- [ ] Test API routes
- [ ] Test authentication (nếu có)

## Deployment

### Platform Setup
- [ ] Đã chọn platform (Vercel/Railway/Other)
- [ ] Đã kết nối GitHub repository
- [ ] Environment variables đã được thêm
- [ ] Build settings đã được config

### Post-Deployment
- [ ] Website accessible
- [ ] SSL/HTTPS working
- [ ] API routes working
- [ ] Database connection working
- [ ] Authentication working (nếu có)
- [ ] Email service working (nếu có)
- [ ] File upload working (nếu có)

### Domain (Optional)
- [ ] Custom domain đã được config
- [ ] DNS records đã được setup
- [ ] SSL certificate đã được tạo

### Monitoring
- [ ] Logs accessible
- [ ] Error tracking setup (nếu có)
- [ ] Analytics setup (nếu có)

## Production Checklist

### Security
- [ ] `.env` file không được commit
- [ ] Secrets không được expose
- [ ] API routes có authentication (nếu cần)
- [ ] CORS đã được config đúng

### Performance
- [ ] Images đã được optimize
- [ ] Static assets được cached
- [ ] Database queries được optimize
- [ ] CDN enabled (nếu có)

### Maintenance
- [ ] Backup database strategy
- [ ] Monitoring alerts setup
- [ ] Error notifications setup
- [ ] Update strategy documented

## Quick Commands

```bash
# Test build
npm run build
npm start

# Generate secret
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Database migration (production)
npx prisma migrate deploy

# Check environment
vercel env ls
```

## Support

Nếu gặp vấn đề:
1. Kiểm tra logs trong deployment platform
2. Kiểm tra environment variables
3. Test database connection
4. Review build logs

