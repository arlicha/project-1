import React from 'react';
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../assets/login/104292-login (1).json";


const LoginAnimation = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};


export default LoginAnimation;