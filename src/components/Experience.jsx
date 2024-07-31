import { EXPERIENCES } from '../constants';

const Experience = () => {
    return (
        <div className="border-b border-neutral-400 pt-12">
            <h2 className="pt-2 text-center text-4xl">
                Experiencia profesional
            </h2>

            <div className="pt-8">
                {EXPERIENCES.map((experience, index) => {
                    return (
                        <div
                            key={index}
                            className="mb-16 flex flex-wrap justify-start"
                        >
                            <div className="flex w-full flex-wrap md:gap-8">
                                <h3 className="text-2xl">
                                    {experience.company}
                                </h3>

                                <span className="text-2xl text-neutral-300">
                                    {experience.duration}
                                </span>
                            </div>

                            {experience.roles.map((role, roleIndex) => (
                                <div
                                    key={`${index}-${roleIndex}`}
                                    className="mt-8 flex w-full flex-wrap"
                                >
                                    <div className="w-full text-justify text-xl text-neutral-300 lg:w-1/3">
                                        {role.period}
                                    </div>

                                    <div className="w-full lg:w-2/3">
                                        <div className="text-justify text-xl font-bold text-neutral-100">
                                            {role.role}
                                        </div>
                                        <div className="text-justify text-neutral-300">
                                            {role.description}
                                        </div>
                                        {role.client && (
                                            <div className="text-justify text-neutral-300">
                                                Cliente: {role.client}
                                            </div>
                                        )}
                                        <div>
                                            {role.technologies &&
                                                role.technologies.map(
                                                    (tech, techIndex) => (
                                                        <span
                                                            key={`${index}-${roleIndex}-${techIndex}`}
                                                            className="mr-2 mt-4 rounded bg-indigo-800 px-2 py-1 text-sm font-medium text-pink-200"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ),
                                                )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
