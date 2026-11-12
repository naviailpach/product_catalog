import type React from "react";
import { Link } from "react-router-dom";

import styles from "./CartItem.module.scss";
import IconRemove from "@assets/images/icons/remove-item.svg?react";
import IconMinus from "@assets/images/icons/minus.svg?react";
import IconPlus from "@assets/images/icons/plus.svg?react";
import { useAppDispatch } from "../../../app/hooks";
import { actions, type CartProduct } from "../../../features/cart";
import { API_URL } from "../../../shared/utils/config";

type Props = {
    item: CartProduct;
};

export const CartItem: React.FC<Props> = ({ item }) => {
    const dispatch = useAppDispatch();

    return (
        <article className={styles.item}>
            <div className={styles.itemProduct}>
                <button
                    className={styles.itemRemove}
                    onClick={() => dispatch(actions.removeItem(item.product))}
                >
                    <IconRemove className={styles.itemIconRemove} />
                </button>

                <Link
                    to={`/product/${item.product.itemId}`}
                    className={styles.itemImageWrapper}
                >
                    <img
                        src={`${API_URL}${item.product.image}`}
                        alt={item.product.name}
                        className={styles.itemImage}
                    />
                </Link>

                <Link
                    to={`/product/${item.product.itemId}`}
                    className={styles.itemTitle}
                >
                    {item.product.name}
                </Link>
            </div>

            <div className={styles.itemProductCount}>
                <div className={styles.itemCountControls}>
                    <button
                        className={styles.itemBtnCount}
                        disabled={item.count === 1}
                        onClick={() =>
                            dispatch(actions.decrementItemCount(item.product))
                        }
                    >
                        <IconMinus className={styles.itemIcon} />
                    </button>

                    <p>{item.count}</p>

                    <button
                        className={styles.itemBtnCount}
                        onClick={() =>
                            dispatch(actions.incrementItemCount(item.product))
                        }
                    >
                        <IconPlus className={styles.itemIcon} />
                    </button>
                </div>

                <div
                    className={styles.itemTotalPrice}
                >{`$${item.product.price * item.count}`}</div>
            </div>
        </article>
    );
};
