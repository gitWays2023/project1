import ProductParents from "@/components/allProducts/ProductParents";
import Footer from "@/components/Footer";
import NavContainer from "@/components/navSection/NavContainer";
import Image from "next/image";

export default function Home() {

  return (
  <div>

<NavContainer />
<ProductParents />
<Footer />
  </div>
  ); 
}
