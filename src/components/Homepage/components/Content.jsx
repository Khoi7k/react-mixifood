import './content.css'
export default function Content() {
  return (
    <>
      <section className="news">
        <h2 className="font-bold text-4xl">News<i className="fa-solid fa-angle-right text-2xl font-bold mb-3"></i></h2>    
        <div className="news-list">
          <div className="news-item news-item1">
            <div className="news1-content">
              <p className="news1-desc">Siêu ưu đãi &amp; Hơn thế nữa</p>
              <h2 className="news1-title">COMBO MIXIFOOD</h2>
              <button className="news1-btn btn">Đặt ngay</button>
            </div>
            <div className="news1-img">
              <div className="news1-triangle" />
              <img srcSet="./src/assets/images/news1.png 2x" alt="" />
            </div>
          </div>
          <div className="news-item news-item2">
            <img srcSet="./src/assets/images/news2.png 2x" alt="" />
            <p className="news2-title">MixiFood</p>
          </div>
          <div className="news-item news-item3">
            <img alt="" srcSet="./src/assets/images/news3.png 2x" />
            <p className="news3-title">Review</p>
          </div>
          <div className="news-item news-item4">
            <div className="news4-content">
              <h2 className="news4-title  ">Bò khô viên</h2>
              <p className="news4-desc">Khám phá vị ngon mới lạ</p>
            </div>
            <div className="news4-img">
              <div className="news4-triangle" />
              <img srcSet="./src/assets/images/news4.png 2x" alt="" />
            </div>
          </div>
        </div>
      </section>   
      <section className="order">
        <div className="order-content">
          <h1 className="order-heading">Đặt hàng ngay</h1>
          <p className="order-desc">Miễn phí giao hàng cho đơn hàng đầu tiên</p>
          <button className="order-btn">Đặt hàng ngay</button>
        </div>
      </section>
      <section className="feedback mt-6">
        <div className="feedback-left">
          <p className="feedback-desc left-desc">
            Gửi phản hồi và đánh giá của bạn cho MixiFood
          </p>
          <button className="feedback-btn btn">Chúng tôi lắng nghe bạn</button>
        </div>
        <div className="feedback-right">
          <p className="feedback-desc">
            Nhập email để nhận thông tin khuyến mãi
          </p>
          <div className="feedback-action">
            <input type="text" className="feedback-input" />
            <button className="btn right-btn">Gửi</button>
          </div>
        </div>
      </section>
      <div className="line" />
    </>
  );
}
