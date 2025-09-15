import Hero from "@/components/Hero";
import Image from "next/image";
import UserList from "@/components/UserList";
import CarList from "@/components/CarList";
export default function Home() {
  return (
      <>
      <Hero/>
      <CarList/>
      <div className="text-center my-16">
        <h2 className="text-3xl font-bold mb-4">Khám Phá Kia</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tại Kia, chúng tôi không chỉ tạo ra những chiếc xe hơi - chúng tôi tạo ra những trải nghiệm. Từ thiết kế tinh tế đến công nghệ tiên tiến, mỗi chiếc xe của chúng tôi đều được chế tạo để mang lại sự hài lòng tối đa cho khách hàng. Hãy khám phá dòng sản phẩm đa dạng của chúng tôi và tìm thấy chiếc xe hoàn hảo cho bạn.
        </p>
      </div>
      <div className="relative w-full h-96 mb-16">
        <Image
          src="/banner2.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div> 
      <div>
        <h2>Danh sách khách hàng trong tháng</h2>
        <UserList/>
      </div>
      <div className="text-center my-16">
        <h2 className="text-3xl font-bold mb-4">Tại Sao Chọn Kia?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kia không chỉ là một thương hiệu xe hơi - chúng tôi là biểu tượng của sự đổi mới, chất lượng và giá trị. Với cam kết mang đến những chiếc xe an toàn, tiết kiệm nhiên liệu và thiết kế hiện đại, Kia đã trở thành lựa chọn hàng đầu cho hàng triệu khách hàng trên toàn thế giới. Hãy trải nghiệm sự khác biệt với Kia hôm nay!
        </p>
      </div>
      </>
  );
}
