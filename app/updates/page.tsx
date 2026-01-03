import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

// Async or not?
export default async function Updates() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    
    // const updates = [
    //     {
    //         title: "No code Design Prototype",
    //         timeframe: "Due 31st",
    //         content:
    //             "The first design prototype for the app is finished. Go check it out on social media, we would love feedback. ",
    //         //tags: ["Beta Testing", "User Experience", "Quiz Development"],
    //         //link: "Learn more about joining the beta →",
    //         borderColor: "border-accent",
    //         badgeColor: "bg-primary text-primary-foreground",
    //     },
    //     {
    //         title: "Starting App Development",
    //         timeframe: "1 Week Ago",
    //         content: "The first few bits of development have begun!",
    //         //tags: ["Beta Testing", "User Experience", "Quiz Development"],
    //         //link: "Learn more about joining the beta →",
    //         borderColor: "border-secondary",
    //         badgeColor: "bg-primary text-primary-foreground",
    //     },
    // ];

    return (
        <section>
            <Header></Header>
            <div className="max-w-4xl mx-auto mb-12 px-2 md:px-4 lg:px-0">
                <h1 className="text-3xl md:text-4xl font-bold m-8 text-center justify-start">Development Updates</h1>

                {/* Subscribe to updates Card */}
                <Card className="bg-white mb-8">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-primary-foreground text-xl font-semibold">Latest News</h2>
                            {/* <Button className="px-4 py-2 text-sm bg-sidebar-border text-white rounded-lg hover:bg-accent transition">
                Subscribe to Updates
              </Button> */}
                        </div>
                        <p className="text-primary-foreground">
                            Stay informed about our progress, upcoming features, and how you can get involved in shaping
                            the future of Shift Habits.
                        </p>
                    </CardContent>
                </Card>

                {/* Update Cards */}
                <div className="space-y-8">
                    {posts.map((post) => (
                        <Link key={post._id} href={`/updates/${post.slug.current}`}>
                            <Card className={`bg-white border-l-6 border-secondary mb-4`}>
                                <CardContent className="p-6">
                                    <div className="flex flex-col-reverse sm:flex-row flex-wrap justify-between items-start mb-4">
                                        <h2 className="pt-2 md:pt-0 text-primary-foreground text-xl font-semibold">
                                            {post.title}
                                        </h2>
                                        <Badge
                                            variant="outline"
                                            className={`bg-primary text-primary-foreground bg-sidebar-border text-sidebar-foreground text-sm font-medium px-3 py-1 rounded-full`}
                                        >
                                            {new Date(post.publishedAt).toLocaleDateString()}
                                        </Badge>
                                    </div>
                                    {/* <p className="text-primary-foreground mb-4">content{post.body}</p> */}
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
}
