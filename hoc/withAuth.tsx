import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import AuthService from "@/services/AuthService";

const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [data, setData] = useState();

    // const { isUserLoggedIn } = useSelector((state: any) => state.userReducer);

    useEffect(() => {
      const getUser = async () => {
        // const response = await fetch("http://localhost:4000/user/me");

        const response = (await AuthService.verifyToken()).data;

        console.log("response", response);

        // const userData = await response.json();
        if (!response.success) {
          router.push("/login");
        } else {
          setData(response);
        }
      };
      getUser();
    }, []);

    return !!data ? <Component data={data} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
