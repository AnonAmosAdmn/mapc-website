// components/SocialLinks.tsx
'use client'
import React from "react";
import { Flex, Link as RadixLink, IconButton } from "@radix-ui/themes";
import { 
    TwitterLogoIcon,
    DiscordLogoIcon 
} from "@radix-ui/react-icons";



// Simple SVG icons for Facebook and Instagram
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 7.5C14 3.91 11.09 1 7.5 1C3.91 1 1 3.91 1 7.5C1 10.73 3.34 13.38 6.44 13.89V9.38H4.9V7.5H6.44V6.04C6.44 4.34 7.59 3.25 9.15 3.25C9.94 3.25 10.75 3.4 10.75 3.4V5H9.85C8.95 5 8.65 5.55 8.65 6.12V7.5H10.66L10.32 9.38H8.65V13.89C11.66 13.38 14 10.73 14 7.5Z" fill="currentColor"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 5C6.12 5 5 6.12 5 7.5C5 8.88 6.12 10 7.5 10C8.88 10 10 8.88 10 7.5C10 6.12 8.88 5 7.5 5ZM7.5 9C6.67 9 6 8.33 6 7.5C6 6.67 6.67 6 7.5 6C8.33 6 9 6.67 9 7.5C9 8.33 8.33 9 7.5 9ZM12 5C12 4.45 11.55 4 11 4C10.45 4 10 4.45 10 5C10 5.55 10.45 6 11 6C11.55 6 12 5.55 12 5ZM13 5C13 3.34 11.66 2 10 2H5C3.34 2 2 3.34 2 5V10C2 11.66 3.34 13 5 13H10C11.66 13 13 11.66 13 10V5ZM12 10C12 11.1 11.1 12 10 12H5C3.9 12 3 11.1 3 10V5C3 3.9 3.9 3 5 3H10C11.1 3 12 3.9 12 5V10Z" fill="currentColor"/>
  </svg>
);


export default function SocialLinks() {
    return (
        <Flex gap="4" mt="6">
            <RadixLink href="https://x.com/MonadAPC" target="_blank" rel="noopener noreferrer">
                <IconButton variant="outline" size="4">
                    <TwitterLogoIcon />
                </IconButton>
            </RadixLink>

            <RadixLink href="https://discord.gg/K4BQvJ7CpF" target="_blank" rel="noopener noreferrer">
                <IconButton variant="outline" size="4">
                    <DiscordLogoIcon />
                </IconButton>
            </RadixLink>

            <RadixLink href="https://www.facebook.com/MAPC" target="_blank" rel="noopener noreferrer">
                <IconButton variant="outline" size="4">
                    <FacebookIcon />
                </IconButton>
            </RadixLink>

            <RadixLink href="https://www.instagram.com/MAPC" target="_blank" rel="noopener noreferrer">
                <IconButton variant="outline" size="4">
                    <InstagramIcon />
                </IconButton>
            </RadixLink>
        </Flex>
    );
}
