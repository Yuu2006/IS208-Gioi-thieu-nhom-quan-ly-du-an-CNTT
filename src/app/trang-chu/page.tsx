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

const imgSeedlingsGrowing =
  "https://www.figma.com/api/mcp/asset/2d81b39a-a55e-426c-b81d-17096c78af89";
const imgFreshVegetableHarvest =
  "https://www.figma.com/api/mcp/asset/dd0980f4-5d9c-497e-b0d6-24a6abd87ac1";

const imgPhuongLinh =
  `${basePath}/tran-thi-phuong-linh.jpg`;
const imgTuanVu =
  `${basePath}/nguyen-tuan-vu.jpg`;
const imgThuyTien =
  `${basePath}/nguyen-tran-thuy-tien.jpg`;
const imgThanhTien =
  `${basePath}/le-thi-thanh-tien.jpg`;
const imgThuyTrang =
  `${basePath}/doan-thi-thuy-trang.jpg`;
const imgAdvisor =
  "https://www.figma.com/api/mcp/asset/0333b2a9-2fb3-4bd7-b4bf-6cc1ab810681";

// Icons trong section "Giá trị cốt lõi"
const imgContainer = `${basePath}/icons/innovation.png`;
const imgContainer1 = `${basePath}/icons/integrity.png`;
const imgContainer2 = `${basePath}/icons/leaf.png`;

