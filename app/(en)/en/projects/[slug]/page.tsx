import type { Metadata } from 'next';
import { ProjectPage, projectMetadata } from '@/components/pages/ProjectPage';
import { projects } from '@/data/projects';

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return projectMetadata(slug, 'en');
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectPage slug={slug} lang="en" />;
}
