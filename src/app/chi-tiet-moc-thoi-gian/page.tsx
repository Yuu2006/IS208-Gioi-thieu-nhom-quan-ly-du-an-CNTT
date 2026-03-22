import { TopNavBar } from "../components/TopNavBar";
import { TrumFooter } from "../components/TrumFooter";
import { WordDocumentsPanel } from "./WordDocumentsPanel";
import Link from "next/link";

const imgContainer =
  "https://www.figma.com/api/mcp/asset/3f342655-ad28-4aa5-9d09-2b8b14b8aa9d";
const imgMargin =
  "https://www.figma.com/api/mcp/asset/4f3bb7d3-2359-4641-a609-24cb8f229275";
const imgMargin1 =
  "https://www.figma.com/api/mcp/asset/67a77836-e7a1-45b6-a5c2-1a67049fd31a";
const imgContainer1 =
  "https://www.figma.com/api/mcp/asset/671fc9d8-9e32-4f93-bdad-cb3e16d4b02f";
const imgContainer2 =
  "https://www.figma.com/api/mcp/asset/47982da8-273f-498a-9b5e-fafe61657c86";
const imgContainer3 =
  "https://www.figma.com/api/mcp/asset/d36f4ab9-b96d-4faf-98f9-290cd4677d1d";
const imgButton =
  "https://www.figma.com/api/mcp/asset/da5e93d1-2f72-47c6-867c-cad259fbdde3";

const tasks = [
  { title: "Họp bắt đầu dự án", status: "Hoàn thành", icon: imgMargin },
  { title: "Phân công công việc", status: "Hoàn thành", icon: imgMargin },
  { title: "Nghiên cứu tài liệu", status: "Hoàn thành", icon: imgMargin },
  { title: "Xây dựng SOW", status: "Hoàn thành", icon: imgMargin },
];

const docs = [
    {
    title: "Lab 1 - Phân Công",
    size: "229.8 KB • PDF",
      href: "/docs/Lab1/lab-1-phan-cong.pdf",
  },
  {
    title: "Project Business Case",
    size: "337.9 KB • PDF",
      href: "/docs/Lab1/project-business-case.pdf",
  },
  {
    title: "Project Charter",
    size: "272.7 KB • PDF",
      href: "/docs/Lab1/project-charter.pdf",
  },
  {
    title: "SOW",
    size: "365.1 KB • PDF",
      href: "/docs/Lab1/sow.pdf",
  },
  {
    title: "Bảng Câu Hỏi Phỏng Vấn Khảo Sát Hiện Trạng",
    size: "252.6 KB • PDF",
      href: "/docs/Lab1/bang-cau-hoi-phong-van-khao-sat-hien-trang.pdf",
  },
];

function getStatusStyles(status: string) {
  if (status === "Hoàn thành") {
    return "bg-[#dcfce7] text-[#166534]";
  }
  if (status === "Đang thực hiện") {
    return "bg-[#dbeafe] text-[#1e40af]";
  }
  return "bg-[#fef3c7] text-[#92400e]";
}

export default function ChiTietMilestonePage() {
  return (
    <div className="bg-[#fafaf5] min-h-screen">
      <TopNavBar active="timeline" />

      <main className="pt-[72px] pb-[80px] px-[24px]">
        <div className="max-w-[1024px] mx-auto">
          <Link
            href="/timeline"
            className="flex gap-[8px] items-center text-[#1b6d24] font-semibold"
          >
            <img alt="" src={imgContainer} className="w-[16px] h-[16px]" />
            <span className="text-[16px]">Trở về Timeline</span>
          </Link>

          <div className="mt-[32px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[48px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px]">
              <div className="lg:col-span-7">
                <div className="flex gap-[12px] items-center">
                  <div className="bg-[#88d982] rounded-full px-[12px] py-[4px]">
                    <div className="font-bold text-[#005312] text-[12px] uppercase tracking-[0.6px]">
                      Ngày hoàn thành
                    </div>
                  </div>
                  <div className="text-[#3f4a3c] font-medium text-[14px]">
                    21-03-2025
                  </div>
                </div>

                <h1 className="font-bold text-[#1a1c19] text-[48px] mt-[16px]">
                  Khởi động dự án
                </h1>

                <h2 className="text-[#1b6d24] font-bold text-[18px] mt-[16px]">
                  Mô tả chi tiết
                </h2>
                <ul className="text-[#3f4a3c] text-[16px] leading-[26px] mt-[8px] list-disc pl-[24px] space-y-[6px]">
                  <li>Họp nhóm lần 1.</li>
                  <li>Phân công công việc.</li>
                  <li>Nghiên cứu, tham khảo các nguồn tài liệu.</li>
                  <li>Thảo luận, hình thành các ý tưởng ban đầu cho dự án.</li>
                  <li>Xây dựng SOW, Project Charter, Project Business Case.</li>
                  <li>Xây dựng bảng câu hỏi phỏng vấn khảo sát hiện trạng.</li>
                  <li>Xác định công nghệ, môi trường sẽ sử dụng.</li>
                </ul>

                <h2 className="text-[#1b6d24] font-bold text-[18px] mt-[24px]">
                  Danh sách công việc
                </h2>

                <div className="mt-[16px] grid grid-cols-1 gap-[12px]">
                  {tasks.map((t) => (
                    <div
                      key={t.title}
                      className="bg-[#eeeee9] rounded-[8px] p-[16px] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-[12px]">
                        <img alt="" src={t.icon} className="w-[16px] h-[20px] object-contain" />
                        <div className="font-medium text-[#1a1c19] text-[16px]">
                          {t.title}
                        </div>
                      </div>
                      <div
                        className={`${getStatusStyles(t.status)} rounded-[4px] px-[8px] py-[4px]`}
                      >
                        <span className="text-[12px] font-semibold">
                          {t.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[#f4f4ef] border border-[rgba(190,202,185,0.15)] rounded-[12px] p-[25px]">
                  <WordDocumentsPanel
                    initialDocs={docs}
                    headerIcon={imgContainer1}
                    fileIcon={imgContainer2}
                    actionIcon={imgContainer3}
                  />

                  <div className="mt-[24px] bg-[#1b6d24] rounded-[12px] p-[24px] overflow-hidden">
                    <div className="text-white font-bold tracking-[2.4px] uppercase text-[12px] opacity-80">
                      Trạng thái
                    </div>
                    <div className="mt-[24px] h-[8px] bg-white/20 rounded-full">
                      <div className="h-full bg-[#a3f69c] w-full rounded-full" />
                    </div>
                    <div className="mt-[12px] text-white opacity-90 text-[14px] leading-[20px]">
                      Tiến độ đã hoàn thành.
                    </div>
                    <div className="mt-[16px] flex items-end justify-between">
                      <div className="text-white font-bold text-[30px] leading-[36px]">
                        100%
                      </div>
                      <div className="text-white text-[14px] leading-[20px]">
                        4/4 Công việc
                      </div>
                    </div>
                  </div>
                </div>

                {/* small floating button mimic (không bắt buộc) */}
                <img
                  alt=""
                  src={imgButton}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <TrumFooter />
    </div>
  );
}

