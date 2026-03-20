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
    <footer className="bg-[#0a142f] h-[440px] overflow-clip relative shrink-0 w-full">
      <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.78px)] top-[89px]">
        <div className="absolute inset-[82.02%_12.08%_13.21%_52.85%]" />
        <div className="absolute contents inset-[82.23%_79.98%_13.23%_12.2%]">
          <div className="absolute content-stretch flex gap-[20px] inset-[82.23%_79.98%_13.23%_12.2%] items-center overflow-clip">
            <div className="relative shrink-0 size-[20px]">
              <img
                alt=""
                className="absolute block max-w-none size-full"
                src={imgIconTwitter}
              />
            </div>
            <div className="relative shrink-0 size-[20px]">
              <img
                alt=""
                className="absolute block max-w-none size-full"
                src={imgIconLinkedin}
              />
            </div>
            <div className="relative shrink-0 size-[20px]">
              <img
                alt=""
                className="absolute block max-w-none size-full"
                src={imgIconFacebook}
              />
            </div>
          </div>
        </div>

        <div className="absolute bg-white inset-[78.45%_12.71%_21.36%_12.71%] opacity-25" />

        <div className="absolute contents leading-[1.5] left-[530px] text-white top-[89px] whitespace-nowrap">
          <Link
            href="/hop-dong-nhom"
            className="absolute font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal left-[530px] opacity-70 text-[14px] top-[297px]"
          >
            Hợp đồng
          </Link>
          <Link
            href="/timeline"
            className="absolute font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal left-[530px] opacity-70 text-[14px] top-[256px]"
          >
            Tiến độ
          </Link>
          <Link
            href="/gioi-thieu-nhom"
            className="absolute font-['Instrument_Sans:Regular',sans-serif] font-normal left-[530px] opacity-70 text-[14px] top-[174px]"
          >
            Về chúng tôi
          </Link>
          <Link
            href="/chi-tiet-du-an"
            className="absolute font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal left-[530px] opacity-70 text-[14px] top-[215px]"
          >
            Dự án
          </Link>
          <Link
            href="/trang-chu"
            className="absolute font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal left-[530px] opacity-70 text-[14px] top-[133px]"
          >
            Trang chủ
          </Link>
          <p className="absolute font-['Instrument_Sans:Bold',sans-serif] font-bold left-[535px] text-[16px] top-[89px]">
            Liên kết nhanh
          </p>
        </div>

        <div className="absolute content-stretch flex flex-col inset-[20.24%_38.19%_32.72%_54.17%] items-start overflow-clip">
          <div className="h-[207px] leading-[1.5] relative shrink-0 text-white w-full">
            <p className="absolute font-['Instrument_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold h-[21.75px] left-0 text-[16px] top-0 w-[110px]">
              Dịch vụ
            </p>
            <p className="absolute font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[21.75px] left-0 opacity-70 text-[14px] top-[41.75px] w-[110px]">
              Phát triển web
            </p>
            <p className="absolute font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[21.75px] left-0 opacity-70 text-[14px] top-[83.5px] w-[110px]">
              Phát triển Mobile
            </p>
            <p className="absolute font-['Instrument_Sans:Regular',sans-serif] font-normal h-[21.75px] left-0 opacity-70 text-[14px] top-[125.25px] w-[110px]">
              DevOps
            </p>
          </div>
        </div>

        <div className="absolute content-stretch flex flex-col inset-[20.23%_10.63%_32.73%_70.42%] items-start overflow-clip">
          <div className="h-[207px] leading-[1.5] relative shrink-0 text-white w-full">
            <p className="absolute font-['Instrument_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold h-[21.75px] left-0 text-[16px] top-0 w-[110px]">
              Liên hệ
            </p>
            <p className="absolute font-['Instrument_Sans:Regular',sans-serif] font-normal h-[21.75px] left-0 opacity-70 text-[14px] top-[42px] w-[220px]">
              Email: {" "}
              <a href="mailto:24520971@gm.uit.edu.vn" className="underline">
                24520971@gm.uit.edu.vn
              </a>
            </p>
            <p className="absolute font-['Instrument_Sans:Regular',sans-serif] font-normal h-[21.75px] left-0 opacity-70 text-[14px] top-[83.5px] w-[110px]">
              Phone:
            </p>
            <p className="absolute font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[22px] left-0 opacity-70 text-[14px] top-[125px] w-[256px]">
              Address: Khu phố 6, phường Linh Trung, Thành phố Thủ Đức, Thành phố HCM
            </p>
          </div>
        </div>

        <div className="absolute h-[80px] left-[182px] top-[89px] w-[348px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgUit1}
          />
        </div>

        <div className="absolute contents leading-[1.5] left-[182px] text-white top-[192px]">
          <p className="absolute font-['Instrument_Sans:Bold','Noto_Sans:Bold',sans-serif] font-bold h-[31.5px] left-[184px] text-[16px] top-[192px] w-[261px]">
            TRÙM NÔNG SẢN
          </p>
          <p className="absolute font-['Instrument_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal h-[56.438px] left-[182px] opacity-70 text-[14px] top-[230px] w-[253.209px]">
            Đội ngũ phát triển tiên phong, nâng cao trải nghiệm của doanh nghiệp và khách hàng
          </p>
        </div>
      </div>

      {/* Link hidden for SEO/crawlers */}
      <div className="sr-only">
        <Link href="/trang-chu">Trang chủ</Link>
        <Link href="/gioi-thieu-nhom">Về chúng tôi</Link>
        <Link href="/chi-tiet-du-an">Dự án</Link>
        <Link href="/timeline">Tiến độ</Link>
        <Link href="/hop-dong-nhom">Hợp đồng</Link>
      </div>
    </footer>
  );
}

