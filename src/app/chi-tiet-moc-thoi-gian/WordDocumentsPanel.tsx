"use client";

import { useEffect, useRef, useState } from "react";

type DocItem = {
  title: string;
  size: string;
  href?: string;
};

type Props = {
  initialDocs: DocItem[];
  headerIcon: string;
  fileIcon: string;
  actionIcon: string;
};

export function WordDocumentsPanel({
  initialDocs,
  headerIcon,
  fileIcon,
  actionIcon,
}: Props) {
  const [docs, setDocs] = useState<DocItem[]>(initialDocs);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      // Revoke blob URLs created during this session to avoid memory leaks.
      docs.forEach((doc) => {
        if (doc.href?.startsWith("blob:")) {
          URL.revokeObjectURL(doc.href);
        }
      });
    };
  }, [docs]);

  function formatBytes(bytes: number) {
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB • PDF`;
    }
    if (bytes >= 1024) {
      return `${Math.round(bytes / 1024)} KB • PDF`;
    }
    return `${bytes} B • PDF`;
  }

  async function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const extension = file.name.toLowerCase();
    if (!extension.endsWith(".pdf")) {
      setErrorMessage("Chỉ hỗ trợ file PDF (.pdf)");
      event.target.value = "";
      return;
    }

    setErrorMessage("");
    setIsUploading(true);

    try {
      const newItem: DocItem = {
        title: file.name,
        size: formatBytes(file.size),
        href: URL.createObjectURL(file),
      };

      setDocs((prev) => [newItem, ...prev]);
    } catch {
      setErrorMessage("Không thể tải file lên lúc này");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  }

  return (
    <>
      <div className="flex items-center gap-[8px]">
        <img alt="" src={headerIcon} className="w-[16px] h-[16px]" />
        <div className="font-bold text-[#1a1c19] text-[18px]">PDF Documents</div>
      </div>

      <div className="mt-[16px] space-y-[12px]">
        {docs.map((d) => (
          <div
            key={`${d.title}-${d.size}`}
            className="bg-white border border-[rgba(190,202,185,0.1)] rounded-[8px] p-[13px] flex items-center justify-between"
          >
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#eff6ff] rounded-[4px] w-[40px] h-[40px] flex items-center justify-center">
                <img alt="" src={fileIcon} className="w-[16px] h-[20px]" />
              </div>
              <div>
                <div className="text-[#1a1c19] font-semibold text-[14px] leading-[20px]">
                  {d.title}
                </div>
                <div className="text-[#3f4a3c] text-[12px] leading-[16px]">{d.size}</div>
              </div>
            </div>
            {d.href ? (
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="w-[16px] h-[16px]"
                aria-label={`Mở ${d.title}`}
              >
                <img alt="" src={actionIcon} className="w-full h-full object-contain" />
              </a>
            ) : (
              <div className="w-[16px] h-[16px]">
                <img alt="" src={actionIcon} className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        ))}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        className="hidden"
        onChange={onFileChange}
      />

      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
        className="mt-[16px] w-full border-2 border-[#becab9] border-dashed rounded-[12px] p-[16px] text-center text-[#3f4a3c] text-[14px] disabled:opacity-60"
      >
        {isUploading ? "Đang tải lên..." : "+ Tải lên tài liệu mới"}
      </button>

      {errorMessage ? (
        <div className="mt-[8px] text-[12px] text-[#b42318]">{errorMessage}</div>
      ) : null}
    </>
  );
}
