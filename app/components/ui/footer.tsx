"use client";

import Link from 'next/link';
import { BsDiscord, BsGithub, BsInstagram } from 'react-icons/bs';
import FooterCharacter from './footercharachter';

export default function Footer () {
  return (
    <footer className="bg-transparent border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link 
                  href="/" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/documentation" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
                <Link 
                  href="mailto:trycaze@proton.me" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white uppercase tracking-wider">
              Socials and stuff
            </h3>
            <div className="mt-4 space-y-3">
              <Link
                href="https://discord.gg/aEjafzsPe9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <BsDiscord className="mx-2" />
                Discord
              </Link>
              <Link 
                href="https://github.com/TryCaze/wazuup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <BsGithub className="mx-2" />
                GitHub
              </Link>
                <Link 
                href="https://www.instagram.com/trycaze/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <BsInstagram className="mx-2" />
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Wazuup. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link 
                href="/tos" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/privacy-policy" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    <FooterCharacter />
    </footer>
  );
};