import { PROJECTS } from '../constants';

const Projects = () => {
    const handleImageClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="border-b border-neutral-400 pb-4 pt-4">
            <h2 className="py-2 text-center text-4xl">Proyectos</h2>

            <div className="pt-6">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="mb-20 flex flex-wrap justify-center lg:space-x-4"
                    >
                        <div className="max-h-80 w-full max-w-80 justify-center lg:w-1/4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-6 cursor-pointer rounded"
                                onClick={() => handleImageClick(practice.url)}
                            />
                        </div>

                        <div className="mt-4 w-full max-w-xl lg:ml-0 lg:mt-0 lg:w-3/4">
                            <h4 className="mb-2 font-bold">{project.title}</h4>

                            <p className="mb-4 text-neutral-300">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={`${index}-${techIndex}`}
                                        className="mr-2 mt-4 rounded bg-indigo-800 px-2 py-1 text-sm font-medium text-pink-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
