import todoList from '../assets/practices/todo-list.jpg';
import flexibilidad from '../assets/softSkills/flexibility.svg';
import comunicacion from '../assets/softSkills/comunicacion.svg';
import teamwork from '../assets/softSkills/teamwork.svg';
import learn from '../assets/softSkills/learn.svg';
import resiliencia from '../assets/softSkills/resiliencia.png';
import proactividad from '../assets/softSkills/proactividad.svg';
import empatia from '../assets/softSkills/empatia.svg';
import problems from '../assets/softSkills/problems.svg';

// Projects
import jf_aire_y_energia from '../assets/projects/jfaireyenergia_products.png';

export const HERO_CONTENT = `Soy un desarrollador de software apasionado por la programación y el desarrollo de soluciones tecnológicas innovadoras. Me entusiasma crear aplicaciones que no solo sean funcionales, sino que también ofrezcan una experiencia de usuario excepcional. Mi enfoque abarca tanto el desarrollo frontend como el backend, lo que me permite tener una visión integral de los proyectos en los que trabajo.`;

export const ABOUT_TEXT = `Disfruto enfrentar desafíos técnicos y aprender nuevas tecnologías que me ayuden a mejorar mis habilidades. Tengo experiencia en la creación de interfaces atractivas y responsivas, así como en la implementación de la lógica del servidor y la gestión de bases de datos. Estoy comprometido con el trabajo en equipo y la colaboración, y busco constantemente oportunidades para contribuir a proyectos dinámicos que me permitan crecer profesionalmente.`;

export const EXPERIENCES = [
    {
        company: 'NTT Data México, S. de R.L. de C.V.',
        duration: '4 años y 8 meses',
        roles: [
            {
                period: '01/noviembre/2023 - 19/marzo/2024',
                role: 'Junior Software Engineer',
                description:
                    'Realicé un análisis exhaustivo de los sistemas COBOL existentes para identificar y catalogar diferentes tipos de catálogos utilizados, como tablas de referencia, parámetros de configuración y archivos maestros. Trabajé en estrecha colaboración con analistas funcionales y expertos en el dominio para comprender el propósito y la estructura de cada catálogo identificado. Desarrollé un plan para normalizar y homologar los catálogos, estableciendo estándares comunes para la nomenclatura, estructura de datos y reglas de validación.',
                client: 'Citi Banamex',
                technologies: ['COBOL'],
            },
            {
                period: '27/marzo/2023 - 27/octubre/2023 ',
                role: 'Junior Software Engineer',
                description:
                    'Desarrollador de APIs en Java para el cliente Movistar. Me desempeñé como desarrollador, encargándome de la creación de nuevas funcionalidades y del mantenimiento de proyectos previamente desarrollados. Trabajé en estrecha colaboración con el cliente para comprender y atender sus requerimientos en constante cambio. Mi labor incluyó la realización de pruebas exhaustivas y la documentación de cada etapa del proceso, garantizando la calidad y el correcto funcionamiento de las soluciones implementadas. Participé activamente en los despliegues, respondiendo de manera oportuna ante cualquier inconveniente, asegurando entregas sin problemas y cumpliendo con los estándares de calidad en nuestros proyectos.',
                client: 'Telefónica Movistar',
                technologies: [
                    'Java',
                    'MySQL',
                    'JavaScript',
                    'React',
                    'Node.js',
                    'Express.js',
                ],
            },
            {
                period: '07/septiembre/2020 - 10/marzo/2023',
                role: 'Solutions Assistant',
                description:
                    'Implementación del sistema everilion con el cliente Shell. Garantizar la apertura de nuevas estaciones de gasolina y/o tiendas de autoservicio. Configuración de equipo volumétrico y conexión a los dispensarios (Bennett, Gilbarco, Wayne, TEAM y Petrotec). Gestión de la entrega de los equipos de cómputo a las estaciones. Actualización de software de control volumétrico. Soporte a incidencias relacionadas con hardware. Apoyo en procesos de resolución de incidencias para soporte en sitio, mesa de ayuda y gestión de control de cambios. Responsable de laboratorios de prueba. Control de inventario y planeación de equipos destinados a próximas aperturas.',
                client: 'Shell Mexico S.A. de C.V',
                technologies: ['Everilion'],
            },
            {
                period: '01/agosto/2019 - 07/julio/2020',
                role: 'Solutions Assistant',
                description:
                    'Realicé un análisis exhaustivo del código fuente existente en COBOL para identificar áreas de mejora y oportunidades de optimización. Identifiqué secciones de código redundantes, ineficientes o difíciles de mantener, y propuse soluciones para mejorar la calidad y rendimiento del código. Documenté detalladamente los hallazgos del análisis de código, incluyendo descripciones de problemas, impacto en el sistema y posibles soluciones.',
                client: 'Citi Banamex',
                technologies: ['COBOL'],
            },
        ],
    },

    {
        company: 'Sodexo Motivation Solutions México, S.A. de C.V.',
        duration: '1 año y 11 meses',
        roles: [
            {
                period: '23/octubre/2017 - 15/noviembre/2018',
                role: 'PMO Analyst',
                description:
                    'Seguimiento de la oficina de PMO y Control de cambios de la empresa. Seguimiento al procedimiento de control de cambios a aplicaciones e infraestructura. Actualización del procedimiento de control de cambios mejorando el proceso y haciéndolo más eficiente para la cultura empresarial. Seguimiento de la documentación de los incidentes P1, P2 y P3. Seguimiento del Scorecard de Control de cambio a aplicaciones (CCAs).',
                client: '',
                technologies: [],
            },
            {
                period: '12/diciembre/2016 - 20/octubre/2017',
                role: 'Trainee',
                description:
                    'Creación de la política y procedimiento del control de cambios a aplicaciones e infraestructura. Seguimiento al procedimiento de control de cambios a aplicaciones e infraestructura. Seguimiento de la documentación de los incidentes P1, P2 y P3. Control del Scorecard de cambio a aplicaciones (CCAs).',
                client: '',
                technologies: [],
            },
        ],
    },
];

