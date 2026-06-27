import prisma from '../config/db.js';

const createproduct = async (productData) => {
    const product = await prisma.product.create({
        data: productData,
    });
    return product;
};

const fetchproducts = async () => {
    const products = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return products;
};

export { createproduct, fetchproducts };
    