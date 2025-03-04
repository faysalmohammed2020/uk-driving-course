"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";

const languageOptions = [
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/us.png" },
  { code: "bn", label: "বাংলা", flag: "https://flagcdn.com/w40/bd.png" },
  { code: "ur", label: "اردو", flag: "https://flagcdn.com/w40/pk.png" },
  { code: "hi", label: "हिन्दी", flag: "https://flagcdn.com/w40/in.png" },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const t = useTranslations();
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`);
  };

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <AppBar position="static" className="bg-blue-800 shadow-md">
      {/* 🔹 Top Contact Bar */}
      <div className="hidden md:flex justify-between items-center py-3 px-4 bg-blue-900 text-white text-sm">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-1">
            <PhoneIcon fontSize="small" />
            <span>+88 01842781978</span>
          </div>
          <div className="flex items-center space-x-1">
            <EmailIcon fontSize="small" />
            <span>talat@birdsofeden.me</span>
          </div>
        </div>

        {/* 🌍 Language Selector (Horizontal for Desktop) */}
        <div className="hidden md:flex  items-center">
         
          <Typography variant="subtitle2" className="text-gray-300 font-semibold uppercase text-xs mb-1 p-4">
            Choose Language :
          </Typography>
          <div className="flex items-center space-x-6">
            {languageOptions.map(({ code, label, flag }) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className="flex flex-col items-center hover:opacity-75 transition duration-200"
              >
                <img src={flag} alt={label} width={40} height={40} className="shadow-md" />
                
              </button>
            ))}
         
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <Toolbar className="flex justify-between items-center px-4 py-4">
        {/* 🏠 Logo */}
        <Link href="/" className="flex flex-col">
          <Typography variant="h4" className="text-white font-bold">{t("home.Navbar.Boed")}</Typography>
          <Typography variant="caption" className="text-gray-300 text-sm">{t("home.Navbar.slogan")}</Typography>
        </Link>

        {/* 🖥️ Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          {["Home", "Course", "Guidelines", "Blog", "About", "Contact"].map((key, index) => (
            <Link key={index} href={["/", "/courses", "/guidelines", "/blogs", "/about-us", "/contacts"][index]} className="text-white hover:text-yellow-300">
              {t(`home.Navigation.${key}`)}
            </Link>
          ))}
        </div>

        {/* 📱 Mobile Menu Button */}
        <IconButton edge="start" color="inherit" aria-label="menu" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <MenuIcon />
        </IconButton>

        {/* 📱 Mobile Navigation + Vertical Language Selector */}
        {mobileMenuOpen && (
          <div className="absolute top-24 left-0 w-full bg-blue-800 text-white py-4 px-6">
            {["Home", "Course", "Blog", "About", "Contact"].map((key, index) => (
              <Link
                key={index}
                href={["/", "/courses", "/blogs", "/about-us", "/contacts"][index]}
                className="block py-2 hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(`home.Navigation.${key}`)}
              </Link>
            ))}

            {/* 🌍 Mobile Language Selector (Vertical) */}
            <div className="mt-6">
            
            
              <div className="flex flex-col space-y-3">
                {languageOptions.map(({ code, label, flag }) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className="flex items-center space-x-3 p-2 bg-blue-700 hover:bg-blue-600 rounded-md transition duration-200"
                  >
                    <Image src={flag} alt={label} width={35} height={35} className="rounded-md shadow-md" />
                    <span className="text-white font-medium">{label}</span>
                  </button>
                ))}
              
            </div>
            </div>
          </div>
        )}

        {/* 🔐 Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          {session ? (
            <Button variant="outlined" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg rounded-lg px-4" onClick={handleLogout}>
              {t("home.Navbar.Logout")}
            </Button>
          ) : (
            <>
              <Button variant="outlined" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg rounded-lg px-4">
                <Link href="/sign-in">{t("home.Navbar.Login")}</Link>
              </Button>
              <Button variant="contained" className="bg-emerald-700 text-white text-lg hover:bg-emerald-800 rounded-lg px-4">
                <Link href="/sign-up">{t("home.Navbar.Sign")}</Link>
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
