import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MessageCircle, ChevronDown, ShoppingBasket, Home, Factory, GraduationCap, Church, Video, Warehouse, Hospital, Building2, ShoppingCart, CarFront } from "lucide-react";
import { Link } from "react-router-dom";
import nyslogo from "../../assets/nyslogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsMegaMenuOpen, setProductsMegaMenuOpen] = useState(false);
  const [solutionsMegaMenuOpen, setSolutionsMegaMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const productsTimeoutRef = useRef(null);
  const solutionsTimeoutRef = useRef(null);

  // Solutions data with icons
  const solutions = [
    { id: 1, name: "Smart Home", path: "/solutions/smarthome", icon: Home },
    { id: 2, name: "Industrial", path: "/solutions/industrial", icon: Factory },
    { id: 3, name: "Education", path: "/solutions/education", icon: GraduationCap },
    { id: 4, name: "Worship", path: "/solutions/worship", icon: Church },
    { id: 5, name: "VMS", path: "/solutions/vms", icon: Video },
    { id: 6, name: "Warehouse", path: "/solutions/warehouse", icon: Warehouse },
    { id: 7, name: "Hospital", path: "/solutions/hospital", icon: Hospital },
    { id: 8, name: "Banking", path: "/solutions/banking", icon: Building2 },
    { id: 9, name: "Retail", path: "/solutions/retail", icon: ShoppingCart },
    { id: 10, name: "Parking IoT Solution", path: "/solutions/parking", icon: CarFront },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.nystai.in/api/categories/list");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const navLinks = [
    { name: "Products", path: "/", dropdown: true, hasMegaMenu: true, type: "products" },
    { name: "Integrated Solutions", path: "/", dropdown: true, hasMegaMenu: true, type: "solutions" },
    { name: "Protect Plan", path: "/protect" },
    { name: "Service", path: "/service" },
    { name: "Support", path: "/support" },
  ];

  // Close all menus function
  const closeAllMenus = () => {
    setProductsMegaMenuOpen(false);
    setSolutionsMegaMenuOpen(false);
    setOpen(false);
  };

  // Products mega menu handlers
  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setSolutionsMegaMenuOpen(false);
    setProductsMegaMenuOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsMegaMenuOpen(false);
    }, 100);
  };

  const handleProductsMegaMenuMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
  };

  const handleProductsMegaMenuMouseLeave = () => {
    setProductsMegaMenuOpen(false);
  };

  // Solutions mega menu handlers
  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setProductsMegaMenuOpen(false);
    setSolutionsMegaMenuOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsMegaMenuOpen(false);
    }, 100);
  };

  const handleSolutionsMegaMenuMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
  };

  const handleSolutionsMegaMenuMouseLeave = () => {
    setSolutionsMegaMenuOpen(false);
  };

  const isMegaMenuOpen = productsMegaMenuOpen || solutionsMegaMenuOpen;

  return (
    <>
      {/* Blur Overlay */}
      {isMegaMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={closeAllMenus}
        />
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled || isMegaMenuOpen ? "bg-white shadow-md" : "bg-transparent"} `}
      >
        <div className="max-w-[1540px] mx-auto py-4 px-4 grid grid-cols-12 items-center">

          {/* Logo */}
          <div className="col-span-2 flex items-center">
            <Link to="/" onClick={closeAllMenus}>
              <img src={nyslogo} alt="Logo" className="md:h-[35px] w-full" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex col-span-8 space-x-8 font-medium 
            ${scrolled || isMegaMenuOpen ? "text-gray-800" : "text-black"}`}
            style={{ justifyContent: "space-around" }}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="uppercase flex items-center gap-1 tracking-wide relative"
                onMouseEnter={
                  link.type === "products"
                    ? handleProductsMouseEnter
                    : link.type === "solutions"
                      ? handleSolutionsMouseEnter
                      : undefined
                }
                onMouseLeave={
                  link.type === "products"
                    ? handleProductsMouseLeave
                    : link.type === "solutions"
                      ? handleSolutionsMouseLeave
                      : undefined
                }
              >
                <Link
                  to={link.path}
                  className="transition hover:text-[#dc3545]"
                  onClick={closeAllMenus}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <ChevronDown size={18} className="text-black" />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex col-span-2 justify-end items-center space-x-5">
            <a
              href="https://wa.me/8189977700"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#dc3545] text-white w-[60px] h-[30px] rounded-full flex items-center justify-center 
             hover:bg-black transition duration-300"
            >
              <Phone size={15} />
            </a>


            {/* <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={23} className="text-black hover:text-[#dc3545] transition" />
            </a>

            <Link to="/cart" onClick={closeAllMenus}>
              <ShoppingBasket size={23} className="text-black hover:text-[#dc3545] transition" />
            </Link> */}
          </div>

          {/* Mobile Button */}
          <button className="md:hidden col-span-10 flex justify-end" onClick={() => setOpen(!open)}>
            {open ? (
              <X size={30} className={`${scrolled ? "text-black" : "text-black"}`} />
            ) : (
              <Menu size={30} className={`${scrolled ? "text-black" : "text-black"}`} />
            )}
          </button>
        </div>

        {/* Products Mega Menu */}
        {productsMegaMenuOpen && (
          <div
            className="hidden md:block absolute left-0 w-full bg-white shadow-lg"
            style={{ top: "100%", borderRadius: "0px 0px 20px 20px", borderTop: "1px solid #00000021" }}
            onMouseEnter={handleProductsMegaMenuMouseEnter}
            onMouseLeave={handleProductsMegaMenuMouseLeave}
          >
            <div className="max-w-[1540px] mx-auto py-5 ">
              <div className="grid grid-cols-12 py-3 gap-6">
                <div className="col-span-12 bg-[#fff] rounded-lg">
                  {loading ? (
                    <div className="flex items-center justify-center h-32 text-gray-500">
                      Loading...
                    </div>
                  ) : categories.length > 0 ? (
                    <div className="grid grid-cols-5 gap-4">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/category/${category.id}`}
                          onClick={closeAllMenus}
                          className="bg-[#fff] rounded-lg overflow-hidden hover:shadow-md transition-shadow h-[50px] flex gap-4 p-4 items-center border border-gray-100"
                        >
                          {category.iconUrl ? (
                            <img
                              src={category.iconUrl}
                              alt={category.name}
                              className="h-5 w-5 object-contain"
                            />
                          ) : (
                            <div className="h-5 w-5 bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-gray-400 text-xs">?</span>
                            </div>
                          )}
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">
                            {category.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-32 text-gray-500">
                      No categories available
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Solutions Mega Menu */}
        {solutionsMegaMenuOpen && (
          <div
            className="hidden md:block absolute left-0 w-full bg-white shadow-lg"
            style={{ top: "100%", borderRadius: "0px 0px 20px 20px", borderTop: "1px solid #00000021" }}
            onMouseEnter={handleSolutionsMegaMenuMouseEnter}
            onMouseLeave={handleSolutionsMegaMenuMouseLeave}
          >
            <div className="max-w-[1540px] mx-auto py-5">
              <div className="grid grid-cols-12 py-3 gap-6">
                <div className="col-span-12 bg-[#fff] rounded-lg">
                  <div className="grid grid-cols-5 gap-4">
                    {solutions.map((solution) => {
                      const IconComponent = solution.icon;
                      return (
                        <Link
                          key={solution.id}
                          to={solution.path}
                          onClick={closeAllMenus}
                          className="uppercase bg-[#fff] rounded-lg overflow-hidden hover:shadow-md transition-shadow h-[50px] flex gap-4 p-4 items-center border border-gray-100 "
                        >
                          <IconComponent size={23} className="text-[#dc3545]" />
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">
                            {solution.name}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg fixed top-[67px] left-0 w-full z-40">
          <ul className="flex flex-col space-y-4 py-5 px-6 text-gray-700 font-medium">
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-1">
                <Link
                  to={link.path}
                  onClick={closeAllMenus}
                  className="block"
                >
                  {link.name}
                </Link>
                {link.dropdown && <ChevronDown size={18} className="text-black" />}
              </li>
            ))}

            {/* Icons in Mobile */}
            <div className="flex items-center space-x-6 pt-3">
              <a href="tel:+919999999999">
                <Phone size={28} className="text-black" />
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={28} className="text-black" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;