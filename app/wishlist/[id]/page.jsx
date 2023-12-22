import React from 'react';
import { useRouter } from 'next/router';

const ViewWishlistPage = () => {
    const router = useRouter();
    const { id } = router.query; // Get the wishlist ID from the URL

    return (
        <div>
            <h1>View Wishlist: {id}</h1>
            {/* Display wishlist details here */}
        </div>
    );
};

export default ViewWishlistPage;
