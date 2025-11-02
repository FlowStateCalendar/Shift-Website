import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Header from "@/components/header";
import Footer from "@/components/footer";

const POSTS_QUERY = `*[
  _type == "blogPost"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const blogPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <section>
      <Header></Header>
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        <ul className="flex flex-col gap-y-4">
          {blogPosts.map((post) => (
            <li className="hover:underline" key={post._id}>
              <Link href={`/blog/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer></Footer>
    </section>
  );
}