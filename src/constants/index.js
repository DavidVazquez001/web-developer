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

export const HERO_CONTENT = `Soy un apasionado desarrollador web y cuento con habilidades sólidas en desarrollo con tecnologías basadas en JavaScript. Mi enfoque se centra en la creación de aplicaciones web modernas y eficientes, con un énfasis en la usabilidad y la experiencia del usuario.`;

export const ABOUT_TEXT = `Para la parte de front-end, manejo diversas herramientas como React.js, Next.js, Bootstrap y Tailwind. En el ámbito del back-end, trabajo con Node.js, específicamente utilizando el framework Express.js. Además, tengo experiencia en la gestión de bases de datos, incluyendo MongoDB, MySQL y PostgreSQL.

Cuento con habilidades bilingües que me permiten comunicarme efectivamente en inglés, facilitando la colaboración en entornos internacionales.

Estoy comprometido con el aprendizaje continuo y en busca de desafíos que me permitan seguir creciendo y destacando en el campo del desarrollo web.`;

export const EXPERIENCES = [
    {
        company: 'NTT Data México, S. de R.L. de C.V.',
        duration: '4 años y 8 meses',
        roles: [
            {
                period: '01/noviembre/2023 – 19/marzo/2024',
                role: 'Junior Software Engineer',
                description:
                    'Identificación de catálogos en los distritos sistemas (programas COBOL, arquitectura center, Abinitio, etc.) de Citi Banamex',
                client: 'Citi Banamex',
                technologies: ['COBOL'],
            },
            {
                period: '27/marzo/2023 – 27/octubre/2023 ',
                role: 'Junior Software Engineer',
                description:
                    'Desarrollador Java de Apis para el cliente Movistar. Me desempeñe como desarrollador de Java, encargándome tanto de la creación de nuevas funcionalidades como del mantenimiento de proyectos previamente desarrollados. Trabajo en estrecha colaboración con el cliente para comprender y atender sus requerimientos en constante cambio. Mi labor incluye la realización de pruebas exhaustivas y la documentación de cada etapa del proceso, garantizando la calidad y el correcto funcionamiento de las soluciones implementadas. Además, participó activamente en los despliegues, donde respondo de manera oportuna ante cualquier inconveniente que pueda surgir, asegurando entregas sin problemas y cumpliendo con los estándares de calidad en nuestros proyectos.',
                client: 'Telefónica Movistar',
                technologies: ['Java', 'MySQL'],
            },
            {
                period: '07/septiembre/2020 – 10/marzo/2023',
                role: 'Solutions Assistant',
                description:
                    'Implementación del sistema everilion con el cliente Shell. Garantizar la apertura de nuevas estaciones de gasolina y/o tiendas de autoservicio. Configuración de equipo volumétrico y conexión a los dispensarios (Bennett, Gilbarco, Wayne, TEAM y Petrotec). Gestión de la entrega de los equipos de cómputo a las estaciones. Actualización de software de control volumétrico. Soporte a incidencias relacionadas con hardware. Apoyo en procesos de resolución de incidencias para soporte en sitio, mesa de ayuda y gestión de control de cambios. Responsable de laboratorios de prueba. Control de inventario y planeación de equipos destinados a próximas aperturas.',
                client: 'Shell Mexico S.A. de C.V',
                technologies: ['Everilion'],
            },
            {
                period: '01/agosto/2019 – 07/julio/2020',
                role: 'Solutions Assistant',
                description:
                    'Análisis de códigos fuente para la preparación de la apertura del próximo proyecto en COBOL.',
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
                period: '23/octubre/2017 – 15/noviembre/2018',
                role: 'PMO Analyst',
                description:
                    'Seguimiento de la oficina de PMO y Control de cambios de la empresa. Seguimiento al procedimiento de control de cambios a aplicaciones e infraestructura. Creación de la política y procedimiento del control de cambios a aplicaciones e infraestructura. Seguimiento de la documentación de los incidentes P1, P2 y P3. Seguimiento del Scorecard de Control de cambio a aplicaciones (CCAs).',
                client: '',
                technologies: [],
            },
            {
                period: '12/diciembre/2016 – 20/octubre/2017',
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
        description: `He desarrollado una página web para una empresa emergente de aires acondicionados, utilizando tecnologías modernas que garantizan una experiencia de usuario excepcional. 
        
        La plataforma ha sido construida con Vite y React, aprovechando React Router para facilitar una navegación fluida entre secciones. Para el diseño del front end, he implementado Tailwind CSS, lo que me ha permitido crear una interfaz atractiva y responsiva que refleja la identidad de la marca. 
        
        Además, he optimizado el rendimiento del sitio mediante el uso de componentes de React que renderizan únicamente las partes necesarias, evitando la recarga completa de la página y mejorando la eficiencia en la navegación. La sección de "Productos" incluye un filtrado dinámico que permite a los usuarios encontrar lo que buscan de manera rápida, mientras que en la página de "Inicio" se presentan productos de forma aleatoria para enriquecer la experiencia del usuario.
        
        También he dedicado tiempo a la edición profesional de imágenes, asegurando una presentación visual de alta calidad. Todo esto se ha realizado con un enfoque en la experiencia del usuario (UX) y la interfaz de usuario (UI), garantizando una interacción intuitiva y agradable en cada visita.`,
        technologies: ['HTML5', 'CSS3', 'Tailwind', 'JavaScript', 'React'],
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
