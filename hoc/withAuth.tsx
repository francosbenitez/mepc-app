import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import AuthService from "@/services/AuthService";

const withAuth = (Component: any) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const [success, setSuccess] = useState();

    // const { isLoggedIn } = useSelector((state: any) => state.userReducer);

    useEffect(() => {
      const getUser = async () => {
        // const response = await fetch("http://localhost:4000/user/me");

        const response = (await AuthService.verifyToken()).data;

        console.log("response", response);

        // const userData = await response.json();
        if (!response.success) {
          router.push("/login");
        } else {
          setSuccess(response.success);
        }
      };
      getUser();
    }, []);

    console.log("success", success);

    return success ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
