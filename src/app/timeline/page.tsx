import { TopNavBar } from "../components/TopNavBar";
import { TrumFooter } from "../components/TrumFooter";
import Link from "next/link";

const milestones = [
  {
    date: "17-03-2026",
    title: "Khởi động dự án",
    desc: "Đội ngũ dự án đã được phân công vai trò và trách nhiệm ban đầu.",
    accent: "#8b5cf6",
    side: "right" as const,
    href: "/chi-tiet-moc-thoi-gian",
  },
  {
    date: "04-04-2026",
    title: "Phân tích & Thiết kế",
    desc: "Định hướng dự án - Xác định các công nghệ, môi trường sử dụng.",
    accent: "#8b5cf6",
    side: "left" as const,
    href: "/chi-tiet-lab2",
  },
  {
    date: "",
    title: "Thiết kế phần mềm",
    desc: "Thiết kế hệ thống và hoàn thiện kế hoạch dự án.",
    accent: "#8b5cf6",
    side: "right" as const,
  },
  {
    date: "",
    title: "Quản lý dự án",
    desc: "Lập kế hoạch và tổ chức thực hiện dự án hiệu quả.",
    accent: "#8b5cf6",
    side: "left" as const,
  },
];

export default function TimelinePage() {
  return (
    <div className="bg-[#fafaf5] min-h-screen">
      <TopNavBar active="timeline" />

      <main className="pt-[96px] pb-[80px] px-[24px]">
        <div className="max-w-[1024px] mx-auto">
          <section className="max-w-[672px]">
            <h1 className="font-bold text-[#1a1c19] text-[48px] tracking-[-1.2px]">
              Lộ trình Dự án
            </h1>
            <p className="mt-[16px] text-[#3f4a3c] text-[18px] leading-[28px]">
              Theo dõi tiến độ sản xuất và cung ứng nông sản. Minh bạch hóa
              quy trình từ nghiên cứu giống đến khi sản phẩm tới tay khách
              hàng.
            </p>
          </section>

          <section className="mt-[64px] relative">
            <div className="absolute bg-[#e5e7eb] left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2" />

            <div className="flex flex-col gap-[64px]">
              {milestones.map((m, idx) => (
                <div key={`${m.date}-${m.title}-${idx}`} className="relative w-full">
                  {/* dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[40px]">
                    <div className="bg-[#8b5cf6] border-4 border-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px]" />
                  </div>

                  <div
                    className={
                      m.side === "right"
                        ? "ml-auto w-[460.8px]"
                        : "w-[460.8px]"
                    }
                  >
                    <div className="bg-white border border-[#f3f4f6] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-[25px] min-h-[0]">
                      <div className="font-bold text-[#8b5cf6] text-[14px] leading-[20px]">
                        {m.date}
                      </div>
                      <div className="mt-[4px] font-bold text-[#1a1c19] text-[20px]">
                        {m.title}
                      </div>
                      <p className="mt-[8px] text-[#3f4a3c] text-[14px] leading-[22.75px]">
                        {m.desc}
                      </p>
                      {(m as {href?: string}).href ? (
                        <Link
                          href={(m as {href?: string}).href!}
                          className="mt-[12px] inline-flex gap-[8px] items-center text-[#8b5cf6] text-[12px] font-semibold"
                        >
                          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 6L1 11" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Click to view detail</span>
                        </Link>
                      ) : (
                        <div className="mt-[12px] flex gap-[8px] items-center text-[#8b5cf6] text-[12px] font-semibold">
                          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 6L1 11" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Click to view detail</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <TrumFooter />
    </div>
  );
}

