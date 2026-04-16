import { TopNavBar } from "../components/TopNavBar";
import { TrumFooter } from "../components/TrumFooter";
import { WordDocumentsPanel } from "../chi-tiet-moc-thoi-gian/WordDocumentsPanel";
import Link from "next/link";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/IS208-Gioi-thieu-nhom-quan-ly-du-an-CNTT"
    : "";

const headerIcon = `${basePath}/icons/folder.svg`;
const fileIcon = `${basePath}/icons/file.svg`;
const actionIcon = `${basePath}/icons/download.svg`;

const tasks = [
  { title: "Họp nhóm lần 2", status: "Hoàn thành" },
  { title: "Xác định khung dự án", status: "Hoàn thành" },
  { title: "Thu thập yêu cầu & sơ đồ Usecase", status: "Hoàn thành" },
  { title: "Xây dựng WBS", status: "Hoàn thành" },
  { title: "Lập danh sách hoạt động & đường găng", status: "Hoàn thành" },
  { title: "Lập danh sách tài nguyên & ràng buộc", status: "Hoàn thành" },
  { title: "Xây dựng GANTT Chart", status: "Hoàn thành" },
  { title: "Phương án thực hiện", status: "Hoàn thành" },
];

const docs = [
  {
    title: "Biên bản họp lần 2",
    size: "219.6 KB • PDF",
    href: `${basePath}/docs/Lab2/bien-ban-hop-lan-2.pdf`,
  },
  {
    title: "Lab 2 - Phân Công",
    size: "230.4 KB • PDF",
    href: `${basePath}/docs/Lab2/lab-2-phan-cong.pdf`,
  },
  {
    title: "Xác định khung dự án",
    size: "363.4 KB • PDF",
    href: `${basePath}/docs/Lab2/xac-dinh-khung-du-an.pdf`,
  },
  {
    title: "Thu thập yêu cầu về dự án và sơ đồ Usecase",
    size: "379.8 KB • PDF",
    href: `${basePath}/docs/Lab2/thu-thap-yeu-cau-va-so-do-usecase.pdf`,
  },
  {
    title: "WBS",
    size: "5.8 MB • PDF",
    href: `${basePath}/docs/Lab2/wbs.pdf`,
  },
  {
    title: "Danh sách hoạt động và đường găng",
    size: "1.6 MB • PDF",
    href: `${basePath}/docs/Lab2/danh-sach-hoat-dong-va-duong-gang.pdf`,
  },
  {
    title: "Danh sách tài nguyên và ràng buộc",
    size: "110.9 KB • PDF",
    href: `${basePath}/docs/Lab2/danh-sach-tai-nguyen-va-rang-buoc.pdf`,
  },
  {
    title: "GANTT Chart",
    size: "405.3 KB • PDF",
    href: `${basePath}/docs/Lab2/gantt-chart.pdf`,
  },
  {
    title: "Phương án thực hiện",
    size: "2 MB • PDF",
    href: `${basePath}/docs/Lab2/phuong-an-thuc-hien.pdf`,
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

export default function ChiTietLab2Page() {
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
              <path d="M10 12L6 8L10 4" stroke="#1B6D24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                    04-04-2026
                  </div>
                </div>

                <h1 className="font-bold text-[#1a1c19] text-[48px] mt-[16px]">
                  Phân tích &amp; Thiết kế
                </h1>

                <h2 className="text-[#1b6d24] font-bold text-[18px] mt-[16px]">
                  Mô tả chi tiết
                </h2>
                <ul className="text-[#3f4a3c] text-[16px] leading-[26px] mt-[8px] list-disc pl-[24px] space-y-[6px]">
                  <li>Họp nhóm lần 2, phân công công việc Lab 2.</li>
                  <li>Xác định khung dự án và phạm vi.</li>
                  <li>Thu thập yêu cầu và xây dựng sơ đồ Usecase.</li>
                  <li>Xây dựng WBS, danh sách hoạt động và đường găng.</li>
                  <li>Lập danh sách tài nguyên và ràng buộc dự án.</li>
                  <li>Xây dựng GANTT Chart và phương án thực hiện.</li>
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
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="9" stroke="#1B6D24" strokeWidth="1.5"/>
                          <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#1B6D24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
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
                      Tiến độ đã hoàn thành.
                    </div>
                    <div className="mt-[16px] flex items-end justify-between">
                      <div className="text-white font-bold text-[30px] leading-[36px]">
                        100%
                      </div>
                      <div className="text-white text-[14px] leading-[20px]">
                        8/8 Công việc
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
