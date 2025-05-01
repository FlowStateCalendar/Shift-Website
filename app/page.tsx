"use client";
import { ModeToggle } from "@/components/theme-mode-toggle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useQuizStore } from "@/lib/store";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    email: z.string().email(),
});

export default function Home() {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        useQuizStore.getState().reset();
        useQuizStore.getState().setemail(data.email);
        router.push("/quiz");
    };

    return (
        <div className="flex flex-col items-center w-full h-screen bg-background">
            <div className="flex flex-row items-start w-full h-16 p-2">
                <div className="flex items-start justify-start w-2/3 h-full">
                    <h1 className="text-4xl font-bold">Neurodiverse Productivity Quiz</h1>
                </div>
                <div className="flex items-start justify-end w-1/3 h-full">
                    <ModeToggle />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl font-bold">Welcome to the Neurodiverse Productivity Quiz</h1>
                <p className="text-lg mb-5">Please enter your email to get started</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Start The quiz</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
