import lapCamara from '../assets/lap-plus-camara.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
    return (
        <div className="border-b border-neutral-400 pb-4 pt-4">
            <h2 className="my-2 text-center text-4xl">Acerca de mí</h2>

            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img
                            className="rounded-xl"
                            src={lapCamara}
                            alt="lapCamara"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center text-justify lg:justify-start lg:p-6">
                        <p className="wy-2 whitespace-pre-line py-6">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
