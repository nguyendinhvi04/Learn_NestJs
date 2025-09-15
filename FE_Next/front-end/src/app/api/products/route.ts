import { NextResponse } from 'next/server';

export async function GET() { 
   try{
      const res = await fetch("http://localhost:8000/products", {
        method: "GET",
        });
        if (!res.ok) {
            throw new Error('Lỗi kết nối server');
        }
        const products = await res.json();
        return NextResponse.json(products);
    
   }
    catch(error){ 
        return NextResponse.json({ error: 'Lỗi lấy danh sách xe' }, { status: 500 });
    }
} 

export async function  POST(req: Request) {
    try{
       const body = await req.json();
        const res = await fetch("http://localhost:8000/products", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
            throw new Error('Lỗi kết nối server');
        }
        const newProduct = await res.json();
        return NextResponse.json(newProduct, { status: 201 });
    }catch(error){
        return NextResponse.json({ error: 'Lỗi tạo mới thông tin xe' }, { status: 500 });
    } 
} 

export async function PUT(req: Request) {
    try{
       const body = await req.json();
       const {id ,...data} = body;
        const res = await fetch(`http://localhost:8000/products/${id}`, {
          method: "PUT",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }); 
        if (!res.ok) {
            throw new Error('Lỗi kết nối server');
        }
        const updateProduct = await res.json();
        return NextResponse.json(updateProduct);
    }
    catch(error){
        return NextResponse.json({ error: 'Lỗi cập nhật thông tin xe' }, { status: 500 });
    } 
} 

export async function DELETE(req: Request) {
    try{
        const {id} = await req.json();
        const res = await fetch(`http://localhost:8000/products/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
            throw new Error('Lỗi kết nối server');
        }
        const deleteProduct = await res.json();
        return NextResponse.json(deleteProduct);
    }catch(error){
        return NextResponse.json({ error: 'Lỗi xóa thông tin xe' }, { status: 500 });
    } 
}