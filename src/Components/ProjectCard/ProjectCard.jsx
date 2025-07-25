import React from 'react';

const ProjectCard = ({project}) => {
    const { name, description, deadline, status } = project;
     // Dynamic badge color based on status
     const statusColor = {
        'completed': 'bg-green-500',
        'in-progress': 'bg-yellow-500',
        'not-started': 'bg-gray-400',
        'overdue': 'bg-red-500'
    }[status] || 'bg-gray-500';

    return (
        <div>
             <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <span className={`text-white text-xs px-2 py-1 rounded-full ${statusColor}`}>
                    {status}
                </span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{description}</p>
            <p className="text-sm text-gray-500">
                <span className="font-medium">Deadline:</span> {deadline}
            </p>
        </div>
        </div>
    );
};

export default ProjectCard;