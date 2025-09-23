
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
export default function Hero() {

    return (
        <>
            <section className="relative text-white">
                <img
                    src="/banner.jpg"
                    alt="Hero Car"
                    className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-16">
                    <p className="text-sm uppercase mb-3">Sự Kiện Bán Hàng</p>
                    <h2 className="text-4xl md:text-6xl font-bold leading-snug mb-6">
                        Mùa Của Những <br /> Truyền Thống Mới
                    </h2>
                    {/* <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200">
                        Khám Phá Các Ưu Đãi
                    </button> */}
                    <Button label="Khám phá các ưu đãi" />
                </div>
            </section>
        </>
    )
}