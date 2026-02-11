import { NextResponse } from 'next/server';
import User from '@/models/user';
import Sequelize from 'sequelize';

export async function GET() {
  try {
    const users = await User.findAll();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Lỗi lấy danh sách người dùng:', error);
    return NextResponse.json({ error: 'Lỗi lấy danh sách tài khoản người dùng' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newUser = await User.create(body);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Lỗi tạo mới người dùng:', error);
    return NextResponse.json({ error: 'Lỗi tạo mới thông tin tài khoản' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...data } = body;
    await User.update(data, { where: { id } });
    const updatedUser = await User.findByPk(id);
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Lỗi cập nhật người dùng:', error);
    return NextResponse.json({ error: 'Lỗi cập nhật thông tin tài khoản' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await User.destroy({ where: { id } });
    return NextResponse.json({ message: 'Người dùng đã được xóa' });
  } catch (error) {
    console.error('Lỗi xóa người dùng:', error);
    return NextResponse.json({ error: 'Lỗi xóa tài khoản' }, { status: 500 });
  }
}
