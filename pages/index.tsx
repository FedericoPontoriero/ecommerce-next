import type { InferGetStaticPropsType } from "next";

import getAllProducts from "@framework/product/get-all-products";
import { Layout } from "@components/common";
import { getConfig } from "@framework/api/config";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

export async function getStaticProps() {
    const config = getConfig();
    const products = await getAllProducts(config);

    return {
        props: {
            products,
        },
        revalidate: 4 * 60 * 60,
    };
}

export default function Home({
    products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Grid>
                {products.slice(0, 3).map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </Grid>
            <Hero
                headline="Cookies, ice cream, and muffin"
                description="aosenurr roasetrusnoterun oasenutrasonetru aoersutrsonetur aoesutrasonteursanoetrusnaoerusnaroe aroeuntaoreuteora traeousntrsanu arentuasoeutras utesanoterus.,glphcaenutrasnt r"
            />
            <Marquee>
                {products.slice(0, 3).map((product) => (
                    <ProductCard variant="slim" product={product} key={product.id} />
                ))}
            </Marquee>
            <Grid layout="B">
                {products.slice(0, 3).map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </Grid>
            <Marquee variant="secondary">
                {products.slice(0, 3).map((product) => (
                    <ProductCard variant="slim" product={product} key={product.id} />
                ))}
            </Marquee>
        </>
    );
}

Home.Layout = Layout;
