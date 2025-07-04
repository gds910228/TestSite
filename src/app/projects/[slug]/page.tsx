"use client";

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectsByLocale } from '@/data/projects';
import Section from '@/components/Section';
import ContactCTA from '@/components/ContactCTA';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const pathname = usePathname();
  const projectSlug = Array.isArray(slug) ? slug[0] : slug;
  
  // 当前语言环境 - 通过路径确定
  const isZhLang = pathname?.startsWith('/zh');
  const currentLocale = isZhLang ? 'zh' : 'en';
  
  // 获取当前语言的项目集合
  const currentProjects = getProjectsByLocale(currentLocale);
  
  // 查找匹配的项目
  let project = currentProjects.find(project => project.slug === projectSlug);
  
  // 如果找不到项目，尝试按id查找
  if (!project) {
    project = currentProjects.find(project => project.id === projectSlug);
  }
  
  // 如果还是找不到，返回404
  if (!project) {
    notFound();
  }
  
  return (
    <>
      {/* Hero Section */}
      <Section id="project-hero" bgColor="bg-neutral-light dark:bg-dark-bg-secondary" className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:gap-12 items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-neutral-darker dark:text-dark-neutral-darker mb-4">
                {project.title}
              </h1>
              <p className="text-neutral-dark dark:text-dark-neutral-dark mb-6">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary-light dark:bg-dark-primary-light text-primary dark:text-dark-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mb-6">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 rounded-lg bg-primary dark:bg-dark-primary text-white font-medium hover:opacity-90 transition"
                  >
                    <FontAwesomeIcon icon={faLink} className="w-4 h-4" />
                    <span>{currentLocale === 'zh' ? '项目链接' : 'Live Project'}</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 rounded-lg bg-neutral-light dark:bg-dark-neutral-light text-neutral-darker dark:text-dark-neutral-darker font-medium hover:opacity-90 transition"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Project Description */}
      <Section id="project-description">
        <div className="container mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold font-heading text-neutral-darker dark:text-dark-neutral-darker mb-4">
              {currentLocale === 'zh' ? '项目概览' : 'Project Overview'}
            </h2>
            <p className="text-neutral-dark dark:text-dark-neutral-dark mb-6">
              {project.description}
            </p>
            
            <div className="my-12">
              <Link 
                href={currentLocale === 'zh' ? "/zh/projects" : "/projects"} 
                className="flex items-center gap-2 text-primary dark:text-dark-primary font-medium hover:underline"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                <span>{currentLocale === 'zh' ? '返回项目列表' : 'Back to Projects'}</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      
      <ContactCTA />
    </>
  );
} 