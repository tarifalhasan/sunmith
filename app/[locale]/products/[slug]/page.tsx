import Sample from "@/components/pdf-viewer";
import getSingleProduct from "@/services/getSingleProduct";

const PDFDJ = async ({ params }: { params: { slug: string } }) => {
  const item = await getSingleProduct(params.slug);

  console.log(item.pdfUrl);
  return (
    <div>
      <Sample pdf={item.pdfUrl} />
    </div>
  );
};

export default PDFDJ;
