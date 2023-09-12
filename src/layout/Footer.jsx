import "./footer.css";
export default function Footer() {
  return (
    <>
        <footer>
        <ul className="footer-list">
            <p className="footer-title">Danh mục sản phẩm</p>
            <li className="footer-item">Khô gà Mixi</li>
            <li className="footer-item">Khô bò Mixi</li>
            <li className="footer-item">Bò khô viên</li>
            <li className="footer-item">Mực rim me</li>
        </ul>
        <ul className="footer-list">
            <p className="footer-title">Thông tin</p>
            <li className="footer-item">Về chúng tôi</li>
            <li className="footer-item">Chính sách bảo mật</li>
            <li className="footer-item">Điều khoản</li>
            <li className="footer-item">Site map</li>
        </ul>
        <ul className="footer-list">
            <p className="footer-title">Hỗ trợ</p>
            <li className="footer-item">
            Mọi thắc mắc vui lòng liên hệ Fanpage <br /> hoặc Instagram
            </li>
            <div className="footer-logos">
            <img srcSet="./src/assets/images/footer-logo1.png 2x" alt="" className="logoz" />
            <img srcSet="./src/assets/images/footer-logo2.png 2x" alt="" className="logoz" />
            </div>
        </ul>
        </footer>
        <div className="signature">@2022 Khoi7k. All Right Reserved</div>
    </>
  );
}
