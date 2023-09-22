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
        revalidate: 120,
      },
    }
  );
  const productData = await productRequest.json();
  const name = productData.data.name;

<<<<<<< HEAD
  return <h1 className="text-2xl font-medium">{name}</h1>;
=======
  return <h1 className="text-2xl font-medium text-black-500">{name}</h1>;
>>>>>>> 3d2e8608093a1089bdd4c5a6ab0b7161ef3820b5
}
