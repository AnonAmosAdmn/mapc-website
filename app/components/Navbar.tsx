// components/Navbar.tsx
'use client'
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        
        <nav className="w-full px-6 py-4 flex justify-between items-center border-t border-white-700 bg-black">
            <div className="text-xl font-bold text-white">MAPC</div>
            <div className="space-x-4">
                <Link href="https://monad-ape-punks-club.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">HOME</Link>
                <Link href="https://thirdweb.com/monad-testnet/0xA4a3B33100ddb12B4563F01152Ee55b96886ef0D" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">MINT</Link>
                <Link href="https://mapc-staking.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">STAKING</Link>
                <Link href="https://mapc-market.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">MARKET</Link>
                <Link href="https://faucet.monad.xyz/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">FAUCET</Link>
            </div>
        </nav>
    );
}
