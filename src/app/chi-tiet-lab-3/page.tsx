import Link from "next/link";

import { WordDocumentsPanel } from "../chi-tiet-moc-thoi-gian/WordDocumentsPanel";
import { TopNavBar } from "../components/TopNavBar";
import { TrumFooter } from "../components/TrumFooter";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/IS208-Gioi-thieu-nhom-quan-ly-du-an-CNTT"
    : "";

const headerIcon = `${basePath}/icons/folder.svg`;
const fileIcon = `${basePath}/icons/file.svg`;
const actionIcon = `${basePath}/icons/download.svg`;

const tasks = [
  { title: "Họp nhóm lần 3", status: "Hoàn thành" },
  { title: "Phân công công việc Lab 3", status: "Hoàn thành" },
  { title: "Tổng hợp danh sách Use Case", status: "Hoàn thành" },
  { title: "Thiết kế Use Case theo từng gói chức năng", status: "Hoàn thành" },
  { title: "Thiết kế ERD và cơ sở dữ liệu", status: "Hoàn thành" },
  { title: "Thiết kế wireframe cho người dùng", status: "Hoàn thành" },
  { title: "Thiết kế wireframe cho quản trị viên", status: "Hoàn thành" },
  { title: "Ước lượng chi phí và đánh giá tiến độ", status: "Hoàn thành" },
  { title: "Cập nhật liên kết repository và tài liệu tổng hợp", status: "Hoàn thành" },
];

