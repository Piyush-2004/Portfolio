import about from "../../commands/about";
import projects from "../../commands/projects";
import contact from "../../commands/contact";

const CommandHandler = (cmd: string): string => {
  const command = cmd.toLowerCase().trim();
  
  switch (command) {
    case "welcome":
      return `Hi, I'm Piyush Roy, a Software & Full Stack Developer.

Welcome to my interactive 'React powered' portfolio terminal!
Type 'help' to see available commands.`;

    case "help":
      return `Available commands:
about        - Learn about me
projects     - View my projects  
skills       - See my technical skills
experience   - My work experience
contact      - How to reach me
education    - My educational background
certifications - View my certifications
leadership   - Leadership and community involvement
clear        - Clear the terminal

Type any command to continue...`;

    case "about":
      return about() || "";

    case "projects":
      return projects() || "";

    case "contact":
      return contact() || "";

    case "skills":
      return `Technical Skills:

Frontend Development:
• React.js, Next.js
• JavaScript/TypeScript
• HTML5, CSS3, SASS
• Responsive Design

Backend Development:  
• Node.js, Express.js
• Socket.IO for real-time apps
• RESTful API development
• Authentication & Authorization

Databases:
• MySQL - Relational database design
• MongoDB - NoSQL document store
• Database optimization

Tools & Technologies:
• Git version control
• npm package management  
• Webpack, Vite
• VS Code, Docker`;

    case "experience":
      return `Professional Experience:

🔸 Currently preparing for roles at:
  • Amazon, Netflix, Google
  • Other top-tier tech companies
  
🔸 Full-Stack Developer (Projects):
  • Built scalable web applications
  • Implemented real-time features
  • Optimized application performance
  
🔸 Technical Skills Development:
  • Advanced React.js patterns
  • System design principles
  • Data structures & algorithms`;

    case "education":
      return `Education:

🎓 Bachelor of Technology (BTech)
   Computer Science & Engineering
   Final Year Student
   
📚 Relevant Coursework:
   • Data Structures & Algorithms
   • Database Management Systems
   • Software Engineering
   • Computer Networks
   • Operating Systems`;

    case "certifications":
      return `Certifications & Learning:

🏆 Currently pursuing:
   • AWS Cloud Practitioner
   • React Advanced Patterns
   • System Design Fundamentals
   
📖 Continuous Learning:
   • LeetCode problem solving
   • Open source contributions
   • Tech blogs and documentation`;

    case "leadership":
      return `Leadership & Community:

🌟 Leadership Experience:
   • Led development teams on projects
   • Mentored junior developers
   • Code review and best practices
   
🤝 Community Involvement:
   • Open source contributor
   • Tech meetup participant
   • Knowledge sharing through blogs`;

    case "":
      return "";

    default:
      return `Command not found: ${cmd}

Available commands: help, about, projects, skills, experience, contact, education, certifications, leadership, clear`;
  }
};

export default CommandHandler;
