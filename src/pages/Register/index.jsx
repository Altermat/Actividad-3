import React from "react";
import LayoutComponent from "../../components/Layout/LayoutComponent";
import FormRegister from "../../components/FormRegister";
import ImageButton from "../../components/ImageButton";
const Register = () => {
    return (
        <LayoutComponent
            leftColSize={{ xs: 24, sm: 12, md: 8, lg: 6 }}
            rightColSize={{ xs: 24, sm: 12, md: 16, lg: 18 }}
            rightContent={<FormRegister />}
            leftContent={<ImageButton />}
        />
    );
};
export default Register;