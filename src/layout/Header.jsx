import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Header() {
  // Lấy chuỗi JSON từ sessionStorage
  const userJSON = sessionStorage.getItem("user");

  // Chuyển chuỗi JSON thành đối tượng
  const userData = JSON.parse(userJSON);

  const handleSignOut = () => {
    sessionStorage.clear();
    window.location.href = '/'
  }

  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          className={`flex items-center text-lg ${
            location.pathname === "/" ? "text-newred-600" : ""
          }`}
          to="/"
        >
          Trang chủ
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          className={`flex items-center text-lg ${
            location.pathname === "/products" ? "text-newred-600" : ""
          }`}
          to="/products"
        >
          Thực đơn
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          className={`flex items-center text-lg ${
            location.pathname === "/news" ? "text-newred-600" : ""
          }`}
          to="/news"
        >
          Tin tức
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          className={`flex items-center text-lg ${
            location.pathname === "/contact" ? "text-newred-600" : ""
          }`}
          to="/contact"
        >
          Liên hê
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center text-blue-gray-900">
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
              <img
                src="/src/assets/images/logo.png"
                alt="logo"
                className="w-1/3"
              />
            </Typography>
          </Link>
          <div className="flex items-center justify-between w-full gap-4">
            <div className="hidden lg:block">{navList}</div>
            {userData ? (
              <Button
                size="sm"
                className="hidden lg:inline-block bg-newred-600 hover:shadow-lg"
                onClick={handleSignOut}
              >
                <span>Đăng xuất</span>
              </Button>
            ) : (
              <Link to="/register">
                <Button
                  size="sm"
                  className="hidden lg:inline-block bg-newred-600 hover:shadow-lg"
                >
                  <span>Đăng nhập</span>
                </Button>
              </Link>
            )}

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button
            size="sm"
            fullWidth
            className="mb-2 bg-newred-600 hover:shadow-lg"
          >
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}
