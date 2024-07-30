import { PROJECTS } from '../constants';

const Projects = () => {
    const handleImageClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="border-b border-neutral-400 py-12">
            <div className="pt-8">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap justify-start">
                        <div className="flex w-full justify-center p-4 lg:w-1/3">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-fit w-full cursor-pointer rounded"
                                onClick={() => handleImageClick(project.url)}
                            />
                        </div>

                        <div className="mt-4 w-full lg:w-2/3">
                            <h4 className="text-justify text-xl font-bold">
                                {project.title}
                            </h4>

                            <p
                                className="text-justify text-neutral-300"
                                style={{ whiteSpace: 'pre-line' }}
                            >
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
