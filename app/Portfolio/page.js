"use client"; // This makes the component a client-side component.

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const tools = [
  {
    category: 'Image Creation',
    tools: [
      {
        name: 'Canva',
        description: 'A graphic design platform for creating social media graphics, presentations, posters, and more.',
        features: ['Templates', 'Drag-and-drop editor', 'Stock photos'],
        link: 'https://www.canva.com',
        rating: 4.5,
      },
    ],
  },
  
  {
    category: 'Content Writing',
    tools: [
      {
        name: 'Grammarly',
        description: 'An AI-powered writing assistant that helps with grammar, punctuation, and style.',
        features: ['Grammar check', 'Plagiarism detection', 'Style suggestions'],
        link: 'https://www.grammarly.com',
        rating: 4.7,
        
      },
      {
        name: 'Copy.ai',
        description: 'AI-powered copywriting tool that generates marketing copy.',
        features: ['Ad copy', 'Blog content', 'Social media posts'],
        link: 'https://www.copy.ai',
        rating: 4.6,
      },
      {
        name: 'Rytr',
        description: 'AI writing assistant that helps you create high-quality content.',
        features: ['Content generation', 'Templates', 'SEO optimization'],
        link: 'https://www.rytr.me',
        rating: 4.4,
      },
      {
        name: 'Writesonic',
        description: 'AI writing tool for creating marketing content.',
        features: ['Ad copy', 'Blog posts', 'Product descriptions'],
        link: 'https://www.writesonic.com',
        rating: 4.5,
      },
    ],
  },
  
  {
    category: 'Video Creation',
    tools: [
      {
        name: 'Lumen5',
        description: 'A video creation platform powered by AI.',
        features: ['Video templates', 'Drag-and-drop editor', 'Stock footage'],
        link: 'https://www.lumen5.com',
        rating: 4.3,
      },
      {
        name: 'Pictory',
        description: 'AI-powered video creation tool.',
        features: ['Script to video', 'Text to video', 'Video editing'],
        link: 'https://www.pictory.ai',
        rating: 4.4,
      },
      {
        name: 'InVideo',
        description: 'Online video editor with templates.',
        features: ['Video templates', 'Drag-and-drop editor', 'Stock footage'],
        link: 'https://www.invideo.io',
        rating: 4.5,
      },
      {
        name: 'Synthesia',
        description: 'AI video creation platform.',
        features: ['AI avatars', 'Text to video', 'Multilingual support'],
        link: 'https://www.synthesia.io',
        rating: 4.6,
      },
    ],
  },
  {
    category: 'Design',
    tools: [
      {
        name: 'Designs.ai',
        description: 'AI-powered design tool for creating logos, videos, banners, and more.',
        features: ['Logo maker', 'Video maker', 'Banner maker'],
        link: 'https://www.designs.ai',
        rating: 4.4,
      },
      {
        name: 'Simplified',
        description: 'AI-powered design and content creation tool.',
        features: ['Graphic design', 'Video editing', 'Content scheduling'],
        link: 'https://www.simplified.co',
        rating: 4.5,
      },
    ],
  },
  {
    category: 'Productivity',
    tools: [
      {
        name: 'Tasper AI',
        description: 'AI-powered task management tool.',
        features: ['Task automation', 'Project management', 'Collaboration'],
        link: 'https://www.tasper.ai',
        rating: 4.3,
      },
      {
        name: 'Scribehow',
        description: 'AI tool for creating step-by-step guides.',
        features: ['Guide creation', 'Collaboration', 'Sharing'],
        link: 'https://www.scribehow.com',
        rating: 4.4,
      },
      {
        name: 'Krisp',
        description: 'AI-powered noise cancellation tool.',
        features: ['Noise cancellation', 'Echo removal', 'Voice clarity'],
        link: 'https://www.krisp.ai',
        rating: 4.6,
      },
    ],
  },
];

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = tools.map((category) => ({
    ...category,
    tools: category.tools.filter((tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <>
      <Head>
        <title>AI Tools Portfolio</title>
        <meta
          name="description"
          content="Showcasing the most important and trending free AI tools for content creation."
        />
      </Head>
      <div className="container mx-auto p-4 bg-slate-800">
        <h1 className="text-4xl font-bold mb-4 text-white">AI Tools Portfolio</h1>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full p-2 border border-gray-300 rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-2 top-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {filteredTools.map((category) => (
            <div key={category.category} className="w-full">
              <h2 className="text-2x1 font-semibold mb-2 text-white">{category.category}</h2>
              {category.tools.map((tool) => (
                <div key={tool.name} className="border p-4 rounded-lg mb-4 bg-white shadow-lg hover:shadow-x1 transition-shadow duration-300">
                  <Image src="/logo.png" alt="Website Logo" width={48} height={48} className="w-12 h-12 mb-2 rounded-full" />
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                  <p>{tool.description}</p>
                  <ul className="list-disc ml-4">
                    {tool.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    href={tool.link}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Access Tool
                  </a>
                  <div className="mt-2">
                    <span className="text-red-500">Rating: {tool.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Portfolio;