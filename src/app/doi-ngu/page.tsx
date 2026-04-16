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

const members = [
  {
    name: "Trần Thị Phương Linh",
    role: "Team Leader",
    img: imgPhuongLinh,
    desc: "Điều phối kế hoạch, phân bổ nguồn lực và kết nối thành viên để dự án luôn đúng tiến độ.",
    badges: ["Team Leader", "Project Planning", "Coordination"],
    expertise: ["Planning", "Leadership", "Communication", "Agile"],
  },
  {
    name: "Nguyễn Trần Thủy Tiên",
    role: "Business Analyst",
    img: imgThuyTien,
    desc: "Phân tích yêu cầu nghiệp vụ và chuyển đổi nhu cầu thực tế thành đặc tả rõ ràng cho đội phát triển.",
    badges: ["Business Analyst", "Requirement", "Process"],
    expertise: ["User Story", "Flowchart", "Documentation", "Research"],
  },
  {
    name: "Lê Thị Thanh Tiền",
    role: "Frontend Developer",
    img: imgThanhTien,
    desc: "Phát triển giao diện trực quan, tối ưu trải nghiệm đa thiết bị và đảm bảo tính nhất quán toàn hệ thống.",
    badges: ["Frontend Developer", "UI/UX", "Accessibility"],
    expertise: ["React", "TypeScript", "Tailwind", "Responsive UI"],
  },
  {
    name: "Nguyễn Tuấn Vũ",
    role: "Backend Developer",
    img: imgTuanVu,
    desc: "Xây dựng API, thiết kế cơ sở dữ liệu và tối ưu logic để hệ thống ổn định, an toàn.",
    badges: ["Backend Developer", "System Design", "API"],
    expertise: ["Node.js", "PostgreSQL", "REST API", "Security"],
  },
  {
    name: "Đoàn Thị Thùy Trang",
    role: "Testing (QA/QC)",
    img: imgThuyTrang,
    desc: "Thiết kế test case, kiểm thử chức năng và theo dõi lỗi để đảm bảo chất lượng trước khi bàn giao.",
    badges: ["QA/QC", "Testing", "Bug Tracking"],
    expertise: ["Test Case", "Regression", "UAT", "Quality Control"],
  },
];

export default function DoiNguPage() {
  return (
    <div className="bg-[#fafaf5] min-h-screen">
      <TopNavBar active="doi-ngu" />

      <main className="pt-[112px] md:pt-[128px] pb-[100px] px-[48px]">
        <div className="max-w-384 mx-auto">
          <section className="relative flex flex-col items-start">
            <div className="hidden lg:block bg-[#efefeb] absolute rounded-bl-[120px] right-0 -top-11 h-90 w-[44%] -z-10" />

            <div className="bg-[#88d982] text-[#005312] px-3 py-1 rounded-full w-max">
              <div className="font-bold text-[10px] tracking-[1.4px] uppercase leading-4">
                Human Capital
              </div>
            </div>

            <h1
              className={`${notoSerifExtraBold.className} mt-3.5 font-black text-[#1a1c19] text-[56px] md:text-[72px] lg:text-[84px] leading-[0.95] tracking-[-1.2px]`}
            >
              Thành viên
            </h1>

            <p className="mt-3.5 text-[#4b5547] text-[18px] md:text-[22px] leading-[1.35] max-w-155">
              Tại Trùm Nông Sản, chúng tôi kết hợp trí tuệ công nghệ cao với
              tình yêu đất đai, kiến tạo một tương lai nông nghiệp minh bạch
              và bền vững cho người Việt.
            </p>
          </section>

          <section className="mt-11.5 md:mt-14.5">
            <div className="flex flex-col gap-6">
              {members.map((m, idx) => (
                <article
                  key={`${m.name}-${idx}`}
                  className="w-full max-w-[1100px] mx-auto rounded-2xl border border-[#dfe5dd] bg-[#f3f5f0] shadow-[0_14px_40px_rgba(22,49,24,0.08)] overflow-hidden"
                >
                  <div
                    className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
                  >
                    <div className="w-[260px] h-[298.917px] bg-[#dfe4d8] shrink-0 self-center md:self-auto">
                      <img
                        alt={m.name}
                        src={m.img}
                        className="w-[260px] h-[298.917px] object-cover"
                      />
                    </div>
                    <div
                      className={`flex-1 px-5 py-5 md:px-7 md:py-6 ${idx % 2 === 1 ? "md:text-right" : "md:text-left"}`}
                    >
                      <div
                        className={`max-w-[620px] ${idx % 2 === 1 ? "md:ml-auto" : "md:mr-auto"}`}
                      >
                        <div className="font-bold text-[#1a1c19] text-[34px] md:text-[38px] leading-[1.02] tracking-[-0.5px]">
                          {m.name}
                        </div>

                        <div
                          className={`mt-3 flex flex-wrap gap-2 ${idx % 2 === 1 ? "md:justify-end" : "md:justify-start"}`}
                        >
                          {m.badges.map((badge) => (
                            <span
                              key={badge}
                              className="px-3 py-1 rounded-full bg-[#dce7ff] text-[#24458f] text-[12px] leading-4 font-semibold"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>

                        <p className="mt-3.5 text-[#465042] text-[17px] leading-[1.5]">
                          {m.desc}
                        </p>

                        <div className="mt-5 text-[#243023] font-bold text-[23px] leading-[1.05] tracking-[-0.2px]">
                          Chuyên môn:
                        </div>

                        <div
                          className={`mt-3 flex flex-wrap gap-2 ${idx % 2 === 1 ? "md:justify-end" : "md:justify-start"}`}
                        >
                          {m.expertise.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1 rounded-full bg-[#efe4ff] text-[#6b34a5] text-[12px] leading-4 font-semibold"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 text-[10px] tracking-[1px] font-bold uppercase text-[#2f7a38]">
                          {m.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <TrumFooter />
    </div>
  );
}

