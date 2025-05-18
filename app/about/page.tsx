import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Shield, UserPlus } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Empowerment",
      description: "Providing tools that build confidence and independence",
      icon: <Zap className="h-6 w-6" />,
      bgColor: "bg-blue-100",
      textColor: "text-primary"
    },
    {
      title: "Inclusivity",
      description: "Designing for diverse cognitive, sensory, and emotional experiences",
      icon: <UserPlus className="h-6 w-6" />,
      bgColor: "bg-green-100",
      textColor: "text-secondary"
    },
    {
      title: "Trust",
      description: "Building technology with transparency and evidence-based approaches",
      icon: <Shield className="h-6 w-6" />,
      bgColor: "bg-purple-100",
      textColor: "text-accent"
    },
    {
      title: "Community",
      description: "Fostering connection and shared learning between users",
      icon: <Users className="h-6 w-6" />,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About NeuroApp</h1>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gray-200 h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-neutral-700 mb-4">
                NeuroApp was created with a simple but powerful mission: to help neurodiverse individuals discover, understand, and embrace their unique cognitive patterns.
              </p>
              <p className="text-neutral-700">
                We believe that neurodiversity is a natural and valuable form of human diversity. Our tools are designed to celebrate these differences while providing practical support for navigating a world that often isn't built with neurodiversity in mind.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-neutral-700 mb-4">
                NeuroApp combines cutting-edge research with real-world experience to create assessments and resources that make a difference.
              </p>
              <p className="text-neutral-700">
                Rather than focusing on deficits, we highlight strengths and provide tailored strategies that work with your natural cognitive style, not against it.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">The Team</h2>
              <p className="text-neutral-700 mb-4">
                Our team includes neuroscientists, psychologists, designers, and developers - many of whom are neurodiverse themselves.
              </p>
              <p className="text-neutral-700">
                We're committed to creating technology that is truly accessible, considerate of sensory needs, and easy to integrate into daily life.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-neutral-200 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div className="flex" key={index}>
                <div className={`h-12 w-12 rounded-lg ${value.bgColor} flex items-center justify-center ${value.textColor} shrink-0`}>
                  {value.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold mb-1">{value.title}</h3>
                  <p className="text-neutral-700 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
