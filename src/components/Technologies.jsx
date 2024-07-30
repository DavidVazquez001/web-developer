import { RiHtml5Fill } from 'react-icons/ri';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiBootstrapFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { RiReactjsFill } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { RiNodejsFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

import Icon from './Icon';

const Technologies = () => {
    return (
        <div className="border-b border-neutral-400 pb-12 pt-12">
            <h2 className="my-2 text-center text-4xl">Tecnologías</h2>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
                <Icon
                    iconComponent={<RiHtml5Fill style={{ color: '#E34F26' }} />}
                    description="HTML5"
                />
                <Icon
                    iconComponent={<IoLogoCss3 style={{ color: '#1572B6' }} />}
                    description="CSS3"
                />
                <Icon
                    iconComponent={
                        <IoLogoJavascript style={{ color: '#F7DF1E' }} />
                    }
                    description="JavaScript"
                />

                <Icon
                    iconComponent={
                        <RiBootstrapFill style={{ color: '#7952B3' }} />
                    }
                    description="Bootstrap"
                />
                <Icon
                    iconComponent={
                        <RiTailwindCssFill style={{ color: '#06B6D4' }} />
                    }
                    description="Tailwind"
                />
                <Icon
                    iconComponent={
                        <RiReactjsFill style={{ color: '#61DAFB' }} />
                    }
                    description="React.js"
                />

                {/* <Icon
                    iconComponent={<SiNextdotjs style={{ color: '#000000' }} />}
                    description="Next.js"
                /> */}
                <Icon
                    iconComponent={
                        <RiNodejsFill style={{ color: '#339933' }} />
                    }
                    description="Node.js"
                />
                <Icon
                    iconComponent={<SiExpress style={{ color: '#000000' }} />}
                    description="Express.js"
                />

                <Icon
                    iconComponent={<SiMongodb style={{ color: '#47A248' }} />}
                    description="MongoDB"
                />
                <Icon
                    iconComponent={<SiMysql style={{ color: '#F29111' }} />}
                    description="MySQL"
                />
                <Icon
                    iconComponent={
                        <BiLogoPostgresql style={{ color: '#1B485B' }} />
                    }
                    description="Postgres SQL"
                />
            </div>
        </div>
    );
};

export default Technologies;
