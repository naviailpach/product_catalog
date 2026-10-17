import phonesImg from "../../../../../assets/images/categories/phones.png";
import tabletsImg from "../../../../../assets/images/categories/tablets.png";
import accessoriesImg from "../../../../../assets/images/categories/accessories.png";

export interface CategoryItem {
    title: string;
    image: string;
    category: string;
    link: string;
}

export const CATEGORIES_CARDS: CategoryItem[] = [
    {
        title: "Mobile phones",
        image: phonesImg,
        category: "phones",
        link: "/phones",
    },

    {
        title: "Tablets",
        image: tabletsImg,
        category: "tablets",
        link: "/tablets",
    },

    {
        title: "Accessories",
        image: accessoriesImg,
        category: "accessories",
        link: "/accessories",
    },
];
