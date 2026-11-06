import type { Product } from "../../../types/Product";
import type { ProductDetails } from "../../../types/ProductDetails";

type Spec = {
    translationKey: string;
    value: string;
};

export const getSpecs = (
    product: Product,
    productDetails: ProductDetails,
): Spec[] => [
    {
        translationKey: "Screen",
        value: product.screen,
    },

    {
        translationKey: "Resolution",
        value: productDetails.resolution,
    },

    {
        translationKey: "Processor",
        value: productDetails.processor,
    },

    {
        translationKey: "RAM",
        value: product.ram,
    },
];

export const getFullSpecs = (
    product: Product,
    productDetails: ProductDetails,
): Spec[] => {
    const specs: Spec[] = [
        { translationKey: "Screen", value: product.screen },
        { translationKey: "Resolution", value: productDetails.resolution },
        { translationKey: "Processor", value: productDetails.processor },
        { translationKey: "RAM", value: product.ram },
        {
            translationKey: "Built in memory",
            value: product.capacity,
        },
    ];

    if ("camera" in productDetails) {
        specs.push(
            { translationKey: "Camera", value: productDetails.camera },
            { translationKey: "Zoom", value: productDetails.zoom },
        );
    }

    if ("cell" in productDetails) {
        specs.push({
            translationKey: "Cell",
            value: productDetails.cell.join(", "),
        });
    }

    return specs;
};
