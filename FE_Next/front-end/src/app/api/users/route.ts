import { NextResponse } from 'next/server';

export async function GET() {
  try {
      const res = await fetch("http://localhost:8000/users", {
      method: "GET",
    });
    const users = await res.json();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Lỗi lấy danh sách tài khoản người dùng' }, { status: 500 });
  }
}

export async function  POST(req: Request) {
    try{
       const body = await req.json();
        const res = await fetch("http://localhost:8000/users", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        const newUser = await res.json();
        return NextResponse.json(newUser, { status: 201 });
    }catch(error){
        return NextResponse.json({ error: 'Lỗi tạo mới thông tin tài khoản' }, { status: 500 });
    } 
} 

export async function PUT(req: Request) {
    try{
       const body = await req.json();
       const {id ,...data} = body;
        const res = await fetch(`http://localhost:8000/users/${id}`, {
          method: "PUT",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const updateUser = await res.json();
        return NextResponse.json(updateUser);
    }catch(error){
        return NextResponse.json({ error: 'Lỗi cập nhật thông tin tài khoản' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try{
        const {id} = await req.json();
        const res = await fetch(`http://localhost:8000/users/${id}`, {
          method: "DELETE",
        });
        const deleteUser = await res.json();
        return NextResponse.json(deleteUser);
    }catch(error){
        return NextResponse.json({ error: 'Lỗi xóa tài khoản' }, { status: 500 });
    }
}
