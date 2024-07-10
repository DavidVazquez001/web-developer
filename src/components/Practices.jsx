import { PRACTICES } from '../constants';

const Practices = () => {
    const handleImageClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="border-b border-neutral-400 pb-4 pt-4">
            <h2 className="pt-2 text-center text-4xl">Practicas</h2>

            <div className="pt-8">
                {PRACTICES.map((practice, index) => (
                    <div
                        key={index}
                        className="mb-16 flex flex-wrap justify-start"
                    >
                        <div className="flex w-full justify-center p-4 lg:w-1/3">
                            <img
                                src={practice.image}
                                alt={practice.title}
                                className="mb-6 max-h-96 cursor-pointer rounded"
                                onClick={() => handleImageClick(practice.url)}
                            />
                        </div>

                        <div className="mt-4 w-full lg:w-2/3">
                            <h4 className="mb-2 text-justify font-bold">
                                {practice.title}
                            </h4>

                            <p className="mb-4 text-justify text-neutral-300">
                                {practice.description}
                            </p>

                            <div className="flex flex-wrap">
                                {practice.technologies.map(
                                    (tech, techIndex) => (
                                        <span
                                            key={`${index}-${techIndex}`}
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
        </div>
    );
};

export default Practices;
