import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Home, Factory, GraduationCap, Church, Video, Warehouse, Hospital, Building2, ShoppingCart, CarFront } from "lucide-react";
import { Drawer, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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

  // Mobile drawer states
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

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
      const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
      setCategories(sorted);
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

  const closeAllMenus = () => {
    setProductsMegaMenuOpen(false);
    setSolutionsMegaMenuOpen(false);
    setOpen(false);
    setMobileProductsOpen(false);
    setMobileSolutionsOpen(false);
  };

  // Products mega menu handlers (Desktop)
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

  // Solutions mega menu handlers (Desktop)
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

  // Toggle mobile dropdowns
  const toggleMobileProducts = () => {
    setMobileProductsOpen(!mobileProductsOpen);
    setMobileSolutionsOpen(false);
  };

  const toggleMobileSolutions = () => {
    setMobileSolutionsOpen(!mobileSolutionsOpen);
    setMobileProductsOpen(false);
  };

  return (
    <>
      {/* Blur Overlay for Desktop */}
      {isMegaMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={closeAllMenus}
        />
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled || isMegaMenuOpen ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-[1540px] mx-auto py-4 px-4 grid grid-cols-12 items-center">
          {/* Logo */}
          <div className="col-span-2 flex items-center">
            <Link to="/" onClick={closeAllMenus}>
              <img src={nyslogo} alt="NYS Logo" className="md:h-[50px] w-full" />
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
                  className="
                    text-[12px]        /* mobile */
                    sm:text-[13px]     /* small devices */
                    md:text-[12px]     /* tablets */
                    lg:text-[12px]     /* laptops */
                    xl:text-[15px]     /* large screens */
                    transition
                    hover:text-[#dc3545]
                  "
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
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden col-span-10 flex justify-end"
            onClick={() => setOpen(true)}
          >
            <Menu size={15} className="text-black" />
          </button>
        </div>

        {/* Desktop Products Mega Menu */}
        {productsMegaMenuOpen && (
          <div
            className="hidden md:block absolute left-0 w-full bg-white shadow-lg"
            style={{ top: "100%", borderRadius: "0px 0px 20px 20px", borderTop: "1px solid #00000021" }}
            onMouseEnter={handleProductsMegaMenuMouseEnter}
            onMouseLeave={handleProductsMegaMenuMouseLeave}
          >
            <div className="max-w-[1540px] mx-auto py-5 px-4">
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

        {/* Desktop Solutions Mega Menu */}
        {solutionsMegaMenuOpen && (
          <div
            className="hidden md:block absolute left-0 w-full bg-white shadow-lg"
            style={{ top: "100%", borderRadius: "0px 0px 20px 20px", borderTop: "1px solid #00000021" }}
            onMouseEnter={handleSolutionsMegaMenuMouseEnter}
            onMouseLeave={handleSolutionsMegaMenuMouseLeave}
          >
            <div className="max-w-[1540px] mx-auto py-5 px-4">
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
                          className="uppercase bg-[#fff] rounded-lg overflow-hidden hover:shadow-md transition-shadow h-[50px] flex gap-4 p-4 items-center border border-gray-100"
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

      {/* MUI Mobile Drawer */}
      <Drawer
        open={open}
        onClose={closeAllMenus}
        className="md:hidden"
        PaperProps={{
          sx: {
            width: 320,
          }
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src={nyslogo} alt="NYS Logo" className="h-[40px]" />
          <button onClick={closeAllMenus}>
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Drawer Content */}
        <List className="flex-1 overflow-y-auto">
          {/* Products Dropdown */}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleMobileProducts}>
              <ListItemText
                primary="PRODUCTS"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.5px'
                }}
              />
              <ChevronDown
                size={20}
                className={`text-orange-500 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItemButton>
          </ListItem>

          <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className="bg-gray-50">
              {loading ? (
                <div className="py-4 text-center text-gray-500 text-sm">Loading...</div>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <ListItem key={category.id} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={`/category/${category.id}`}
                      onClick={closeAllMenus}
                      sx={{ pl: 4 }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {category.iconUrl ? (
                          <img
                            src={category.iconUrl}
                            alt={category.name}
                            className="h-5 w-5 object-contain"
                          />
                        ) : (
                          <div className="h-5 w-5 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-gray-500 text-xs">?</span>
                          </div>
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={category.name}
                        primaryTypographyProps={{
                          fontSize: '13px',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))
              ) : (
                <div className="py-4 text-center text-gray-500 text-sm">No categories</div>
              )}
            </List>
          </Collapse>

          {/* Integrated Solutions Dropdown */}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleMobileSolutions}>
              <ListItemText
                primary="INTEGRATED SOLUTIONS"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.5px'
                }}
              />
              <ChevronDown
                size={20}
                className={`text-orange-500 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItemButton>
          </ListItem>

          <Collapse in={mobileSolutionsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className="bg-gray-50">
              {solutions.map((solution) => {
                const IconComponent = solution.icon;
                return (
                  <ListItem key={solution.id} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={solution.path}
                      onClick={closeAllMenus}
                      sx={{ pl: 4 }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <IconComponent size={20} className="text-[#dc3545]" />
                      </ListItemIcon>
                      <ListItemText
                        primary={solution.name}
                        primaryTypographyProps={{
                          fontSize: '13px',
                          textTransform: 'uppercase'
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>

          {/* Other Menu Items */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/protect" onClick={closeAllMenus}>
              <ListItemText
                primary="PROTECT PLAN"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.5px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/service" onClick={closeAllMenus}>
              <ListItemText
                primary="SERVICE"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.5px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/support" onClick={closeAllMenus}>
              <ListItemText
                primary="SUPPORT"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.5px'
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;