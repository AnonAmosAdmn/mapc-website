"use client";

import { Box, Heading, Text, Avatar, Flex, Card } from "@radix-ui/themes";
import React from "react";

export default function AboutPage() {
  return (
    <Box position="relative" width="100%" height="100vh">
      <Flex
        direction="column"
        align="center"
        justify="center"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        px="4"
      >
        <Card
          size="4"
          style={{
            maxWidth: "600px",
            width: "100%",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Flex direction="column" gap="4" align="center">
            <Flex direction="row" gap="8" align="center">
              <Avatar
                fallback="JD"
                size="6"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                radius="full"
              />
              <Avatar
                fallback="JD"
                size="6"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                radius="full"
              />
            </Flex>
            <Heading size="5">Thomas--------Moe</Heading>
            <Text color="gray">Full Stack Developer · Tech Enthusiast · Pixel Pusher</Text>
            <Text>
Welcome to Monad Ape Punks Club (MAPC), a limited-edition NFT collection blending the rebellious spirit of CryptoPunks with the alpha energy of Bored Apes—powered by Monad’s ultra-fast, low-cost blockchain!

Each MAPC NFT is a 1-of-1 digital collectible featuring:
🔥 Unique Ape-Punk hybrids (10,000 algorithmically generated)
🔥 Rare traits (Gold Chains, Laser Eyes, Monad-Themed Gear)
🔥 Exclusive access to future Monad ecosystem rewards

Why Own a MAPC NFT?
✅ Monad’s Speed & Low Fees – Mint and trade at lightning speed!
✅ Community-Driven – Voting rights on future drops & DAO governance.
✅ Alpha Opportunities – Early access to Monad DeFi, games, and more.

Join the rebellion. Own a piece of Monad history.

📍 Mint Price: TBA (Stay tuned!)
📍 Supply: 10,000 (No more, no less)
📍 Blockchain: Monad (EVM-compatible, ultra-scalable)

💬 Follow Us:
Twitter: @MonadApePunks (example)
Discord: discord.gg/monadapes (example)

⚠️ WARNING: FOMO IS REAL. DON’T MISS OUT.
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
}
