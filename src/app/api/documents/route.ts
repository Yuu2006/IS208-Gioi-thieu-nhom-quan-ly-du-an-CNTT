import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const documentsDir = path.join(process.cwd(), "public", "uploads", "documents");
const allowedExtensions = new Set([".doc", ".docx"]);

async function ensureDocumentsDir() {
  await fs.mkdir(documentsDir, { recursive: true });
}

function formatBytes(bytes: number) {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB • DOCX`;
  }
  if (bytes >= 1024) {
    return `${Math.round(bytes / 1024)} KB • DOCX`;
  }
  return `${bytes} B • DOCX`;
}

export async function GET() {
  try {
    await ensureDocumentsDir();

    const entries = await fs.readdir(documentsDir, { withFileTypes: true });
    const files = entries.filter((entry) => entry.isFile() && entry.name !== ".gitkeep");

    const docs = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(documentsDir, file.name);
        const stat = await fs.stat(filePath);
        const ext = path.extname(file.name).toLowerCase();

        return {
          title: file.name,
          size: formatBytes(stat.size).replace("DOCX", ext === ".doc" ? "DOC" : "DOCX"),
          href: `/uploads/documents/${encodeURIComponent(file.name)}`,
          updatedAt: stat.mtime.getTime(),
        };
      })
    );

    docs.sort((a, b) => b.updatedAt - a.updatedAt);

    return NextResponse.json({ items: docs.map(({ updatedAt, ...doc }) => doc) });
  } catch {
    return NextResponse.json({ error: "Không thể tải danh sách tài liệu" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureDocumentsDir();

    const formData = await request.formData();
    const uploadedFile = formData.get("file");

    if (!(uploadedFile instanceof File)) {
      return NextResponse.json({ error: "Thiếu file tải lên" }, { status: 400 });
    }

    const originalName = uploadedFile.name;
    const extension = path.extname(originalName).toLowerCase();

    if (!allowedExtensions.has(extension)) {
      return NextResponse.json(
        { error: "Chỉ hỗ trợ file Word (.doc, .docx)" },
        { status: 400 }
      );
    }

    const safeBaseName = path
      .basename(originalName, extension)
      .replace(/[^a-zA-Z0-9-_ ]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "document";

    const fileName = `${Date.now()}-${safeBaseName}${extension}`;
    const destinationPath = path.join(documentsDir, fileName);

    const bytes = await uploadedFile.arrayBuffer();
    await fs.writeFile(destinationPath, Buffer.from(bytes));

    return NextResponse.json({
      item: {
        title: fileName,
        size: formatBytes(bytes.byteLength).replace("DOCX", extension === ".doc" ? "DOC" : "DOCX"),
        href: `/uploads/documents/${encodeURIComponent(fileName)}`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Tải file thất bại" }, { status: 500 });
  }
}
