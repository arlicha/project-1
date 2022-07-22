import { useLottie } from "lottie-react";
import groovyWalkAnimation from '../../Pagess/Banner/lf30_editor_4zqymt7w.json'

const BannerAnnimashion = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
         autoplay: true, 
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};

export default BannerAnnimashion;

