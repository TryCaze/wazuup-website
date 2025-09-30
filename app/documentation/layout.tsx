import Sidebar from "./components/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="fixed mt-4 left-0 top-0 h-screen w-64 border-r border-gray-800 p-6">
        <Sidebar />
      </aside>
      <main className="ml-64 mt-4 flex-1 overflow-y-auto p-10">
        {children}
      </main>
    </div>
  );
}