"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioItem,
    DropdownMenuRadioGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    {resolvedTheme === "dark" ? (
                        <Moon className="h-[1.2rem] w-[1.2rem]" />
                    ) : resolvedTheme === "light" ? (
                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                        <Laptop className="h-[1.2rem] w-[1.2rem]" />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem value="" onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="" onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="" onClick={() => setTheme("system")}>
                        System
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
