// app/page.tsx
import { Box, Heading, Text, Flex } from "@radix-ui/themes";
import React from "react";
import SocialLinks from "./components/SocialLinks";
import Image from "next/image";

export default function Home() {
  return (
    <Box position="relative" width="100%" height="100%">
      <Flex direction="column" align="center" justify="center" gap="4" py="9">
        <Heading size="9" as="h1">
          <Text color="purple">Ape Punks</Text>
        </Heading>

        <Text size="5" color="gold">
          brought to you by AnonAmosAdmn and MoeR87.
        </Text>

        {/* Single Column Banners */}
        <Flex direction="column" gap="4" width="100%" px="4" style={{ maxWidth: '900px', minWidth: '900px' }}>
          <Box position="relative" height="350px" width="100%" mt="8" mb="8">
            <Image
              src="/ap-banner.png"
              alt="MAPC Logo"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </Box>

          {/* Video Player */}
          <Box position="relative" width="100%" style={{ aspectRatio: '16/9' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover rounded-lg"
            >
              <source src="/mapc-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>

          <Box position="relative" height="250px" width="100%" mt="6" mb="8">
            <Image
              src="/banner1.gif"
              alt="MAPC Banner 1"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </Box>

          <Box position="relative" height="300px" width="100%" mb="8">
            <Image
              src="/banner_1.gif"
              alt="MAPC Banner 2"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </Box>
        </Flex>

        <SocialLinks />
      </Flex>
    </Box>
  );
}
