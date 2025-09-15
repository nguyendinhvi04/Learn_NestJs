
'use client';

import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
}

export default function UsersList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            setError('Bị lỗi khi tải danh sách người dùng');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const res = await fetch('/api/users', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            fetchUsers();
        } catch (err) {
            setError('Lỗi khi xóa người dùng');
        }
    };

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>Lỗi: {error}</div>;

    return (
        <>
            <section className="bg-[#051622] text-white px-12 py-16">
                <h2 className="text-2xl font-bold mb-8">Users</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {users.map((user) => (
                        <div key={user.id} className="overflow-hidden rounded-lg shadow-lg bg-gray-800 p-6">
                            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
                            <p className="text-sm text-gray-300 mb-1">Email: {user.email}</p>
                            <p className="text-sm text-gray-300">Phone: {user.phone}</p>
                            <p className="text-sm text-gray-300">Role: {user.role}</p>
                            <p className="text-sm text-gray-300">ID: {user.id}</p>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => handleUpdate(user.id)}
                                className="mt-2 ml-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );

    async function handleUpdate(id: number) {
        try {
            const updatedUser = {
                id,
                name: 'Updated Name',
                email: 'updated@example.com',
                phone: '1234567890',
                role: 'user',
            };
            const res = await fetch('/api/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });
            fetchUsers();
        } catch (err) {
            setError("Lỗi khi cập nhật người dùng");
        }
    }
}
