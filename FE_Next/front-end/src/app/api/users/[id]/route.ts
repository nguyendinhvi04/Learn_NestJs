import { NextResponse } from "next/server";
import User from "@/models/user";
import Sequelize from "sequelize";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const {id} = params;
        const user = await User.findByPk(id);
        if(!user){
            return NextResponse.json({ error: 'Người dùng không tồn tại' }, { status: 404 });
        }
        return NextResponse.json(user);

    }catch(error){
        console.error('Lỗi lấy thông tin người dùng:', error);
        return NextResponse.json({ error: 'Lỗi lấy thông tin người dùng' }, { status: 500 });
    }
}