import type React from "react";

import styles from "./CartPage.module.scss";
import { Container } from "../../shared/components/Container";
import { Reveal } from "../../shared/ui/Reveal";
import { PageTop } from "../../shared/ui/PageTop";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Typography } from "../../shared/ui/Typography";
import { Button } from "../../shared/ui/Button";
import { Divider } from "../../shared/ui/Divider";
import { CartItem } from "./CartItem";
import { actions } from "../../features/cart";

export const CartPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.cart);

    const totalSum = items.reduce(
        (sum, item) => sum + item.product.price * item.count,
        0,
    );

    const handleCheckout = () => {
        const isConfirmed = confirm(
            "Checkout is not implemented yet. Do you want to clear the cart?",
        );

        if (isConfirmed) {
            dispatch(actions.clearCart());
        }
    };

    return (
        <Container>
            <Reveal>
                <PageTop title="Cart" showBack />
            </Reveal>

            <div className={styles.cart}>
                {items.length === 0 ? (
                    <Reveal className={styles.cartMessage}>
                        <Typography variant="h2">Your cart is empty</Typography>
                    </Reveal>
                ) : (
                    <Reveal className={styles.cartListWrapper}>
                        <div className={styles.cartList}>
                            {items.map((item) => (
                                <CartItem key={item.product.id} item={item} />
                            ))}
                        </div>
                    </Reveal>
                )}

                <Reveal className={styles.cartTotalWrapper}>
                    <div className={styles.cartTotal}>
                        <div className={styles.cartSum}>
                            <div
                                className={styles.cartSumTitle}
                            >{`$${totalSum}`}</div>

                            <p className={styles.cartItemsTotal}>
                                {`Total for ${items.length} items`}
                            </p>
                        </div>

                        <Divider />

                        <Button
                            className={styles.cartBtnCheckout}
                            disabled={items.length === 0}
                            onClick={handleCheckout}
                        >
                            Checkout
                        </Button>
                    </div>
                </Reveal>
            </div>
        </Container>
    );
};
