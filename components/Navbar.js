import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/img/logo.jpg";
import { useState, useContext } from "react";
import {
  SearchIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { BiUser } from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";
import MiniCart from "./MiniCart";
import { CartContext } from "../context/ShopContext";
import Search from "../components/Search";
import wishlist from "../pages/wishlist";

export default function Navbar() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.quantity);
  });
  let { t } = useTranslation("common");

  return (
    <header className="sticky top-0 z-20 border-b bg-white">
      <nav className="lg:max-w-screen-1.5xl mx-auto flex max-w-6xl items-center justify-between px-4 pt-4 pb-2 transition-opacity duration-1000 ease-in-out">
        {showSearch ? (
          <Search
            className="transition-opacity delay-75 duration-1000 ease-in-out"
            showSearch={() => setShowSearch(!showSearch)}
          />
        ) : (
          false
        )}
        <div className="header-col hidden flex-auto justify-start md:flex">
          <div className="header-search pr-4">
            <SearchIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            />
          </div>
          <div className="header-account">
            <Link legacyBehavior href="/my-account" passHref>
              <BiUser className="h-6 w-6 cursor-pointer" />
            </Link>
          </div>
          <div className="header-nav-wrapper flex-auto text-right">
            <ul className="inline-flex">
              <Link legacyBehavior href="/" passHref>
                <a className="border-b-4 border-white px-4 transition duration-300 focus:border-b-2 focus:border-red focus:text-red  focus:ease-in-out active:text-red">
                  {t("menu.home")}
                </a>
              </Link>
              <Link legacyBehavior href="/about" passHref>
                <a className="border-b-4 border-white px-4 transition duration-300 focus:border-b-2 focus:border-red focus:text-red  focus:ease-in-out active:text-red">
                  {t("menu.about")}
                </a>
              </Link>
              <Link legacyBehavior href="/product" passHref>
                <a className="border-b-4 border-white px-4 transition duration-300 focus:border-b-2 focus:border-red focus:text-red  focus:ease-in-out active:text-red">
                  {t("menu.product")}
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="header-col flex-auto sm:text-left md:text-center">
          <Link legacyBehavior href="/" passHref>
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
        <div className="header-col hidden flex-auto items-center justify-end md:flex">
          <div className="header-nav-wrapper flex-auto text-left">
            <ul className="inline-flex">
              <Link legacyBehavior href="/news" passHref>
                <a className="border-b-4 border-white px-4 transition duration-300 focus:border-b-2 focus:border-red focus:text-red  focus:ease-in-out active:text-red">
                  {t("menu.news")}
                </a>
              </Link>
              <Link legacyBehavior href="/contacts" passHref>
                <a className="border-b-4 border-white px-4 transition duration-300 focus:border-b-2 focus:border-red focus:text-red  focus:ease-in-out active:text-red">
                  {t("menu.contacts")}
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="header-wishlist pr-4">
          <Link legacyBehavior href="/wishlist" passHref>
            <HeartIcon className="h-6 w-6 cursor-pointer" />
          </Link>
        </div>
        <div
          className="header-cart flex w-10 cursor-pointer"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingBagIcon className="h-6 w-6" />
          {!cartQuantity ? null : (
            <p className="relative -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-red text-center text-xs font-bold text-white">
              {!cartQuantity ? null : cartQuantity}
            </p>
          )}
          { cartOpen && <MiniCart cart={cart} /> }
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
            <Link legacyBehavior href="/" passHref>
              <a className="px-4">{t("menu.home")}</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about" passHref>
              <a className="px-4">{t("menu.about")}</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/products" passHref>
              <a className="px-4">{t("menu.product")}</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/news" passHref>
              <a className="px-4">{t("menu.news")}</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/products" passHref>
              <a className="px-4">{t("menu.contacts")}</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
