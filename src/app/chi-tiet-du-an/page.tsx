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

const imgContainer = `${basePath}/icons/budget.svg`;
const imgContainer1 = `${basePath}/icons/calendar.svg`;
const imgContainer2 = `${basePath}/icons/team.svg`;
const imgBackground = `${basePath}/icons/data-fragment.svg`;
const imgBackground1 = `${basePath}/icons/shield-check.svg`;
const imgBackground2 = `${basePath}/icons/heart.svg`;
const imgIcon = `${basePath}/icons/qr-code.svg`;
const imgIcon1 = `${basePath}/icons/clipboard.svg`;

export default function ChiTietDuAnPage() {
  return (
    <div className="bg-[#fafaf5] min-h-screen">
      <TopNavBar active="du-an" />

      <main className="pt-[96px] pb-[80px] px-[32px]">
        <div className="max-w-[1280px] mx-auto">
          <section className="bg-white rounded-[12px] p-[80px] overflow-clip shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="bg-[#88d982] w-max px-[16px] py-[6px] rounded-full">
              <div className="font-semibold text-[#005312] text-[14px] tracking-[0.35px] uppercase">
                Web Hybrid
              </div>
            </div>

            <div className="mt-[24px]">
              <h1 className={`${notoSerifExtraBold.className} font-extrabold text-[#1a1c19] text-[64px] leading-[76px] tracking-[-1.8px]`}>
                HỆ THỐNG QUẢN LÝ CHUỖI
                <br />
                CUNG ỨNG THỰC PHẨM
                <br />
                SẠCH
              </h1>
            </div>

            <p className="mt-[16px] text-[#3f4a3c] text-[18px] leading-[29.25px] max-w-[672px]">
              BlueFood cung cấp thực phẩm sạch cho các siêu thị và nhà hàng.
              Hệ thống truy xuất nguồn gốc mới giúp giải quyết vấn đề dữ liệu
              rời rạc, xây dựng niềm tin từ nông trại đến bàn ăn.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[32px]">
              <div className="bg-[#f4f4ef] rounded-[12px] h-[96px] flex items-center gap-[16px] p-[24px]">
                <div className="h-[20px] w-[27.5px]">
                  <img alt="" src={imgContainer} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[#6f7a6b] text-[14px] font-medium leading-[20px]">
                    Ngân sách
                  </div>
                  <div className="text-[#1a1c19] text-[20px] font-bold leading-[28px]">
                    1.2B VNĐ
                  </div>
                </div>
              </div>

              <div className="bg-[#f4f4ef] rounded-[12px] h-[96px] flex items-center gap-[16px] p-[24px]">
                <div className="h-[25px] w-[22.5px]">
                  <img alt="" src={imgContainer1} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[#6f7a6b] text-[14px] font-medium leading-[20px]">
                    Thời gian
                  </div>
                  <div className="text-[#1a1c19] text-[20px] font-bold leading-[28px]">
                    5 Tháng
                  </div>
                </div>
              </div>

              <div className="bg-[#f4f4ef] rounded-[12px] h-[96px] flex items-center gap-[16px] p-[24px]">
                <div className="h-[15px] w-[30px]">
                  <img alt="" src={imgContainer2} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[#6f7a6b] text-[14px] font-medium leading-[20px]">
                    Đội ngũ
                  </div>
                  <div className="text-[#1a1c19] text-[20px] font-bold leading-[28px]">
                    5 Thành viên
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-[64px] grid grid-cols-1 lg:grid-cols-3 gap-[32px] items-stretch">
            <div className="bg-[#f4f4ef] rounded-[12px] p-[32px] col-span-1 lg:col-span-1 h-full">
              <h2 className="text-[#964900] font-bold text-[24px]">
                Vấn đề kinh doanh
              </h2>
              <div className="mt-[24px] space-y-[16px] text-[#3f4a3c]">
                <div className="flex gap-[16px] items-start">
                  <img alt="" src={imgBackground} className="w-[38px] h-[35.8px] object-contain" />
                  <div>
                    Dữ liệu phân mảnh, không đồng nhất
                  </div>
                </div>
                <div className="flex gap-[16px] items-start">
                  <img alt="" src={imgBackground1} className="w-[32px] h-[36px] object-contain" />
                  <div>
                    Khó khăn trong việc xác thực nguồn gốc
                  </div>
                </div>
                <div className="flex gap-[16px] items-start">
                  <img alt="" src={imgBackground2} className="w-[36px] h-[36px] object-contain" />
                  <div>
                    Khách hàng thiếu niềm tin vào nhãn Sạch
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(27,109,36,0.05)] rounded-[12px] p-[32px] col-span-1 lg:col-span-2 h-full">
              <h3 className="text-[#1b6d24] font-bold text-[24px]">
                Mục tiêu dự án
              </h3>
              <div className="mt-[24px] grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                <div className="bg-white rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[25px] min-h-[180px] flex flex-col">
                  <div className="h-[27px] w-[27px]">
                    <img alt="" src={imgIcon} className="w-full h-full object-contain" />
                  </div>
                  <div className="mt-[20px]">
                    <div className="text-[#1a1c19] font-bold text-[18px]">
                      Truy xuất 100%
                    </div>
                    <div className="mt-[12px] text-[#3f4a3c] text-[14px] leading-[20px]">
                      Đảm bảo mọi lô hàng đều có mã QR để truy xuất nguồn gốc đầy đủ.
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[25px] min-h-[180px] flex flex-col">
                  <div className="h-[24px] w-[29.25px]">
                    <img alt="" src={imgIcon1} className="w-full h-full object-contain" />
                  </div>
                  <div className="mt-[20px]">
                    <div className="text-[#1a1c19] font-bold text-[18px]">
                      Ghi chép minh bạch
                    </div>
                    <div className="mt-[12px] text-[#3f4a3c] text-[14px] leading-[20px]">
                      Lưu trữ tất cả các thay đổi và giao dịch trong suốt chuỗi cung ứng.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-[64px] bg-[#2f312e] rounded-[24px] p-[80px] text-white">
            <h2 className="text-[30px] font-bold">Ràng buộc &amp; kỹ thuật</h2>
            <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-[16px] text-[#e6e6e0]">
              <div className="bg-[rgba(250,250,245,0.12)] border border-[rgba(250,250,245,0.18)] rounded-[12px] p-[16px] text-white">
                Audit Logs (Append-only)
              </div>
              <div className="bg-[rgba(250,250,245,0.12)] border border-[rgba(250,250,245,0.18)] rounded-[12px] p-[16px] text-white">
                Mã ID Lô hàng duy nhất
              </div>
              <div className="bg-[rgba(250,250,245,0.12)] border border-[rgba(250,250,245,0.18)] rounded-[12px] p-[16px] text-white">
                Phương pháp Scrumban (Kanban + Scrum)
              </div>
              <div className="bg-[rgba(250,250,245,0.12)] border border-[rgba(250,250,245,0.18)] rounded-[12px] p-[16px] text-white">
                QR Truy xuất nguồn gốc
              </div>
            </div>
          </section>
        </div>
      </main>

      <TrumFooter />
    </div>
  );
}

