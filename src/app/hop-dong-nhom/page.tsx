import { TopNavBar } from "../components/TopNavBar";
import { TrumFooter } from "../components/TrumFooter";

const imgStatusIcon =
  "https://www.figma.com/api/mcp/asset/0368a1c4-c8df-4efa-813b-857cc81c5706";
const imgContainer5 =
  "https://www.figma.com/api/mcp/asset/e8ab61c5-767e-4cfc-8683-65e4cb4ae739";
const imgContainer6 =
  "https://www.figma.com/api/mcp/asset/8ecd93b5-5345-40e3-8ab4-6b5fe74dbae5";
const imgContainer7 =
  "https://www.figma.com/api/mcp/asset/e0ae3d15-4fdc-4850-a848-1ab775f6e54b";
const imgButton =
  "https://www.figma.com/api/mcp/asset/e94514e6-cf46-46fa-b637-7af64b2b2cdd";
const basePath =
  process.env.NODE_ENV === "production"
    ? "/IS208-Gioi-thieu-nhom-quan-ly-du-an-CNTT"
    : "";
const teamAgreementPdf = `${basePath}/IS208.Q21.pdf`;

export default function HopDongNhomPage() {
  return (
    <div className="bg-[#fafaf5] min-h-screen">
      <TopNavBar active="hop-dong" />

      <main className="pt-[112px] md:pt-[128px] pb-[100px] px-[48px]">
        <div className="max-w-[1536px] mx-auto">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-start">
            <div className="lg:col-span-8">
              <h1 className="font-black text-[#1a1c19] text-[48px] leading-[60px]">
                Hợp đồng Nhóm
              </h1>
              <div className="font-medium text-[#1b6d24] text-[36px] leading-[40px] mt-[4px]">
                (Team Agreement)
              </div>
              <p className="mt-[16px] text-[#3f4a3c] text-[18px] leading-[29.25px] max-w-[672px]">
                Tài liệu này trình bày các điều khoản và điều kiện cho sự hợp tác dự án của chúng tôi. Vui lòng xem xét kỹ thỏa thuận trước khi tiến hành bất kỳ dự án nào.
              </p>
            </div>
          </section>

          <section className="mt-[48px] bg-[#f4f4ef] rounded-[12px] border border-[rgba(190,202,185,0.1)] p-[32px]">
            <div className="bg-[#e3e3de] rounded-[12px] overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center justify-end px-[32px] py-[16px] bg-[#e3e3de]">
                <a
                  href={teamAgreementPdf}
                  download="IS208.Q21.pdf"
                  className="bg-[#1b6d24] rounded-full px-[24px] py-[10px] flex items-center gap-[8px]"
                >
                  <img alt="" src={imgContainer5} className="w-[12px] h-[12px] object-contain" />
                  <span className="text-white font-bold text-[14px]">Tải xuống PDF</span>
                </a>
              </div>

              {/* PDF preview */}
              <div className="bg-[#eeeee9] h-[1000px] p-[2px]">
                <iframe
                  src={teamAgreementPdf}
                  title="IS208.Q21 Team Agreement"
                  className="w-full h-full rounded-[12px] border border-[rgba(190,202,185,0.22)] bg-white"
                />
              </div>
            </div>

            <div className="mt-[32px] grid grid-cols-1 lg:grid-cols-12 gap-[32px]">
              <div className="lg:col-span-8 bg-[rgba(227,227,222,0.4)] rounded-[12px] p-[32px]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
                  <div className="space-y-[4px]">
                    <div className="text-[#6f7a6b] text-[12px] uppercase tracking-[1.2px] font-bold">
                      Document Type
                    </div>
                    <div className="text-[#1a1c19] text-[16px] font-medium">
                      Project Agreement
                    </div>
                  </div>
                  <div className="space-y-[4px]">
                    <div className="text-[#6f7a6b] text-[12px] uppercase tracking-[1.2px] font-bold">
                      Version
                    </div>
                    <div className="text-[#1a1c19] text-[16px] font-medium">
                      1.0 (Current)
                    </div>
                  </div>
                  <div className="space-y-[4px]">
                    <div className="text-[#6f7a6b] text-[12px] uppercase tracking-[1.2px] font-bold">
                      Last Updated: 
                    </div>
                    <div className="text-[#1a1c19] text-[16px] font-medium flex items-center gap-[8px]">
                      March 15, 2025
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[rgba(254,215,202,0.3)] border border-[#fed7ca] rounded-[12px] p-[32px]">
                <div className="text-[#1a1c19] font-bold text-[18px]">Need Help?</div>
                <p className="mt-[8px] text-[#3f4a3c] text-[14px] leading-[22.75px]">
                  Questions regarding legal clauses or digital signatures?
                </p>
                <div className="mt-[16px] flex items-center gap-[8px] text-[#1b6d24] font-bold">
                  <img alt="" src={imgContainer7} className="w-[12px] h-[12px] object-contain" />
                  24520971@gm.uit.edu.vn
                </div>
                <img alt="" src={imgButton} className="hidden" />
              </div>
            </div>
          </section>
        </div>
      </main>

      <TrumFooter />
    </div>
  );
}

