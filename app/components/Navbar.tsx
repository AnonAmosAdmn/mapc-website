// components/Navbar.tsx
'use client'
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        
        <nav className="w-full px-6 py-4 flex justify-between items-center border-t border-white-700 bg-black">
            <div className="text-xl font-bold text-white">MAPC</div>
            <div className="space-x-4">
                <Link href="/" className="text-white hover:underline">Home</Link>
                <Link href="https://mapc-staking.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Staking</Link>
                <Link href="https://mapc-market.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Market</Link>
                <Link href="/about" className="text-white hover:underline">About MAPC</Link>
            </div>
        </nav>
    );
}
