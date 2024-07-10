import { SOFTSKILLS } from '../constants';

const SoftSkills = () => {
    return (
        <div className="border-b border-neutral-400 p-4">
            <h2 className="my-2 text-center text-4xl">Soft skills</h2>

            <div className="p-8">
                <div className="flex flex-wrap items-stretch gap-8">
                    {SOFTSKILLS.map((skill, index) => (
                        <div
                            className="flex-1 content-evenly rounded-xl border-4 border-neutral-300 p-4"
                            key={index}
                        >
                            <div className="mx-auto w-44 lg:w-64">
                                <img src={skill.image} alt="" />
                            </div>

                            <div className="px-2 text-justify text-2xl">
                                <h4>{skill.title}</h4>
                            </div>

                            <div className="p-2">
                                <p className="text-justify">{skill.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;
