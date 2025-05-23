import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'This is a brief description of Project One.',
            link: 'https://github.com/yourusername/project-one'
        },
        {
            title: 'Project Two',
            description: 'This is a brief description of Project Two.',
            link: 'https://github.com/yourusername/project-two'
        },
        {
            title: 'Project Three',
            description: 'This is a brief description of Project Three.',
            link: 'https://github.com/yourusername/project-three'
        }
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;