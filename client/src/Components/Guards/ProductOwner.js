import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useProductContext } from '../../contexts/ProductContext';
export const ProductOwner = ({
    children,
}) => {
    const { productId } = useParams();
    const { getProduct } = useProductContext();
    const { userId } = useAuthContext();

    const currentProduct = getProduct(productId);

    if (currentProduct && currentProduct._ownerId !== userId) {
        return <Navigate to={`/products/${productId}`} replace />
    }

    return children ? children : <Outlet />
};