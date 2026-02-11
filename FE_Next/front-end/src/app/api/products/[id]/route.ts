import { NextResponse } from 'next/server';
import Product from '@/models/product';

export async function GET( req: Request,{ params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const product = await Product.findByPk(id);
        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
        return NextResponse.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json({ error: 'Error fetching product' }, { status: 500 });
    }
}
