import { create } from "zustand";

const useProjecData = create((set) => ({
    projects: [
        {
            name: 'Red Brick Winery',
            description: 'A Napa Valley winery offering tastings, events, and a wine club, known for crafting unique wines with a focus on storytelling',
            url: 'https://redbrickwinery.com/',
            image: '/img/red-brick-winery.png',
            skills: [
                'WordPress',
                'GenerateBlocks',
                'Custom Theme',
                'Bootstrap',
                'Sass',
                'WPForms',
            ],
        },
        {
            name: 'FileDocsPhil',
            description: 'Philippines-based service handling apostille, CAV, and embassy legalization for easy local and global document authentication',
            url: 'https://filedocsphil.com/',
            image: '/img/filedocsphil.png',
            skills: [
                'WordPress',
                'GenerateBlocks',
                'Custom Theme',
                'Bootstrap',
                'Sass',
                'WPForms',
            ],
        },
        {
            name: 'DuranSchulze',
            description: 'Provides legal and compliance support to small businesses in the Philippines, helping ensure smooth operations.',
            url: 'https://duranschulze.com/',
            image: '/img/duranschulze.png',
            skills: [
                'WordPress',
                'Elementor',
                'Custom Theme',
                'Bootstrap',
                'Sass',
            ],
        },
        {
            name: 'FilePino',
            description: 'Business registration and compliance services for startups in the Philippines, simplifying processes for entrepreneurs.',
            url: 'https://www.filepino.com/',
            image: '/img/filepino.png',
            skills: [
                'WordPress',
                'Custom Plugin',
                'Elementor',
                'Bootstrap',
            ],
        },
        {
            name: 'Fencing Quotes Online',
            description: 'Australian platform connecting users to fencing contractors, offering quick quotes for fence installation and repairs.',
            url: 'https://fencingquotesonline.com.au/',
            image: '/img/fencing-quotes-online.png',
            skills: [
                'WordPress',
                'Custom Theme',
                'Bootstrap',
                'Sass',
            ],
        },
        {
            name: 'London House Cleaner',
            description: 'Offers residential and commercial cleaning services in London, including deep cleaning, end-of-tenancy, and more.',
            url: 'http://londonhousecleaners.co.uk/',
            image: '/img/londonhousecleaners.png',
            skills: [
                'WordPress',
                'Elementor',
                'Bootstrap',
            ],
        },
        {
            name: 'Eunika Agency',
            description: 'A digital marketing firm specializing in SEO and content creation to boost online presence and visibility for businesses.',
            url: 'http://eunika.agency/',
            image: '/img/eunika-agency.png',
            skills: [
                'WordPress',
                'SEO',
                'Content Creation',
            ],
        },
        {
            name: 'Retaining Wall Supplies',
            description: 'Supplies materials for building retaining walls, offering solutions for residential and commercial landscaping projects.',
            url: 'https://retainingwallsupplies.com.au/',
            image: '/img/retainingwallsupplies.png',
            skills: [
                'WordPress',
                'Bootstrap',
                'Sass',
            ],
        },
        {
            name: 'Gym Near Me',
            description: 'A directory connecting users to nearby gyms and fitness centers based on location, equipment, and fitness needs.',
            url: 'https://gymnearme.net.au/',
            image: '/img/gymnearme.png',
            skills: [
                'WordPress',
                'Directory Plugin',
                'Custom Theme',
            ],
        },
        {
            name: 'WhatManandVan',
            description: 'UK comparison site for man and van services, helping customers find affordable options for moving and deliveries.',
            url: 'http://whatmanandvan.co.uk/',
            image: '/img/whatmanandvan.png',
            skills: [
                'WordPress',
                'Comparison Plugin',
                'Custom Theme',
            ],
        },
        {
            name: 'WhatRemovals',
            description: 'A UK removals comparison platform for house and office moves, offering price comparisons and provider reviews.',
            url: 'http://whatremovals.co.uk/',
            image: '/img/whatremovals.png',
            skills: [
                'WordPress',
                'Custom Theme',
                'Bootstrap',
            ],
        },
        {
            name: 'WhatStorage',
            description: 'UK-based comparison service for self-storage units, helping customers find secure options based on size and price.',
            url: 'http://whatstorage.co.uk/',
            image: '/img/whatstorage.png',
            skills: [
                'WordPress',
                'Comparison Plugin',
                'Custom Theme',
            ],
        }
    ],
}));

export default useProjecData;
