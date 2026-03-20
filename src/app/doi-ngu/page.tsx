import { TopNavBar } from "../components/TopNavBar";
import { TrumFooter } from "../components/TrumFooter";
import { Noto_Serif } from "next/font/google";

const notoSerifExtraBold = Noto_Serif({
  subsets: ["latin", "vietnamese"],
  weight: ["800"],
});

const basePath =
  process.env.NODE_ENV === "production"
    ? "/IS208-Gioi-thieu-nhom-quan-ly-du-an-CNTT"
    : "";

const imgPhuongLinh =
  `${basePath}/Trần Thị Phương Linh.jpg`;
const imgTuanVu =
  `${basePath}/Nguyễn Tuấn Vũ.jpg`;
const imgThuyTien =
  `${basePath}/Nguyễn Trần Thủy Tiên.jpg`;
const imgThanhTien =
  `${basePath}/Lê Thị Thanh Tiền.jpg`;
const imgThuyTrang =
  `${basePath}/Đoàn Thị Thuỳ Trang.jpg`;

const members = [
  {
    name: "Trần Thị Phương Linh",
    role: "Team Leader",
    img: imgPhuongLinh,
    desc: "Điều phối toàn bộ kế hoạch, phân bổ nguồn lực và kết nối các thành viên để đảm bảo tiến độ dự án luôn đúng mục tiêu.",
  },
  {
    name: "Nguyễn Tuấn Vũ",
    role: "Backend Developer",
    img: imgTuanVu,
    desc: "Phụ trách xây dựng API, thiết kế cơ sở dữ liệu và tối ưu logic nghiệp vụ để hệ thống vận hành ổn định, an toàn.",
  },
  {
    name: "Nguyễn Trần Thủy Tiên",
    role: "Business Analyst",
    img: imgThuyTien,
    desc: "Phân tích yêu cầu nghiệp vụ, chuẩn hóa quy trình và chuyển đổi nhu cầu thực tế thành đặc tả rõ ràng cho đội phát triển.",
  },
  {
    name: "Lê Thị Thanh Tiền",
    role: "Frontend Developer",
    img: imgThanhTien,
    desc: "Phát triển giao diện người dùng trực quan, tối ưu trải nghiệm trên nhiều thiết bị và đảm bảo tính nhất quán toàn hệ thống.",
  },
  {
    name: "Đoàn Thị Thùy Trang",
    role: "Testing (QA/QC)",
    img: imgThuyTrang,
    desc: "Thiết kế test case, kiểm thử chức năng và theo dõi lỗi nhằm đảm bảo sản phẩm đạt chất lượng trước khi bàn giao.",
  },
];

export default function DoiNguPage() {
  return (
    <div className="bg-[#fafaf5] min-h-screen">
      <TopNavBar active="doi-ngu" />

      <main className="pt-[112px] md:pt-[128px] pb-[100px] px-[48px]">
        <div className="max-w-384 mx-auto">
          <section className="relative flex flex-col items-start">
            <div className="hidden lg:block bg-[#efefeb] absolute rounded-bl-[120px] right-0 -top-11 h-90 w-[44%] -z-10" />

            <div className="bg-[#88d982] text-[#005312] px-3 py-1 rounded-full w-max">
              <div className="font-bold text-[10px] tracking-[1.4px] uppercase leading-4">
                Human Capital
              </div>
            </div>

            <h1
              className={`${notoSerifExtraBold.className} mt-3.5 font-black text-[#1a1c19] text-[56px] md:text-[72px] lg:text-[84px] leading-[0.95] tracking-[-1.2px]`}
            >
              Đội ngũ
              <br />
              <span className="text-[#1b6d24]">tâm huyết</span>
            </h1>

            <p className="mt-3.5 text-[#4b5547] text-[18px] md:text-[22px] leading-[1.35] max-w-155">
              Tại Trùm Nông Sản, chúng tôi kết hợp trí tuệ công nghệ cao với
              tình yêu đất đai, kiến tạo một tương lai nông nghiệp minh bạch
              và bền vững cho người Việt.
            </p>
          </section>

          <section className="mt-11.5 md:mt-14.5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-x-6 gap-y-10.5">
              {members.map((m, idx) => (
                <article
                  key={`${m.name}-${idx}`}
                  className={
                    idx === 3
                      ? "xl:col-span-2 xl:col-start-2"
                      : idx === 4
                        ? "xl:col-span-2 xl:col-start-4"
                        : "xl:col-span-2"
                  }
                >
                  <div className="aspect-[0.78] bg-[#e6e6e1] rounded-xl overflow-hidden">
                    <img
                      alt={m.name}
                      src={m.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-3.5">
                    <div className="font-bold text-[#1a1c19] text-[30px] leading-[1.05] tracking-[-0.4px]">
                      {m.name}
                    </div>
                    <div className="mt-1 font-bold text-[#1b6d24] tracking-[0.8px] uppercase text-[10px] leading-4">
                      {m.role}
                    </div>
                    <p className="mt-2 text-[#495345] text-[13px] leading-[1.45] max-w-[95%]">
                      {m.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <TrumFooter />
    </div>
  );
}

