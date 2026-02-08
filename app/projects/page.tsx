'use client';

import ProjectsComponent from '@/components/Projects';

export default function ProjectsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-light tracking-tight mb-12">Projects</h1>
            <ProjectsComponent />
        </div>
    );
}
