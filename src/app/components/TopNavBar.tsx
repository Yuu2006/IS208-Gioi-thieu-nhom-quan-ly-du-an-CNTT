import Link from "next/link";

type NavKey =
  | "gioi-thieu"
  | "doi-ngu"
  | "du-an"
  | "timeline"
  | "hop-dong";

const imgButton =
  "https://www.figma.com/api/mcp/asset/685812ba-ce64-4577-9be4-2e84b89f2fc9";

export function TopNavBar({ active }: { active: NavKey }) {
  const navItems: Array<{ key: NavKey; label: string; href: string }> = [
    { key: "gioi-thieu", label: "Trang Chủ", href: "/trang-chu" },
    {
      key: "doi-ngu",
      label: "Giới Thiệu",
      href: "/doi-ngu",
    },
    { key: "du-an", label: "Dự Án", href: "/chi-tiet-du-an" },
    { key: "timeline", label: "Timeline", href: "/timeline" },
    { key: "hop-dong", label: "Hợp Đồng", href: "/hop-dong-nhom" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf5] w-full">
      <div className="content-stretch flex items-center justify-center">
        <div className="content-stretch flex items-center justify-between max-w-[1536px] px-[32px] py-[16px] relative shrink-0 w-full">
          <Link
            href="/trang-chu"
            className="flex flex-col font-['Liberation_Serif',serif] font-bold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#1b6d24] text-[24px] tracking-[-0.6px]"
          >
            Trùm Nông Sản
          </Link>

          <nav className="flex items-center">
            {navItems.map((item) => {
              const isActive = item.key === active;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className="flex flex-col items-start pl-[32px] relative shrink-0"
                >
                  <div
                    className={
                      isActive
                        ? "border-[#1b6d24] border-b-2 border-solid pb-[6px]"
                        : "pb-[6px]"
                    }
                  >
                    <div
                      className={
                        isActive
                          ? "flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b6d24] text-[16px] w-fit whitespace-nowrap"
                          : "flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#444941] text-[16px] w-fit whitespace-nowrap"
                      }
                    >
                      <p className="leading-[24px]">{item.label}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center pl-px pr-[1.01px] py-px relative shrink-0">
            <div className="flex items-center justify-center relative shrink-0 size-[34.2px]">
              <div className="flex-none scale-x-95 scale-y-95">
                <div className="relative size-[36px]">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

