"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [guidelineAnchorEl, setGuidelineAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleGuidelineMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setGuidelineAnchorEl(event.currentTarget);
  };

  const handleGuidelineMenuClose = () => {
    setGuidelineAnchorEl(null);
  };

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
      </div>

      {/* Main Navbar */}
      <Toolbar className="flex justify-between items-center px-4 py-4">
        {/* Logo and Title */}
        <Link href="/" className="flex flex-col">
          <Typography variant="h4" className="text-white font-bold">
            Birds Of Eden
          </Typography>
          <Typography variant="caption" className="text-gray-300 text-sm">
            LICENCE AND TRAINING CENTRE
          </Typography>
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link
            href="#"
            onClick={handleMenuOpen}
            className="text-white hover:text-yellow-300 flex items-center"
          >
            Theory Test <ArrowDropDownIcon fontSize="small" />
          </Link>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/theory/general" className="text-black">
                General Test
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/theory/special" className="text-black">
                Special Test
              </Link>
            </MenuItem>
          </Menu>
          <Link href="/course" className="text-white hover:text-yellow-300">
            Course
          </Link>
          <Link href="/blogs" className="text-white hover:text-yellow-300">
            Blog
          </Link>
          {/* Guideline with Submenu */}
          <Link
            href="#"
            onClick={handleGuidelineMenuOpen}
            className="text-white hover:text-yellow-300 flex items-center"
          >
            Guideline <ArrowDropDownIcon fontSize="small" />
          </Link>
          <Menu
            anchorEl={guidelineAnchorEl}
            open={Boolean(guidelineAnchorEl)}
            onClose={handleGuidelineMenuClose}
            MenuListProps={{ onMouseLeave: handleGuidelineMenuClose }}
            className="mt-2"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleGuidelineMenuClose}>
              <Link
                href="/guideline/overview"
                className="text-black hover:text-blue-700"
              >
                PCO Application
              </Link>
            </MenuItem>
            <MenuItem onClick={handleGuidelineMenuClose}>
              <Link
                href="/guideline/rules"
                className="text-black hover:text-yellow-300"
              >
                PCO Medical
              </Link>
            </MenuItem>
            <MenuItem onClick={handleGuidelineMenuClose}>
              <Link
                href="/guideline/safety"
                className="text-black hover:text-yellow-300"
              >
                PCO Renewals
              </Link>
            </MenuItem>
            <MenuItem onClick={handleGuidelineMenuClose}>
              <Link
                href="/guideline/faq"
                className="text-black hover:text-yellow-300"
              >
                CRB (DBS)
              </Link>
            </MenuItem>
            <MenuItem onClick={handleGuidelineMenuClose}>
              <Link
                href="/guideline/faq"
                className="text-black hover:text-yellow-300"
              >
                Topographical Test
              </Link>
            </MenuItem>
          </Menu>

          <Link href="/about-us" className="text-white hover:text-yellow-300">
            About Us
          </Link>
          <Link href="/contacts" className="text-white hover:text-yellow-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-24 left-0 w-full bg-blue-800 text-white py-4 space-y-4`}
        >
          <Link
            href="/"
            className="block text-white hover:text-yellow-300 px-4"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/theory"
            className="block text-white hover:text-yellow-300 px-4"
            onClick={toggleMobileMenu}
          >
            Theory Test
          </Link>
          <Link
            href="/course"
            className="block text-white hover:text-yellow-300 px-4"
            onClick={toggleMobileMenu}
          >
            Course
          </Link>
          <Link
            href="/blogs"
            className="block text-white hover:text-yellow-300 px-4"
            onClick={toggleMobileMenu}
          >
            Blog
          </Link>
          <Link
            href="/guideline"
            className="block text-white hover:text-yellow-300 px-4"
            onClick={toggleMobileMenu}
          >
            Guideline
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-yellow-300 px-4"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-yellow-300 px-4"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>
        </div>

        {/* Login and Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button
            variant="outlined"
            className="border-white text-white hover:bg-white hover:text-blue-800 text-lg rounded-lg px-4"
          >
            Login
          </Button>
          <Button
            variant="contained"
            className="bg-emerald-700 text-white text-lg hover:bg-emerald-800 rounded-lg px-4"
          >
            Sign Up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
