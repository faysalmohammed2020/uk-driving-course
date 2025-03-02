// components/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations();
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Information */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.jpg"
                alt="SERU Online"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h4 className="text-2xl font-bold">birdsofeden.com</h4>
            <p className="text-gray-300">Birds Of Eden Online Course</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  {t('home.Navigation.Home')}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white">
                {t('home.Navigation.About')}
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white">
                {t('home.Navigation.Course')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                 {t('home.Navigation.Blog')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                {t('home.Navigation.Contact')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  {t('home.Navigation.Privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  {t('home.Navigation.Term')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-4">{t('home.Navigation.Contact')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="block">📧 talat@birdsofeden.me</span>
              </li>
              <li>
                <span className="block">📞 0123456789</span>
              </li>
              <li>
                <span className="block">📍 {t('home.Navigation.Address')}</span>
              </li>
            </ul>

            <h4 className="text-xl font-bold mt-6 mb-2">{t('home.Navigation.LS')}</h4>
            <span className="block text-gray-300">
              customercare@birdsofeden.me
            </span>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4">{t('home.Navigation.social')}</h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-teal-700 p-3 rounded-full hover:bg-teal-600 transition duration-300"
              >
                <FaFacebookF className="text-white" />
              </Link>
              <Link
                href="#"
                className="bg-teal-700 p-3 rounded-full hover:bg-teal-600 transition duration-300"
              >
                <FaYoutube className="text-white" />
              </Link>
              <Link
                href="#"
                className="bg-teal-700 p-3 rounded-full hover:bg-teal-600 transition duration-300"
              >
                <FaLinkedinIn className="text-white" />
              </Link>
              <Link
                href="#"
                className="bg-teal-700 p-3 rounded-full hover:bg-teal-600 transition duration-300"
              >
                <FaInstagram className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-center text-white">
        <p>
          {t('home.Navigation.Design')}{" "}
          <Link href="https://www.pcoukonline.com" className="text-red-600 hover:underline">
            {t('home.Navbar.Boed')}
          </Link>{" "}
          | © 2025 - {t('home.Navigation.Rights')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
