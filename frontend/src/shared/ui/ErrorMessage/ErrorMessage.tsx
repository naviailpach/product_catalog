import type React from "react";

import styles from "./ErrorMessage.module.scss";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { useAppDispatch } from "../../../app/hooks";
import { fetchProducts } from "../../../features/products";

export const ErrorMessage: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.error}>
            <Typography variant="h2">Someting went wrong...</Typography>

            <Button
                onClick={() => dispatch(fetchProducts())}
                className={styles.errorBtn}
            >
                Reload
            </Button>
        </div>
    );
};
