// Su Dung Sequelize de ket noi truc tiep den DB
import { NextResponse } from 'next/server';
import Product from '@/models/product';

export async function GET() {
    try {
        const products = await Product.findAll();
        return NextResponse.json(products);
    } catch (error) {
        console.error('Lỗi lấy danh sách xe:', error);
        return NextResponse.json({ error: 'Lỗi lấy danh sách xe' }, { status: 500 });
    }
}



export async function POST(req: Request) {
    try {
        const body = await req.json();
        const newProduct = await Product.create(body);
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        console.error('Lỗi tạo mới xe:', error);
        return NextResponse.json({ error: 'Lỗi tạo mới thông tin xe' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, ...data } = body;
        await Product.update(data, { where: { id } });
        const updatedProduct = await Product.findByPk(id);
        return NextResponse.json(updatedProduct);
    } catch (error) {
        console.error('Lỗi cập nhật xe:', error);
        return NextResponse.json({ error: 'Lỗi cập nhật thông tin xe' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();
        await Product.destroy({ where: { id } });
        return NextResponse.json({ message: 'Xe đã được xóa' });
    } catch (error) {
        console.error('Lỗi xóa xe:', error);
        return NextResponse.json({ error: 'Lỗi xóa thông tin xe' }, { status: 500 });
    }
}
