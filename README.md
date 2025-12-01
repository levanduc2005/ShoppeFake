# Shoppe - Ứng dụng E-commerce

Đây là một ứng dụng e-commerce hiện đại được xây dựng với React, cho phép người dùng duyệt sản phẩm, quản lý giỏ hàng và thực hiện thanh toán.

## 🚀 Tính Năng Chính

- ✅ **Trang chủ** - Hiển thị quảng cáo và danh sách sản phẩm
- ✅ **Đăng ký & Đăng nhập** - Hệ thống xác thực người dùng
- ✅ **Duyệt sản phẩm** - Xem chi tiết các sản phẩm
- ✅ **Giỏ hàng** - Thêm/xóa sản phẩm, quản lý số lượng
- ✅ **Thanh toán** - Hoàn tất đơn hàng
- ✅ **Lưu trữ địa phương** - Dữ liệu giỏ hàng được lưu trong localStorage
- ✅ **Định dạng giá tiền** - Hỗ trợ định dạng tiền tệ Việt Nam

## 📋 Yêu Cầu

- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

## 🛠️ Cài Đặt

1. Clone hoặc tải về project:
```bash
cd project_shoppe
```

2. Cài đặt các dependency:
```bash
npm install
```

## 🏃 Chạy Ứng Dụng

### Chế độ phát triển

```bash
npm start
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

Trang sẽ tự động tải lại khi bạn thực hiện thay đổi.

### Build cho production

```bash
npm run build
```

Tạo một bản build được tối ưu hóa cho production trong thư mục `build`.

### Chạy kiểm thử

```bash
npm test
```

Khởi chạy test runner ở chế độ interactive watch.

## 📁 Cấu Trúc Project

```
src/
├── Components/          # Các component React
│   ├── Header/         # Header component
│   ├── Navbar/         # Navigation bar
│   ├── Footer/         # Footer
│   ├── Advertisement/  # Quảng cáo
│   ├── MenuItem/       # Menu item
│   ├── ListProduct/    # Danh sách sản phẩm
│   ├── ProductComponent/  # Chi tiết sản phẩm
│   ├── CartComponent/  # Giỏ hàng
│   ├── CheckoutComponent/ # Thanh toán
│   ├── LoginComponent/ # Đăng nhập
│   └── ...
├── pages/              # Các trang chính
│   ├── Home.js        # Trang chủ
│   ├── Product.js     # Trang sản phẩm
│   ├── Cart.js        # Trang giỏ hàng
│   ├── Checkout.js    # Trang thanh toán
│   ├── Login.js       # Trang đăng nhập
│   ├── Register.js    # Trang đăng ký
│   └── ...
├── constants/          # Hằng số và dữ liệu
│   ├── data.js        # Dữ liệu sản phẩm
│   └── images.js      # Đường dẫn hình ảnh
├── assets/            # Hình ảnh và tài nguyên
└── App.js            # Component chính
```

## 📦 Công Nghệ Sử Dụng

- **React** (v18.3.1) - UI library
- **React Router DOM** (v6.27.0) - Định tuyến trang
- **React Icons** (v5.3.0) - Thư viện icon
- **FontAwesome** - Icon set
- **React Transition Group** - Animation
- **localStorage** - Lưu trữ dữ liệu cục bộ

## 💡 Các Tính Năng Chính

### Quản Lý Giỏ Hàng
- Thêm sản phẩm vào giỏ hàng
- Xóa sản phẩm khỏi giỏ hàng
- Cập nhật số lượng
- Lưu giỏ hàng vào localStorage

### Định Dạng Giá
- Hỗ trợ định dạng tiền tệ Việt Nam (VND)
- Hiển thị giá với 3 chữ số thập phân

### Routing
- Trang chủ (Home)
- Chi tiết sản phẩm (Product)
- Giỏ hàng (Cart)
- Thanh toán (Checkout)
- Đăng nhập (Login)
- Đăng ký (Register)

## 🎨 Styling

Project sử dụng CSS custom cho các component, các file CSS được đặt cùng với component:
- `Component.css` - Styles cho component tương ứng
- `App.css` - Global styles
- `index.css` - Base styles

## 📝 Ghi Chú

- Dữ liệu giỏ hàng được lưu trong `localStorage` với key `"cart"`
- Ứng dụng hỗ trợ định dạng tiền tệ Việt Nam
- Sử dụng React Router v6 cho routing

