import Link from "next/link";

const imgUit1 =
  "https://www.figma.com/api/mcp/asset/bb1b7be5-b877-4ea5-b49d-e55d17e1e71d";
const imgIconTwitter =
  "https://www.figma.com/api/mcp/asset/99cdbc46-d183-43e2-80d5-e1fa53633c2e";
const imgIconLinkedin =
  "https://www.figma.com/api/mcp/asset/aac0ce09-8909-476d-ab22-79358e0eeb31";
const imgIconFacebook =
  "https://www.figma.com/api/mcp/asset/57c5d566-e996-4569-821d-5396dd48dae4";

export function TrumFooter() {
  return (
    <footer className="bg-[#0a142f] text-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-start">
          <div className="space-y-6">
            <img
              alt="Logo UIT"
              className="h-20 w-auto object-contain"
              src={imgUit1}
            />
            <div>
              <p className="font-bold text-[16px] leading-[1.2] tracking-[0.2px]">
                TRÙM NÔNG SẢN
              </p>
              <p className="mt-4 text-[14px] leading-[1.45] text-white/70 max-w-[290px]">
                Đội ngũ phát triển tiên phong, nâng cao trải nghiệm của doanh
                nghiệp và khách hàng
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[16px] leading-[1.3]">Liên kết nhanh</h3>
            <div className="mt-6 flex flex-col gap-4 text-[14px] leading-[1.4] text-white/80">
              <Link href="/trang-chu" className="hover:text-white transition-colors">Trang chủ</Link>
              <Link href="/doi-ngu" className="hover:text-white transition-colors">Về chúng tôi</Link>
              <Link href="/chi-tiet-du-an" className="hover:text-white transition-colors">Dự án</Link>
              <Link href="/timeline" className="hover:text-white transition-colors">Tiến độ</Link>
              <Link href="/hop-dong-nhom" className="hover:text-white transition-colors">Hợp đồng</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[16px] leading-[1.3]">Dịch vụ</h3>
            <ul className="mt-6 space-y-4 text-[14px] leading-[1.4] text-white/80">
              <li>Phát triển web</li>
              <li>Phát triển Mobile</li>
              <li>DevOps</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[16px] leading-[1.3]">Liên hệ</h3>
            <div className="mt-6 space-y-4 text-[14px] leading-[1.4] text-white/80">
              <p>
                Email:{" "}
                <a href="mailto:24520971@gm.uit.edu.vn" className="underline hover:text-white transition-colors">
                  24520971@gm.uit.edu.vn
                </a>
              </p>
              <p>Phone:</p>
              <p className="max-w-[340px]">
                Address: Khu phố 6, phường Linh Trung, Thành phố Thủ Đức,
                Thành phố HCM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/25 pt-6">
          <div className="flex items-center gap-5">
            <img alt="Twitter" className="size-5" src={imgIconTwitter} />
            <img alt="LinkedIn" className="size-5" src={imgIconLinkedin} />
            <img alt="Facebook" className="size-5" src={imgIconFacebook} />
          </div>
        </div>
      </div>

      {/* Link hidden for SEO/crawlers */}
      <div className="sr-only">
        <Link href="/trang-chu">Trang chủ</Link>
        <Link href="/doi-ngu">Về chúng tôi</Link>
        <Link href="/chi-tiet-du-an">Dự án</Link>
        <Link href="/timeline">Tiến độ</Link>
        <Link href="/hop-dong-nhom">Hợp đồng</Link>
      </div>
    </footer>
  );
}

