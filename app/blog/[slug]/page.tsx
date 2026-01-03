/* eslint-disable @next/next/no-img-element */
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;

    const post = await client.fetch<SanityDocument>(POST_QUERY, resolvedParams, options);

  if (!post) {
    return (
      <section>
        <Header/>
        <main className="container mx-auto p-8">
          <Link href="/blog" className="hover:underline">
          ← Back to posts
          </Link>
          <h1 className="text-2xl font-semibold">Post not found</h1>
        </main>
        <Footer/>
      </section>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <section>
      <Header/>
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <Link href="/blog" className="hover:underline">
          ← Back to posts
        </Link>
        <div className="bg-primary text-primary-foreground rounded-xl p-10">
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt={post.title}
              className="aspect-video rounded-xl"
              width="550"
              height="310"
            />
          )}
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="prose">
            <p className="mb-6">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </div>
        </div>
      </main>
      <Footer/>
    </section>
  );
}
