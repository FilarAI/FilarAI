import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { ProjectPageTemplate } from '@/components/templates/ProjectPage';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return { title: 'Projekt nie znaleziony - Filar AI' };

    return {
        title: `${project.title} - Portfolio | Filar AI`,
        description: project.intro,
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectPageTemplate project={project} />;
}
