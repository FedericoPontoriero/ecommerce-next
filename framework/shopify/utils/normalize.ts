import { ImageEdge, Product as ShopifyProduct } from "../schema";

export function normalizeProductImages({ edges }: { edges: ImageEdge[] }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
}

export function normalizeProduct(productNode: ShopifyProduct): any {
  const {
    id,
    title: name,
    handle,
    images: imageConnection,
    vendor,
    description,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""), // it removes slashes from beginning and end
    images: normalizeProductImages(imageConnection),
    ...rest,
  };

  return product;
}
