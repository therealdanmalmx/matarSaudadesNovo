import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/img/logo.jpg";
import { useState } from "react";
import {
  UserCircleIcon,
  SearchIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import useTranslation from "next-translate/useTranslation";
import MiniCart from "./MiniCart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let { t } = useTranslation("common");

  return (
    <header className="sticky top-0 z-20 border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center px-4 pt-4 pb-2 lg:max-w-screen-xl">
        <div className="header-col hidden flex-auto justify-start md:flex">
          <div className="header-search pr-4">
            <SearchIcon className="h-6 w-6" />
          </div>
          <div className="header-account">
            <UserCircleIcon className="h-6 w-6" />
          </div>
          <div className="header-nav-wrapper flex-auto text-right">
            <ul className="inline-flex">
              <Link href="/" passHref>
                <a className="border-b-4 border-transparent px-4 transition duration-300 focus:border-b-4 focus:border-red focus:text-red  focus:ease-in-out active:text-red">
                  {t("menu.home")}
                </a>
              </Link>
              <Link href="/about" passHref>
                <a className="border-b-4 border-transparent px-4 transition duration-300 focus:border-b-4 focus:border-red focus:text-red  focus:ease-in-out active:text-red">
                  {t("menu.about")}
                </a>
              </Link>
              <Link href="/product" passHref>
                <a className="border-b-4 border-transparent px-4 transition duration-300 focus:border-b-4 focus:border-red focus:text-red  focus:ease-in-out active:text-red">
                  {t("menu.product")}
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="header-col flex-auto sm:text-left md:text-center">
          <Link href="/" passHref>
            <a>
              <span className="pt-1 text-lg font-bold">
                <Image
                  src={Logo}
                  alt="Matar Saudades"
                  width={187}
                  height={63}
                />
              </span>
            </a>
          </Link>
        </div>
        <div className="header-col hidden flex-auto justify-end md:flex">
          <div className="header-nav-wrapper flex-auto text-left">
            <ul className="inline-flex">
              <Link href="/news" passHref>
                <a className="border-b-4 border-transparent px-4 transition duration-300 focus:border-b-4 focus:border-red-600 focus:text-red-600  focus:ease-in-out active:text-red-600">
                  {t("menu.news")}
                </a>
              </Link>
              <Link href="/contacts" passHref>
                <a className="border-b-4 border-transparent px-4 transition duration-300 focus:border-b-4 focus:border-red-600 focus:text-red-600  focus:ease-in-out active:text-red-600">
                  {t("menu.contacts")}
                </a>
              </Link>
            </ul>
          </div>
          <div className="header-wishlist pr-4">
            <HeartIcon className="h-6 w-6" />
          </div>
          <div className="header-cart">
            <ShoppingBagIcon 
              className="h-6 w-6"
              onClick={() => setCartOpen(!cartOpen)} 
            />
            <MiniCart cart={cart} />
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "block" : "hidden"}`}>
        <ul className="block">
          <li>
            <Link href="/" passHref>
              <a className="px-4">{t("menu.home")}</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a className="px-4">{t("menu.about")}</a>
            </Link>
          </li>
          <li>
            <Link href="/products" passHref>
              <a className="px-4">{t("menu.product")}</a>
            </Link>
          </li>
          <li>
            <Link href="/news" passHref>
              <a className="px-4">{t("menu.news")}</a>
            </Link>
          </li>
          <li>
            <Link href="/products" passHref>
              <a className="px-4">{t("menu.contacts")}</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
