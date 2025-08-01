// components/SocialLinks.tsx
'use client'
import React from "react";
import { Flex, Link as RadixLink, IconButton } from "@radix-ui/themes";
import { 
    TwitterLogoIcon,
    DiscordLogoIcon 
} from "@radix-ui/react-icons";




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

        </Flex>
    );
}
