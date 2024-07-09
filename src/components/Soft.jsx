import { SOFTSKILLS } from '../constants';

const Soft = () => {
    return (
        <div className="flex flex-wrap items-stretch justify-center gap-8">
            {SOFTSKILLS.map((skill, index) => (
                <div
                    className="flex-1 content-evenly justify-center rounded-xl border-4 border-neutral-300 p-4 text-center"
                    key={index}
                >
                    <div className="mx-auto w-44 lg:w-64">
                        <img src={skill.image} alt="" />
                    </div>

                    <div className="px-2 text-2xl">
                        <h4>{skill.title}</h4>
                    </div>

                    <div className="p-2">
                        <p>{skill.detail}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Soft;
