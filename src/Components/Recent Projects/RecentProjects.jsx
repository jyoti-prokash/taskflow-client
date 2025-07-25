import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const RecentProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json') // Use a relative path starting from the public folder
            .then(res => res.json())
            .then(data => setProjects(data.projects))
    }, []);   
    console.log(projects);
     return (
        <div>
            <h1 className='text-3xl font-bold text-orange-400 text-center uppercase'>Recent Projects</h1>
            <div>
                <p className='text-center text-gray-500'>Here are some of the projects that have been recently edited.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                    {
                        projects.map(project=> <ProjectCard key={project.id} project={project}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;