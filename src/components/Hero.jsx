import { HERO_CONTENT } from '../constants';
import dave5 from '../assets/Dave_5.jpg';

const Hero = () => {
    return (
        <div className="lg:mb-35 border-b border-neutral-400 pb-4">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-center text-6xl font-thin tracking-tight lg:mt-16 lg:text-left lg:text-8xl">
                            José David Martínez Vázquez
                        </h1>

                        <span className="bg-gradient-to-r from-yellow-400 via-slate-500 to-rose-600 bg-clip-text text-center text-4xl tracking-tight text-transparent lg:text-left">
                            Full Stack Web Developer
                        </span>

                        <p className="my-2 max-w-xl py-6 text-justify font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>

                <div className="max-h-[592px] w-full overflow-hidden lg:w-1/2 lg:p-8">
                    <div className="flex h-full w-full justify-center">
                        <img
                            className="rounded-xl object-cover"
                            src={dave5}
                            alt="dave5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
