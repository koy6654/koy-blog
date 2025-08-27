export function PostPreviewPageLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-col">{children}</main>;
}

export function MdxViewerPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="mx-auto flex flex-col p-10 sm:p-20">{children}</main>
    </div>
  );
}
