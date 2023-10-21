import ContentInput from "@/components/ContentInput";
import ContentOutput from "@/components/ContentOutput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full space-x-4">
        <div className="flex-1">
          <ContentInput></ContentInput>
        </div>
        <div className="self-center">转化图标</div>
        <div className="flex-1">
          <ContentOutput></ContentOutput>
        </div>
      </div>
    </main>
  );
}
