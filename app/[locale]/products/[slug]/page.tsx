import ProductDetails from "@/components/pdf-viewer";
import getSingleProduct from "@/services/getSingleProduct";

const PDFDJ = async ({ params }: { params: { slug: string } }) => {
  const item = await getSingleProduct(params.slug);
  console.log(item?.pdfUrl);
  return (
    <div>
      <ProductDetails pdf={item?.pdfUrl || "/v3-mix.pdf"} />
    </div>
  );
};

export default PDFDJ;
