import { useSelector } from "react-redux";
import { specialSelector } from "../../../store/selector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSpecialProduct } from "../../../store/specialSlice";

export default function SpecialProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpecialProduct());
  }, []);
  const listSpecial = useSelector(specialSelector);
  return (
    <div className="w-4/5 mx-auto">
      <h2 className="font-bold text-4xl">Special Product <i className="fa-solid fa-angle-right text-2xl font-bold"></i></h2>
      {/* Điều kiện listSpecial.status = loading => xử lý loading page */}
      {/* Điều kiện listSpecial.status = fulfilled => xuất sản phẩm */}
      <div className="flex flex-wrap gap-8 w-full justify-center mx-auto my-7">
        {listSpecial.status === "idle" &&
          listSpecial.data.map((product) => (
            <div
              className="card w-1/5 h-80 p-3 bg-milkWhite relative overflow-visible shadow-lg"
              key={product.id}
            >
              <div className="card-img w-full h-3/6 rounded-md transition hover:-translate-y-1/4 hover:shadow-md">
                <img src={`./src/assets/images/${product.img}`} alt="mixifood"/>
              </div>
              <div className="card-info p-2">
                <p className="text-title font-bold text-xl leading-tight">
                  {product.name}
                </p>
                <p className="text-body tex-lg pb-2">
                  {product.feature}
                </p>
              </div>
              <div className="card-footer w-full flex justify-between align-center pt-2 border-t-1 border-gray-400">
                <span className="text-title ml-2">{(product.price).toLocaleString()} đ</span>
                <div className="card-button border-1 border-black flex p-2 cursor-pointer rounded-full transition hover:border-skin hover: bg-skin">
                  <svg className="svg-icon w-5 h-5" viewBox="0 0 20 20">
                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z" />
                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z" />
                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
