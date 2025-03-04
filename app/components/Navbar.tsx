"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@/i18n/navigation";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslations } from "next-intl";

const languageOptions = [
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/us.png" },
  { code: "bn", label: "Bengali", flag: "https://flagcdn.com/w40/bd.png" },
  { code: "ur", label: "Urdu", flag: "https://flagcdn.com/w40/pk.png" },
  { code: "hi", label: "Hindi", flag: "https://flagcdn.com/w40/in.png" },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`);
    handleLanguageMenuClose();
  };
  const t = useTranslations();
  return (
    <AppBar position="static" className="bg-blue-800 shadow-md">
      {/* Top Contact Bar */}
      <div className="hidden md:flex justify-end items-center py-3 px-4 bg-blue-900 text-white space-x-6 text-sm">
        <div className="flex items-center space-x-1">
          <PhoneIcon fontSize="small" />
          <span>+88 01842781978</span>
        </div>
        <div className="flex items-center space-x-1">
          <PhoneIcon fontSize="small" />
          <span>+88 01842781978</span>
        </div>
        <div className="flex items-center space-x-1">
          <EmailIcon fontSize="small" />
          <span>talat@birdsofeden.me</span>
        </div>

        {/* Language Selector */}
        <div>
          <IconButton onClick={handleLanguageMenuOpen} className="text-white">
            <TranslateIcon />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu anchorEl={languageAnchorEl} open={Boolean(languageAnchorEl)} onClose={handleLanguageMenuClose}>
            <Typography variant="subtitle2" className="px-3 py-1 text-gray-500">
              Choose Your Language
            </Typography>
            {languageOptions.map(({ code, label, flag }) => (
              <MenuItem key={code} onClick={() => changeLanguage(code)}>
                <img src={flag} alt={label} width="25" className="mr-2" />{" "}
                {label}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      {/* Main Navbar */}
      <Toolbar className="flex justify-between items-center px-4 py-4">
        {/* Logo and Title */}
        <Link href="/" className="flex flex-col">
          <Typography variant="h4" className="text-white font-bold">
            {t('home.Navbar.Boed')}
          </Typography>
          <Typography variant="caption" className="text-gray-300 text-sm">
            {t('home.Navbar.slogan')}
          </Typography>
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="text-white hover:text-yellow-300">
            {t('home.Navigation.Home')}
          </Link>
          <Link href="/courses" className="text-white hover:text-yellow-300">
            {t('home.Navigation.Course')}
          </Link>
          <Link href="/guidelines" className="text-white hover:text-yellow-300">
            Guidelines
          </Link>
          <Link href="/blogs" className="text-white hover:text-yellow-300">
            {t('home.Navigation.Blog')}
          </Link>
          <Link href="/about-us" className="text-white hover:text-yellow-300">
            {t('home.Navigation.About')}
          </Link>
          <Link href="/contacts" className="text-white hover:text-yellow-300">
            {t('home.Navigation.Contact')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-24 left-0 w-full bg-blue-800 text-white py-4 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-yellow-300 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/course"
              className="block text-white hover:text-yellow-300 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Course
            </Link>
            <Link
              href="/blogs"
              className="block text-white hover:text-yellow-300 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about-us"
              className="block text-white hover:text-yellow-300 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contacts"
              className="block text-white hover:text-yellow-300 px-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}

        {/* Login and Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outlined" className="border-white text-white hover:bg-white hover:text-blue-800 text-lg rounded-lg px-4">
          <Link href="/sign-in">
          {t('home.Navbar.Login')}
          </Link>
          </Button>
          <Button variant="contained" className="bg-emerald-700 text-white text-lg hover:bg-emerald-800 rounded-lg px-4">
           <Link href="/sign-up">
           {t('home.Navbar.Sign')}
           </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
