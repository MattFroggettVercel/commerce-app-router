export default async function AddToCart() {
  const productRequest = await fetch(
    `${process.env.BIGCOMMERCE_API_URL}v3/catalog/products/77`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Auth-Token": process.env.BIGCOMMERCE_API_TOKEN,
      } as HeadersInit,
      cache: "no-store",
    }
  );
  const productData = await productRequest.json();

  const inStock = parseInt(productData.data["inventory_level"]) > 1;

  return (
    <button
      type="submit"
      disabled={!inStock}
      className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {inStock ? "Add to cart" : "Out of stock"}
    </button>
  );
}
