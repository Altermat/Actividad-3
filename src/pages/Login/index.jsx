import React from "react";
import LayoutComponent from "../../components/Layout/LayoutComponent";
import FormLogin from "../../components/FormLogin";
import ImageButton from "../../components/ImageButton";
const Login = () => {
    return (
        <LayoutComponent
            leftColSize={{ xs: 24, sm: 12, md: 8, lg: 6 }}
            rightColSize={{ xs: 24, sm: 12, md: 16, lg: 18 }}
            rightContent={<FormLogin />}
            leftContent={<ImageButton />}
        />
    );
};
export default Login;