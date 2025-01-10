import arborInfo from "../assets/projects/arborInfo.png";
import obstacMap from "../assets/projects/obstacMap.png";

export const HERO_CONTENT = `A motivated graduate from Telkom University with achievements in publishing a research paper and obtaining HAKI (Intellectual Property Rights), showcasing a commitment to innovation and professional growth. Passionate about advancing IT development by utilizing digital technology to streamline processes, improve efficiency, and create outstanding user experiences. Possesses strong leadership abilities, excellent time management, and exceptional communication skills, ensuring effective collaboration and successful project execution in fast-paced team settings.`;

export const ABOUT_TEXT = `I am a passionate Software Developer with a strong foundation in creating efficient and scalable applications. My expertise spans multiple technologies, including Flutter for mobile app development, Firebase for backend and real-time database solutions, Linux for system operations and development, and Python for scripting, automation, and data processing.

I thrive in dynamic and collaborative environments, constantly learning and implementing modern technologies to solve complex challenges. With a keen eye for detail and a commitment to delivering high-quality solutions, I enjoy crafting user-centric applications that seamlessly integrate with robust back-end systems.

Whether it's building cross-platform mobile apps, designing cloud-powered solutions, or writing elegant Python scripts, I am driven by a passion for innovation and the transformative potential of software development.`;

export const EXPERIENCES = [
  {
    year: "August 2024",
    role: "Internship as Data Entry Assitant",
    company: "Telkom Indonesia",
    description: `Compiled, validated, and precisely recorded project data from 2021 to 2023, aligning efforts with the objectives of Innovillage, SDG-2, and SDG-4. Ensured data accuracy by maintaining well-organized records for seamless access and analysis. Delivered comprehensive reports highlighting progress, challenges, and achievements within the frameworks of SDG-2 and SDG-4.`,
    technologies: ["Google Sheets", "Data Analysis"],    
  },
  {
    year: "June 2023 - June 2024",
    role: "Head of Practicum Assistant",
    company: "Multimedia Application, Big Data, & Cybersecurity Laboratory",
    description: `Delivered instructional materials to support telecommunication engineering students, facilitating a deeper understanding of cryptography and security protocols. Guided students to enhance their comprehension of key concepts, evaluated learning outcomes, and provided constructive feedback. Configured and optimized software tools required for practical sessions to ensure smooth operation.`,
    technologies: ["Linux", "Cryptography", "Networking", "CrypTool"],
    
  },
  {
    year: "July 2023 - August 2023",
    role: "Internship in Service Operational Division",
    company: "Telkom Indonesia",
    description: `Created and maintained dynamic web applications utilizing JavaScript, React.js, and Node.js. Designed and developed RESTful APIs to ensure efficient data exchange. Worked closely with interdisciplinary teams to deliver robust software solutions on time.`,
    technologies: ["Python", "Regular Expression", "Splunk", "Microsoft Excel"],    
  },
  {
    year: "June 2021 - June 2023",
    role: "Head of Assistant",
    company: "Basic Physics Laboratory",
    description: `Acted as the main liaison for the responsible lecturer, providing timely support as needed. Assisted laboratory staff with overall administration, planning, and preparation to ensure the lab was fully operational for the semester. Supervised a team of over 100 assistants, including both Junior and Senior Assistants.`,
    technologies: ["TinkerCad", "Microsoft365", "Desmos", "Google Sheets"],
    
  },
];

export const PROJECTS = [
  {
    title: "Potholes Mapping System With Internet of Things Development",
    image: obstacMap,
    description:
      "The Potholes Mapping System uses IoT devices to detect and map potholes in real time. The data is sent to a mobile app built with Flutter, which visualizes pothole locations on an interactive map, helping authorities prioritize repairs efficiently.",
    technologies: ["Flutter", "Dart", "Firebase", "Python", "ArduinoIDE", "Google Maps"],
  },
  {
    title: "ArborInfo: A Plant Management Application",
    image: arborInfo,
    description:
      "ArborInfo is a mobile app for managing plant data with CRUD operations. Users can add, view, update, and delete plant information, including pictures, making it a useful tool for tracking plant growth and care routines.",
    technologies: ["Flutter", "Dart", "Firebase", "Image Picker"],
  },
];

export const CONTACT = {
  address: "Rajamantri Kulon, Bandung, West Java",
  phoneNo: "+62 821 1556 1580",
  email: "andikanauafannd@gmail.com",
};
