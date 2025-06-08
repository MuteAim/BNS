"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wider">Vienne</h1>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 토글">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`flex-col md:flex-row md:flex md:space-x-6 text-sm ${menuOpen ? 'flex' : 'hidden'} md:items-center`}>
          <Link href="/" className="block py-2 md:py-0 hover:text-gray-300 transition">홈</Link>
          <Link href="/carousel" className="block py-2 md:py-0 hover:text-gray-300 transition">캐러샐</Link>
          <Link href="#" className="block py-2 md:py-0 hover:text-gray-300 transition">주요실적</Link>
        </nav>
      </div>
    </header>
  );
}
