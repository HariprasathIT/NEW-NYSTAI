import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";


const Productpage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchCategory();
  }, [id]);

  const fetchCategory = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.nystai.in/api/categories/list`);
      const data = await res.json();

      const selected = data.find((cat) => cat.id == id);
      setCategory(selected);
    } catch (error) {
      console.error("Error loading category:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  if (!category)
    return <div className="p-10 text-center text-red-500">Category not found</div>;


  return (
    <div className="">

      {/* CATEGORY BANNER */}
      <div className="w-full">
        <img
          src={category.bannerUrl}
          alt={category.name}
          className="
      w-full 
      h-[70dvh] sm:h-[60dvh] md:h-[70dvh] lg:h-[98vh]
      object-cover 
      rounded-b-[20px]
    "
        />
      </div>


      <div className="max-w-[1540px] mx-auto px-4 py-5 md:py-16">
        {/* CATEGORY TITLE */}
        <h1 className="sm:text-2xl text-[18px] font-bold text-[#dc3545] tracking-wide">{category.name}</h1>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5 sm:mt-10">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl transition border border-[#f0f0f0] hover:scale-[1.02] duration-300"
            >
              <ProductImageSlider images={product.images} productId={product.id} />
              <div className="flex justify-between items-center w-full p-5">
                {/* LEFT TEXT */}
                <div>
                  <h2 className="text-[15px] sm:text-[18px] leading-snug tracking-wide">{product.name}</h2>
                  <p className="text-gray-500 text-[12px] sm:text-[13px] leading-loose">{product.subName}</p>
                </div>

                {/* RIGHT BUTTON */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex items-center bg-[#dc3545] hover:bg-[#bb2d3b] transition-all duration-200 
             text-white px-3 py-1.5 rounded-[15px] whitespace-nowrap text-[12px]"
                >
                  Quick View
                  <ArrowRight className="h-4" />
                </button>


              </div>

            </div>
          ))}
        </div>

      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={Boolean(selectedProduct)}   // <<< IMPORTANT
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
};

export default Productpage;





const ProductImageSlider = ({ images, productId }) => {
  const [isHovered, setIsHovered] = useState(false);

  // FILTER ONLY GALLERY IMAGES (or cover + gallery, your choice)
  const galleryImages = (images || []).filter(
    (img) => img.type === "gallery" || img.type === "cover"
  );

  const nextBtnClass = `next-btn-${productId}`;
  const prevBtnClass = `prev-btn-${productId}`;

  const hasMultipleImages = galleryImages.length > 1;

  return (
    <div
      className="relative bg-[#f0f0f0] h-[320px] w-full rounded-t-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.${nextBtnClass}`,
          prevEl: `.${prevBtnClass}`,
        }}
        loop={hasMultipleImages}
        slidesPerView={1}
        spaceBetween={0}
        allowTouchMove={true}
        className="h-full flex items-center justify-center"
      >
        {galleryImages.length > 0 ? (
          galleryImages.map((img, index) => (
            <SwiperSlide key={`${productId}-${index}`}>
              <div className="w-full h-[320px] flex items-center justify-center">
                <img
                  src={img.imageUrl}
                  alt={`${img.type}-${index}`}
                  className={`h-[190px] w-auto object-contain transition-transform duration-300 ease-in-out ${isHovered ? "scale-110" : "scale-100"
                    }`}
                />

              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="w-full h-[320px] flex items-center justify-center">
              <p className="text-gray-400">No images available</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* ARROWS */}
      {hasMultipleImages && (
        <>
          <button
            className={`${prevBtnClass} absolute left-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <ChevronLeft size={20} className="text-black" />
          </button>

          <button
            className={`${nextBtnClass} absolute right-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <ChevronRight size={20} className="text-black" />
          </button>
        </>
      )}
    </div>
  );
};


import { Modal, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProductModal = ({ product, onClose, open }) => {
  const galleryImages = (product.images || []).filter(
    (img) => img.type === "gallery" || img.type === "cover"
  );

  const smartFeatures = (product.images || []).filter(
    (img) => img.type === "smartIcon"
  );
  // State for selected image (default to first image)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Prevent body scroll when modal is open
  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [open]);

  // Reset to first image when modal opens
  useEffect(() => {
    if (open) {
      setSelectedImageIndex(0);
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        backdropFilter: "blur(2px)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95%", sm: "90%", md: "85%", lg: "75%" },
          maxHeight: "95vh",
          overflowY: "auto",
          bgcolor: "#fff",
          borderRadius: "16px",
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* CLOSE BUTTON */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 12, right: 12, bgcolor: "#eee", zIndex: 10 }}
        >
          <CloseIcon />
        </IconButton>

        {/* SECTION 1: IMAGE GALLERY & PRODUCT INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* LEFT: IMAGE GALLERY */}
          <div className="space-y-4">
            {/* MAIN IMAGE DISPLAY */}
            <div className="w-full h-[400px] bg-[#f9f9f9] rounded-xl flex justify-center items-center overflow-hidden">
              {galleryImages.length > 0 ? (
                <img
                  src={galleryImages[selectedImageIndex]?.imageUrl}
                  alt={`main-image`}
                  className="h-[300px] w-auto object-contain"
                />
              ) : (
                <p className="text-gray-400">No images available</p>
              )}
            </div>

            {/* THUMBNAIL IMAGES */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-[136px] h-[136px] bg-[#f9f9f9] rounded-lg border-[1px] flex items-center justify-center cursor-pointer transition ${selectedImageIndex === index
                    ? "border-[#ffc107]"
                    : "border-gray-200 hover:border-[#ffc107]"
                    }`}
                >
                  <img
                    src={img.imageUrl}
                    alt={`thumb-${index}`}
                    className="h-[80px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT DETAILS */}
          <div className="space-y-5">

            {/* PRODUCT NAME */}
            <h2 className="text-3xl font-extrabold text-[#0c2239] leading-normal tracking-tight">
              {product.name}
            </h2>

            {/* SMART FEATURES SECTION */}
            {smartFeatures.length > 0 && (
              <div className="mt-3">
                <h3 className="text-[17px] font-semibold mb-3">Smart Features:</h3>

                <div className="flex gap-6 flex-wrap social-links">
                  {smartFeatures.map((icon) => (
                    <div key={icon.id} className="flex flex-col items-center">
                      <img
                        src={icon.imageUrl}
                        className="h-10 w-auto"
                        alt={icon.text || "smart feature"}
                      />
                      <p className="text-xs mt-1 uppercase tracking-wide text-gray-600">
                        {icon.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* MAIN DESCRIPTION */}
            {product.mainDesc && (
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {product.mainDesc}
              </p>
            )}

            {/* KEY FEATURES */}
            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div className="">
                <h3 className="text-lg font-semibold mb-3">
                  Key Features:
                </h3>

                <ul className="space-y-3">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#ffc107] text-lg font-bold">✔</span>
                      <p className="text-gray-700 text-[15px] leading-relaxed">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>


        </div>


      </Box>
    </Modal>
  );
};