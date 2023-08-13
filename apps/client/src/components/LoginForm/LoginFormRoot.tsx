import { Box } from "../ui/Box";

export const LoginFormRoot: React.FC<Props> = ({ children }) => {
  return (
    <Box className="flex flex-col items-center w-[458px] h-auto p-8 rounded-2xl gap-8">
      {children}
    </Box>
  );
};

type Props = React.HTMLAttributes<HTMLDivElement>;