export const PROJECTS = [
    {
        title: 'JF Aire y Energía',
        image: jf_aire_y_energia,
        description: `Desarrollé una página web para una empresa emergente de aires acondicionados, utilizando tecnologías modernas para brindar una experiencia de usuario excepcional.
        
        La plataforma se ha construido con Next.js como base de desarrollo, MongoDB para la gestión de información de productos, Cloudinary para almacenar imágenes en la nube y EmailJS para el envío de correos electrónicos.
        
        Para el diseño del frontend, implementé Tailwind CSS, creando una interfaz atractiva y responsiva que refleja la identidad de la marca, complementada con librerías como Framer Motion, Headless UI y Heroicons.
        
        Optimizé el rendimiento mediante componentes de React que renderizan únicamente las secciones necesarias, evitando recargas completas de la página y mejorando la eficiencia en la navegación.
        
        Además, realicé una edición cuidadosa de las imágenes para asegurar una presentación visual de alta calidad. Todo se ha desarrollado con un enfoque centrado en la experiencia del usuario (UX) y la interfaz de usuario (UI), garantizando una interacción intuitiva y atractiva en cada visita.`,
        publishDate: '30-julio-2024',
        technologies: [
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'JavaScript',
            'Next.js',
            'React',
            'MongoDB',
            'Cloudinary',
            'EmailJS',
            'Framer Motion',
            'Headless UI',
            'Heroicons',
        ],
        url: 'https://jfaireyenergia.com/',
    },
];

export const PRACTICES = [
    {
        title: 'To Do List',
        image: todoList,
        description:
            'Una plataforma para crear una lista de tareas en donde cada tarea puede ser marcada como completada. La plataforma contiene filtros para poder visualizar únicamente las tareas que han sido completadas, las que aún no son completadas o mantener todas activas. También cuenta con un drap and drop para poder cambiar las tareas de posición. Finalmente cuenta con un dark and light mode para mayor comodidad el usuario.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind'],
        url: 'https://vite-react-tailwind-todo-frontend.netlify.app/',
    },
];

export const SOFTSKILLS = [
    {
        title: 'Flexibilidad',
        image: flexibilidad,
        detail: 'Capacidad para adaptarme a nuevas situaciones y desafíos, permitiéndome ajustar mis enfoques según sea necesario para lograr resultados eficientes.',
    },
    {
        title: 'Comunicación efectiva',
        image: comunicacion,
        detail: 'Habilidad para expresar ideas de manera clara y comprensible, facilitando una comunicación fluida y efectiva con colegas y clientes.',
    },
    {
        title: 'Trabajo en equipo',
        image: teamwork,
        detail: 'Capacidad para colaborar armoniosamente con otros, aprovechando las fortalezas individuales para alcanzar objetivos compartidos.',
    },
    {
        title: 'Autoaprendizaje',
        image: learn,
        detail: 'Actitud proactiva hacia el aprendizaje continuo, buscando constantemente oportunidades para desarrollar nuevas habilidades y conocimientos.',
    },
    {
        title: 'Resiliencia',
        image: resiliencia,
        detail: 'Fortaleza para enfrentar contratiempos y desafíos con determinación, adaptándome y aprendiendo de las experiencias difíciles para seguir avanzando.',
    },
    {
        title: 'Proactividad',
        image: proactividad,
        detail: 'Iniciativa para tomar medidas anticipadas y buscar activamente oportunidades de mejora, contribuyendo al éxito de los proyectos y equipos.',
    },
    {
        title: 'Empatía',
        image: empatia,
        detail: 'Capacidad para comprender y relacionarme con las emociones y perspectivas de los demás, promoviendo relaciones colaborativas y armoniosas.',
    },
    {
        title: 'Solución de problemas',
        image: problems,
        detail: 'Habilidad para identificar y abordar eficazmente los desafíos, buscando soluciones creativas y pragmáticas para superar obstáculos.',
    },
];

export const CONTACT = {
    address: 'CDMX, Benito Juarez',
    phoneNo: '55241094471',
    email: 'david.martinez.vqz@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jose-david-martinez-vazquez/',
};
