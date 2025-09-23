import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    // img: string;
}

export default function UsersView() {
    const [cars, setCars] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCars = async () => {
        try {
            const res = await fetch('/api/products');
            const data = await res.json();
            setCars(data);
        } catch (err) {
            setError('Bị lỗi khi tải danh sách xe');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    if (loading) return <div>Đang tải danh sách xe...</div>;
    if (error) return <div>Lỗi: {error}</div>;

    const itemTemplate = (user: User, index: number) => {
        return (
            <div className="col-12" key={car.id}>
                <div
                    className={classNames(
                        'flex flex-column xl:flex-row xl:align-items-start p-4 gap-4',
                        { 'border-top-1 surface-border': index !== 0 }
                    )}
                >
                    {/* <img
                        className="w-9 sm:w-16rem xl:w-10rem shadow-2 block mx-auto border-round"
                        src={user.image}
                        alt={user.name}
                    /> */}
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            {/* <div className="text-2xl font-bold text-900">{car.name}</div>
                            {user.category && (
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{car.category}</span>
                                </span>
                            )} */}
                            <span >{user.role}</span>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">~{car.price /1000000} M</span>
                            <Button
                                icon="pi pi-shopping-cart"
                                className="p-button-rounded"
                                disabled={car.stock === 'OUTOFSTOCK'}
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const listTemplate = (items: Car[]) => {
        if (!items || items.length === 0) return <div>Không có xe nào</div>;

        return <div className="grid grid-nogutter">{items.map(itemTemplate)}</div>;
    };

    return (
        <div className="card">
            <DataView value={cars} listTemplate={listTemplate} paginator rows={5} />
        </div>
    );
}
