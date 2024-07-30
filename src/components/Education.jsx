import React from 'react';

const Education = () => {
    return (
        <div className="border-b border-neutral-400 py-12">
            <h2 className="my-2 text-center text-4xl">Educación</h2>

            <div className="flex flex-wrap space-y-12 pt-8 lg:flex-nowrap lg:space-x-8 lg:space-y-0">
                <div className="w-full space-y-2 lg:w-1/3 lg:space-y-4">
                    <h3 className="text-xl font-bold">
                        Lic. En Ciencias de la Informática (titulado)
                    </h3>
                    <p>
                        Instituto Politécnico Nacional (IPN) - Unidad
                        Profesional Interdisciplinaria de Ingeniería y Ciencias
                        Sociales y Administrativas (UPIICSA)
                    </p>
                    <p>01/ago/2012 - 30/jun/2017</p>
                </div>

                <div className="w-full space-y-2 lg:w-1/3 lg:space-y-4">
                    <h3 className="text-xl font-bold">
                        Inglés - CEFR, nivel B2
                    </h3>
                    <p>
                        Competente en inglés para contextos profesionales y
                        sociales, con la habilidad de expresar ideas de manera
                        clara y coherente
                    </p>
                    <p>Celex UPIICSA - IPN</p>
                </div>

                <div className="w-full space-y-2 lg:w-1/3 lg:space-y-4">
                    <h3 className="text-xl font-bold">
                        Full Stack JavaScript Web developer
                    </h3>
                    <p>Kodemia - Bootcamp JavaScript Full Stack</p>
                    <p>02/feb/2024 - 02/jun/2024</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
