import Footer from "./component/footer";
import Navbar from "./component/navbar";
export default function Bot() {
  const products = [
    {
      id: 1,
      head: "Basic ",
      href: "#",
      imageSrc: "/2 1.png",
      data: " Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
    },
    {
      id: 2,
      head: "Basic ",
      href: "#",
      imageSrc: "/2 1.png",
      data: " Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
    },
    {
      id: 3,
      head: "Basic ",
      href: "#",
      imageSrc: "/2 1.png",
      data: " Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
    },
    {
      id: 4,
      head: "Basic ",
      href: "#",
      imageSrc: "/2 1.png",
      data: " Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
    },
    {
      id: 5,
      head: "Basic ",
      href: "#",
      imageSrc: "/2 1.png",
      data: " Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
    },
    {
      id: 6,
      head: "Basic ",
      href: "#",
      imageSrc: "/2 1.png",
      data: " Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
    },
  ];
  return (
    <div className="">
      <Navbar />
      <div className="pt-32 mx-32">
        <p className="text-3xl">News </p>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.head}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
