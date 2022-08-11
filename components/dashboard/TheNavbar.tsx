import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/user/userSlice";
import { useRouter } from "next/router";
// import AuthService from "../../services/AuthService";
import { useState, useEffect } from "react";

const TheNavbar = (props: any) => {
  const [mounted, setMounted] = useState(false);
  // const { userInfo, userToken } = useSelector(
  //   (state: any) => state.userReducer
  // );
  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    // await AuthService.logout();
    dispatch(logout());
    router.push("/");
  };

  // const check =
  //   userToken != null ? userToken : userInfo != null ? userInfo.token : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div className="header-section" id="sticky">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="flex flex-nowrap w-full">
              <div className="nav-title">
                <Link href="/dashboard">
                  <a className="z-20 text-primary">MEPC Dashboard</a>
                </Link>
              </div>
              <div onClick={() => props.onToggleClick()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#313131"
                >
                  <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              ></div>
              {/* {check != null ? ( */}
              <button
                className="border border-primary p-2 rounded ml-auto"
                onClick={() => handleLogout()}
              >
                Salir
              </button>
              {/* ) : (
                <>Mi Perfil</>
              )} */}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default TheNavbar;
