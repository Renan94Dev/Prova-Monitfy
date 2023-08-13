import { ChatBox } from "@/components/Chat";
import { LoginForm } from "@/components/LoginForm/";
import { LoginFormContent } from "@/components/LoginForm/LoginFormContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <ChatBox />

      <LoginForm.Root>
        <LoginForm.Logo />
        <LoginFormContent />
      </LoginForm.Root>
    </main>
  );
}
