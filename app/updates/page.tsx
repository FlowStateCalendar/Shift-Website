import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Updates() {
  const updates = [
    {
      title: "Beta Testing Program Launch",
      timeframe: "2 weeks ago",
      content: "We're excited to announce the launch of our beta testing program! We're looking for neurodiverse individuals to help us refine our assessment quiz and provide feedback on the user experience.",
      tags: ["Beta Testing", "User Experience", "Quiz Development"],
      link: "Learn more about joining the beta →",
      borderColor: "border-primary",
      badgeColor: "bg-primary text-primary-foreground"
    },
  ];

  const roadmapItems = [
    {
      title: "Q3 2023: Assessment & Profiles",
      progress: 75,
      items: [
        "Core assessment quiz development",
        "Personalized profile generation",
        "Initial strength mapping functionality"
      ],
    },
    {
      title: "Q4 2023: Community & Resources",
      progress: 30,
      items: [
        "Community platform beta launch",
        "Resource library with filtering by profile type",
        "Expert-contributed strategy guides"
      ],
    }
  ];

  return (
    <section>
      <Header></Header>
      <div className="max-w-4xl mx-auto mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold m-8 text-center justify-start">Development Updates</h1>
        
        <Card className="bg-white mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-primary-foreground text-xl font-semibold">Latest News</h2>
              <Button className="px-4 py-2 text-sm bg-sidebar-border text-white rounded-lg hover:bg-accent transition">
                Subscribe to Updates
              </Button>
            </div>
            <p className="text-primary-foreground">
              Stay informed about our progress, upcoming features, and how you can get involved in shaping the future of Flowstate.
            </p>
          </CardContent>
        </Card>
        <div className="space-y-8">
            {updates.map((update, index) => (
                <Card key={index} className={`bg-white border-l-4 ${update.borderColor}`}>
                    <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start mb-4">
                            <h2 className="text-primary-foreground text-xl font-semibold">{update.title}</h2>
                            <Badge
                                variant="outline"
                                className={`${update.badgeColor} bg-sidebar-border text-sidebar-foreground text-sm font-medium px-3 py-1 rounded-full`}
                            >
                                {update.timeframe}
                            </Badge>
                        </div>
                        <p className="text-primary-foreground mb-4">{update.content}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {update.tags.map((tag, idx) => (
                                <Badge
                                    key={idx}
                                    variant="secondary"
                                    className="hover:bg-neutral-200 bg-neutral-200 text-neutral-700 text-xs px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <a href="#" className="text-primary-foreground hover:text-accent font-medium">
                            {update.link}
                        </a>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Development Roadmap</h2>
            <Card className="bg-white">
                <CardContent className="p-6">
                    <div className="space-y-6">
                        {roadmapItems.map((item, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-primary-foreground text-lg mb-2">{item.title}</h3>
                                <div className="flex items-center mb-2">
                                    <Progress
                                        value={item.progress}

                                        className="h-2.5 rounded-full bg-neutral-200"
                                    />
                                    <span className="ml-3 text-sm font-medium text-primary-foreground">
                                        {item.progress}%
                                    </span>
                                </div>
                                <ul className="list-disc pl-5 text-sm text-primary-foreground space-y-1">
                                    {item.items.map((listItem, idx) => (
                                        <li key={idx}>{listItem}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
