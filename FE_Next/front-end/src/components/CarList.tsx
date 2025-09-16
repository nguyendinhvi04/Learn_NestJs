"use client"
import { useEffect, useState } from 'react';

interface Car {
    id: number;
    name: string;
    brand: string;
    model: string;
    year:  number;
    price: number;
    description: string;
    image: string;
    stock: number ;             
}

export default function CarList() {
     const [cars, setCars] = useState<Car[]>([]);
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

    useEffect (() => {
        fetchCars();
    }, [] )

    useEffect(() => {
        fetchCars();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const res = await fetch('/api/products', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            fetchCars();
        } catch (err) {
            setError('Lỗi khi xóa xe');
        }
    };

   if (loading) return <div>Đang tải danh sách xe...</div>;
    if (error) return <div>Lỗi: {error}</div>;
    return (
        <>
            <section className="bg-[#051622] text-white px-12 py-16">
                <div className="grid md:grid-cols-3 gap-8 h-full" >
                    {cars.map((car) => (
                        <div key={car.id} className="overflow-hidden rounded-lg shadow-lg  h-full">
                            <div className="p-6">
                                <img src={car.image} alt={car.name} className="w-full  object-cover mb-4 rounded" />
                                <p className="text-sm uppercase text-gray-300 mb-2">{car.description}</p>
                                <h2 className="text-4xl font-semibold">{car.name}</h2>
                                <button
                                    onClick={() => handleDelete(car.id)}
                                    className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => handleUpdate(car.id)}
                                    className="mt-2 ml-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )

    async function handleUpdate(id: number) {
        try {
            const updatedCar = {
                id,
                name: 'Da Thay Doi',
                brand: 'Da Thay Doi',
                model: 'Da Thay Doi',
                year: 2023,
                price: 30000,
                description: 'mo ta da thay doi',
                image: 'khong co',
                stock: 10,
            };
            const res = await fetch('/api/products', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCar),
            });
            fetchCars();
        } catch (err) {
            setError('Lỗi khi cập nhật xe');
        }
    }
}