const docs = [
  {
    title: "Biên bản họp lần 3",
    size: "227.2 KB • PDF",
    href: `${basePath}/docs/Lab3/BIÊN BẢN HỌP LẦN 3.pdf`,
  },
  {
    title: "Phân công Lab 03",
    size: "243.0 KB • PDF",
    href: `${basePath}/docs/Lab3/PHÂN CÔNG_LAB 03.pdf`,
  },
  {
    title: "Danh sách Use Case",
    size: "454.1 KB • PDF",
    href: `${basePath}/docs/Lab3/USE CASE/DANH SÁCH USE CASE.pdf`,
  },
  {
    title: "Use Case tổng quát",
    size: "491.9 KB • PNG",
    href: `${basePath}/docs/Lab3/USE CASE/UseCaseTongQuat.png`,
  },
  {
    title: "Gói Use Case 1",
    size: "6.3 MB • PDF",
    href: `${basePath}/docs/Lab3/USE CASE/GÓI 1.pdf`,
  },
  {
    title: "Gói Use Case 2",
    size: "5.4 MB • PDF",
    href: `${basePath}/docs/Lab3/USE CASE/GÓI 2.pdf`,
  },
  {
    title: "Gói Use Case 3 + 8",
    size: "4.4 MB • PDF",
    href: `${basePath}/docs/Lab3/USE CASE/Gói 3+8.pdf`,
  },
  {
    title: "Gói Use Case 4 + 5",
    size: "8.2 MB • PDF",
    href: `${basePath}/docs/Lab3/USE CASE/GÓI 4+5.pdf`,
  },
  {
    title: "Gói Use Case 6 + 7",
    size: "5.0 MB • PDF",
    href: `${basePath}/docs/Lab3/USE CASE/Gói 6+7.pdf`,
  },
  {
    title: "ERD",
    size: "97.3 KB • PDF",
    href: `${basePath}/docs/Lab3/ERD.pdf`,
  },
  {
    title: "Database QLDA",
    size: "60.1 KB • XLSX",
    href: `${basePath}/docs/Lab3/DATABASE_QLDA.xlsx`,
  },
  {
    title: "Wireframe User",
    size: "235.8 KB • PDF",
    href: `${basePath}/docs/Lab3/WIREFRAME_USER.pdf`,
  },
  {
    title: "Wireframe Admin",
    size: "311.4 KB • PDF",
    href: `${basePath}/docs/Lab3/WIREFRAME_ADMIN.pdf`,
  },
  {
    title: "Bảng ước lượng chi phí",
    size: "175.8 KB • PDF",
    href: `${basePath}/docs/Lab3/BẢNG ƯỚC LƯỢNG CHI PHÍ.pdf`,
  },
  {
    title: "Báo cáo tự đánh giá tiến độ",
    size: "746.9 KB • PDF",
    href: `${basePath}/docs/Lab3/BÁO CÁO TỰ ĐÁNH GIÁ TIẾN ĐỘ.pdf`,
  },
  {
    title: "Đánh giá tiến độ dự án",
    size: "299.1 KB • PDF",
    href: `${basePath}/docs/Lab3/ĐÁNH GIÁ TIẾN ĐỘ DỰ ÁN (thời gian + chi phí).pdf`,
  },
  {
    title: "Link repository",
    size: "231 B • TXT",
    href: `${basePath}/docs/Lab3/LINK REPOSITORY.txt`,
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

export default function ChiTietLab3Page() {
  return (
    <div className="bg-[#fafaf5] min-h-screen">
      <TopNavBar active="timeline" />

      <main className="pt-[72px] pb-[80px] px-[24px]">
        <div className="max-w-[1024px] mx-auto">
          <Link
            href="/timeline"
            className="flex gap-[8px] items-center text-[#1b6d24] font-semibold"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="#1B6D24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
                    07-05-2026
                  </div>
                </div>

                <h1 className="font-bold text-[#1a1c19] text-[48px] mt-[16px]">
                  Chi tiết Lab 3
                </h1>

                <h2 className="text-[#1b6d24] font-bold text-[18px] mt-[16px]">
                  Mô tả chi tiết
                </h2>
                <ul className="text-[#3f4a3c] text-[16px] leading-[26px] mt-[8px] list-disc pl-[24px] space-y-[6px]">
                  <li>Tổng hợp tài liệu triển khai cho giai đoạn Lab 3.</li>
                  <li>Xây dựng danh sách Use Case và các gói chức năng chi tiết.</li>
                  <li>Thiết kế ERD, cấu trúc dữ liệu và tệp cơ sở dữ liệu dự án.</li>
                  <li>Hoàn thiện wireframe cho giao diện người dùng và quản trị viên.</li>
                  <li>Lập bảng ước lượng chi phí, tự đánh giá và theo dõi tiến độ dự án.</li>
                  <li>Lưu trữ liên kết repository để thuận tiện cho việc theo dõi và bàn giao.</li>
                </ul>

                <h2 className="text-[#1b6d24] font-bold text-[18px] mt-[24px]">
                  Danh sách công việc
                </h2>

                <div className="mt-[16px] grid grid-cols-1 gap-[12px]">
                  {tasks.map((task) => (
                    <div
                      key={task.title}
                      className="bg-[#eeeee9] rounded-[8px] p-[16px] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-[12px]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="9" stroke="#1B6D24" strokeWidth="1.5" />
                          <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#1B6D24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="font-medium text-[#1a1c19] text-[16px]">
                          {task.title}
                        </div>
                      </div>
                      <div
                        className={`${getStatusStyles(task.status)} rounded-[4px] px-[8px] py-[4px]`}
                      >
                        <span className="text-[12px] font-semibold">
                          {task.status}
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
                    headerIcon={headerIcon}
                    fileIcon={fileIcon}
                    actionIcon={actionIcon}
                  />

                  <div className="mt-[24px] bg-[#1b6d24] rounded-[12px] p-[24px] overflow-hidden">
                    <div className="text-white font-bold tracking-[2.4px] uppercase text-[12px] opacity-80">
                      Trạng thái
                    </div>
                    <div className="mt-[24px] h-[8px] bg-white/20 rounded-full">
                      <div className="h-full bg-[#a3f69c] w-full rounded-full" />
                    </div>
                    <div className="mt-[12px] text-white opacity-90 text-[14px] leading-[20px]">
                      Tất cả tài liệu Lab 3 đã được gắn vào trang chi tiết.
                    </div>
                    <div className="mt-[16px] flex items-end justify-between">
                      <div className="text-white font-bold text-[30px] leading-[36px]">
                        100%
                      </div>
                      <div className="text-white text-[14px] leading-[20px]">
                        9/9 Công việc
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <TrumFooter />
    </div>
  );
}
