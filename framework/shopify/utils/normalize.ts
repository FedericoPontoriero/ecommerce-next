import { ImageEdge, MoneyV2, Product as ShopifyProduct } from "../schema";
import { Product } from "@common/types/product";

export function normalizeProductImages({ edges }: { edges: ImageEdge[] }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
}

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  };
};

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    images: imageConnection,
    vendor,
    description,
    priceRange,
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
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}
