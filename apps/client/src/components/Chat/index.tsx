import Image from "next/image";

export const ChatBox: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-secondary fixed bottom-8 right-8 shadow-lg">
      <Image
        src="/chatIcon.svg"
        alt="icone chat"
        width={32}
        height={32}
        priority={true}
      />
    </div>
  );
};
