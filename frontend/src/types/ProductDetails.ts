export type DescriptionProduct = {
    title: string;
    text: string[];
};

type BaseDetails = {
    productId: number;
    namespaceId: string;
    capacityAvailable: string[];
    colorsAvailable: string[];
    images: string[];
    description: DescriptionProduct[];
};

export type PhoneDetails = BaseDetails & {
    resolution: string;
    processor: string;
    camera: string;
    zoom: string;
    cell: string[];
};

export type TabletDetails = BaseDetails & {
    resolution: string;
    processor: string;
    camera: string;
    zoom: string;
};

export type AccessoryDetails = BaseDetails & {
    resolution: string;
    processor: string;
};

export type ProductDetails = PhoneDetails | TabletDetails | AccessoryDetails;
