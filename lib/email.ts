import nodemailer from 'nodemailer'

// Email configuration - update with your SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
} as any)

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.log('Email not configured, skipping send:', { to, subject })
      return { success: true, message: 'Email skipped (not configured)' }
    }

    const info = await transporter.sendMail({
      from: `"Phụ Kiện Ô Tô" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    })

    return { success: true, messageId: info.messageId }
  } catch (error: any) {
    console.error('Error sending email:', error)
    return { success: false, error: error.message }
  }
}

export async function sendOrderConfirmation(order: any) {
  const html = `
    <h2>Xác Nhận Đơn Hàng #${order.orderNumber}</h2>
    <p>Cảm ơn bạn đã đặt hàng tại Phụ Kiện Ô Tô!</p>
    <p><strong>Tổng tiền:</strong> ${order.total.toLocaleString('vi-VN')}₫</p>
    <p><strong>Trạng thái:</strong> ${order.status}</p>
  `
  
  return sendEmail(order.customerEmail, `Xác nhận đơn hàng #${order.orderNumber}`, html)
}

