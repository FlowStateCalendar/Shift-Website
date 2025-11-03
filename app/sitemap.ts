import { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

const baseUrl = "https://shifthabits.co.uk";

// Fetch all blog posts from Sanity
async function getBlogPosts(): Promise<SanityDocument[]> {
    try {
        const POSTS_QUERY = `*[
            _type == "blogPost"
            && defined(slug.current)
        ]|order(publishedAt desc){_id, slug, publishedAt, _updatedAt}`;
        
        const options = { next: { revalidate: 3600 } }; // Revalidate every hour
        const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
        return posts || [];
    } catch (error) {
        console.error("Error fetching blog posts for sitemap:", error);
        return [];
    }
}

// Fetch all updates from Sanity
async function getUpdates(): Promise<SanityDocument[]> {
    try {
        const POSTS_QUERY = `*[
            _type == "post"
            && defined(slug.current)
        ]|order(publishedAt desc){_id, slug, publishedAt, _updatedAt}`;
        
        const options = { next: { revalidate: 3600 } }; // Revalidate every hour
        const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
        return posts || [];
    } catch (error) {
        console.error("Error fetching updates for sitemap:", error);
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Compute build date once for all static pages to avoid inconsistent timestamps
    const buildDate = new Date();
    
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: buildDate,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: buildDate,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/quiz`,
            lastModified: buildDate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact-us`,
            lastModified: buildDate,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: buildDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: buildDate,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: buildDate,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/updates`,
            lastModified: buildDate,
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    // Fetch dynamic pages
    const [blogPosts, updates] = await Promise.all([
        getBlogPosts(),
        getUpdates(),
    ]);

    // Add blog post pages
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: post._updatedAt ? new Date(post._updatedAt) : (post.publishedAt ? new Date(post.publishedAt) : new Date()),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Add update pages
    const updatePages: MetadataRoute.Sitemap = updates.map((post) => ({
        url: `${baseUrl}/updates/${post.slug.current}`,
        lastModified: post._updatedAt ? new Date(post._updatedAt) : (post.publishedAt ? new Date(post.publishedAt) : new Date()),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Combine all pages
    return [...staticPages, ...blogPages, ...updatePages];
}

