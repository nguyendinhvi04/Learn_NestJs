
'use client';

import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import ToolBar from './ToolBar';

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
    const columns = [
        { field: "id", header: "ID" },
        { field: "name", header: "Full Name" },
        { field: "email", header: "Email" },
        { field: "phone", header: "Phone" },
        { field: "password", header: "Password" },
        { field: "Role", header: "Role" },
        { field: "create_at", header: "Create date" },

    ]
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

  const handleUpdate =  async   (id: number) => {
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
          <div className='card-header'>
                    <ToolBar/>
                </div>
        <div className='card'>
            <DataTable value={users} tableStyle={{ minWidth: "50 rem" }} paginator rows={6} rowsPerPageOptions={[5, 10, 25, 50]}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
                <Column
                    header="Action"
                    body={(rowData) => (
                        <div className="flex gap-2">
                            <Button
                                icon="pi pi-pencil"
                                className="p-button-rounded p-button-success"
                                onClick={() => console.log('Edit', rowData)}
                            />
                            <Button
                                icon="pi pi-trash"
                                className="p-button-rounded p-button-danger"
                                onClick={() => console.log('Delete', rowData)}
                            />
                        </div>
                    )}
                />

            </DataTable>
        </div>
</>
    );
}