export default function GioiThieuNhomPage() {
  return (
    <div className="bg-[#fafaf5] min-h-screen">
      <TopNavBar active="gioi-thieu" />

      <main className="pt-[96px] pb-[80px] px-[32px]">
        <section className="max-w-[1536px] mx-auto flex gap-[49px] items-center">
          <div className="w-[576px]">
            <div className="bg-[#88d982] px-[16px] py-[6px] rounded-full w-max mb-[24px]">
              <div className="font-bold text-[#005312] text-[14px] tracking-[1.4px] uppercase">
                Sứ mệnh của chúng tôi
              </div>
            </div>

            <h1
              className={`${notoSerifExtraBold.className} font-extrabold text-[#1a1c19] text-[72px] leading-[72px] tracking-[-1.8px]`}
            >
              Kiến tạo hệ sinh
              <br />
              thái 
              <span className="text-[#1b6d24]"> nông</span>
              <br />
              <span className="text-[#1b6d24]">nghiệp</span> bền vững{" "}
            </h1>

            <p className="mt-[8px] text-[#3f4a3c] text-[18px] leading-[28px]">
              Bắt nguồn từ khát vọng nâng tầm giá trị nông sản Việt, Trùm
              Nông Sản là dự án kết hợp giữa công nghệ hiện đại và tri thức
              bản địa. Chúng tôi không chỉ xây dựng một nền tảng quản lý, mà
              còn là người bạn đồng hành cùng nông dân trong hành trình số hóa
              canh tác.
            </p>

            <div className="mt-[16px] flex gap-[16px] items-start">
              <a
                href={`${basePath}/chi-tiet-du-an`}
                className="bg-[#1b6d24] text-white rounded-full px-[32px] py-[16px] font-bold"
              >
                Bắt đầu ngay
              </a>
              <a
                href={`${basePath}/doi-ngu`}
                className="bg-[#fed7ca] text-[#795c51] rounded-full px-[32px] py-[16px] font-bold"
              >
                Thông tin nhóm
              </a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -bottom-[38px] -left-[38px] rotate-[-6deg] bg-[#e3e3de] rounded-[24px] p-[16px] w-[256px]">
              <div className="rounded-[8px] overflow-hidden w-full">
                <img
                  alt="Seedlings growing"
                  src={imgSeedlingsGrowing}
                  className="w-full h-[299px] object-cover"
                />
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="rotate-3 aspect-square w-[605px] rounded-[24px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <img
                  alt="Fresh vegetable harvest"
                  src={imgFreshVegetableHarvest}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1536px] mx-auto mt-[96px]">
          <div className="text-center">
            <h2 className="font-bold text-[#1a1c19] text-[48px] leading-[48px]">
              Giá trị cốt lõi
            </h2>
            <p className="mt-[16px] text-[#3f4a3c] text-[16px]">
              Ba trụ cột chính định hình nên con đường của Trùm Nông Sản.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-[64px]">
            <div className="bg-white border border-[rgba(190,202,185,0.15)] rounded-[24px] h-[362px] relative overflow-hidden">
              <div className="absolute left-[40px] top-[40px] bg-[#5dac5b] rounded-[16px] w-[64px] h-[64px] flex items-center justify-center">
                <img alt="" src={imgContainer} className="w-[28px] h-[28px]" />
              </div>
              <div className="absolute left-[40px] right-[40px] top-[136px]">
                <div className="font-bold text-[#1a1c19] text-[24px]">
                  Sáng tạo (Innovation)
                </div>
              </div>
              <div className="absolute left-[40px] right-[40px] top-[187px] text-[#3f4a3c] text-[16px] leading-[26px]">
                Luôn tìm kiếm và ứng dụng những giải pháp công nghệ tiên tiến
                nhất để tối ưu hóa năng suất và quy trình quản trị nông
                nghiệp số.
              </div>
            </div>

            <div className="bg-white border border-[rgba(190,202,185,0.15)] rounded-[24px] h-[362px] relative overflow-hidden">
              <div className="absolute left-[40px] top-[40px] bg-[#f27a00] rounded-[16px] w-[64px] h-[64px] flex items-center justify-center">
                <img
                  alt=""
                  src={imgContainer1}
                  className="w-[28px] h-[28px]"
                />
              </div>
              <div className="absolute left-[40px] right-[40px] top-[136px]">
                <div className="font-bold text-[#1a1c19] text-[24px]">
                  Chính trực (Integrity)
                </div>
              </div>
              <div className="absolute left-[40px] right-[40px] top-[184px] text-[#3f4a3c] text-[16px] leading-[26px]">
                Minh bạch trong mọi thông tin, trung thực trong mọi cam kết
                để xây dựng niềm tin vững chắc giữa đội ngũ, đối tác và
                nông dân.
              </div>
            </div>

            <div className="bg-white border border-[rgba(190,202,185,0.15)] rounded-[24px] h-[362px] relative overflow-hidden">
              <div className="absolute left-[40px] top-[40px] bg-[#1b6d24] rounded-[16px] w-[64px] h-[64px] flex items-center justify-center">
                <img
                  alt=""
                  src={imgContainer2}
                  className="w-[28px] h-[28px]"
                />
              </div>
              <div className="absolute left-[40px] right-[40px] top-[136px]">
                <div className="font-bold text-[#1a1c19] text-[24px]">
                  Bền vững (Sustainability)
                </div>
              </div>
              <div className="absolute left-[40px] right-[40px] top-[196px] text-[#3f4a3c] text-[16px] leading-[26px]">
                Mọi bước đi đều hướng tới sự phát triển dài hạn, bảo vệ môi
                trường và đảm bảo lợi ích công bằng cho cộng đồng nông
                nghiệp.
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1536px] mx-auto mt-[96px]">
          <div className="text-center">
            <h2 className="font-bold text-[#1a1c19] text-[48px]">
              Đội ngũ của chúng tôi
            </h2>
            <p className="mt-[24px] text-[#3f4a3c] text-[16px]">
              Sự kết hợp hoàn hảo giữa các chuyên gia công nghệ và những người
              yêu nông nghiệp thực thụ. 5 thành viên, 1 tầm nhìn duy nhất.
            </p>
          </div>

          <div className="mt-[48px] grid grid-cols-2 md:grid-cols-5 gap-[24px]">
            {[
              {
                img: imgPhuongLinh,
                name: "Trần Thị Phương Linh",
                role: "Team Leader",
              },
              { img: imgTuanVu, name: "Nguyễn Tuấn Vũ", role: "Backend Developer" },
              { img: imgThuyTien, name: "Nguyễn Trần Thủy Tiên", role: "Business Analyst" },
              { img: imgThanhTien, name: "Lê Thị Thanh Tiền", role: "Frontend Developer" },
              { img: imgThuyTrang, name: "Đoàn Thị Thùy Trang", role: "Testing (QA/QC)" },
            ].map((m) => (
              <div key={m.name} className="relative">
                <div className="bg-[#eeeee9] rounded-[24px] overflow-hidden shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                  <img alt={m.name} src={m.img} className="w-full h-[299px] object-cover" />
                </div>
                <div className="mt-[12px] text-center">
                  <div className="font-bold text-[#1a1c19] text-[18px]">{m.name}</div>
                  <div className="mt-[4px] text-[#3f4a3c] text-[14px]">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1536px] mx-auto mt-[96px]">
          <div className="bg-[#2f312e] rounded-[24px] p-[80px] flex items-center gap-[48px]">
            <div className="border-4 border-[#1b6d24] rounded-full p-[8px] flex-shrink-0">
              <div className="size-[160px] rounded-full overflow-hidden">
                <img alt="Advisor" src={imgAdvisor} className="size-full object-cover" />
              </div>
            </div>
            <div className="text-white">
              <div className="text-[#a3f69c] text-[12px] uppercase tracking-[1.2px] font-bold">
                Giảng viên hướng dẫn
              </div>
              <div className="mt-[8px] font-bold text-[48px] leading-[48px]">
                ThS. Tạ Việt Phương
              </div>
              <div className="mt-[4px] text-[#c4c8bb] text-[20px]">
                Mã lớp: IS208.Q21
              </div>
              <div className="mt-[16px] border-l-2 border-[#1b6d24] pl-[26px] text-[16px] text-[rgba(250,250,245,0.7)] leading-[26px]">
                Sự kết hợp giữa tri thức học thuật và tinh thần thực chiến của đội ngũ Trùm Nông Sản
                hứa hẹn sẽ mang lại những thay đổi tích cực cho ngành nông nghiệp nước nhà.
              </div>
            </div>
          </div>
        </section>
      </main>

      <TrumFooter />
    </div>
  );
}

