export default async function ProductTitle() {
  const productRequest = await fetch(
    `${process.env.BIGCOMMERCE_API_URL}v3/catalog/products/77`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Auth-Token": process.env.BIGCOMMERCE_API_TOKEN,
      } as HeadersInit,
      next: {
        revalidate: 30,
      },
    }
  );
  const productData = await productRequest.json();
  const name = productData.data.name;

  return <h1 className="text-2xl font-medium text-red-500">{name}</h1>;
}
