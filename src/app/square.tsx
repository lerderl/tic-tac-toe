interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type = "button", children, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="square">
      {children}
    </button>
  );
};

type Props = {
  value: number; // enforce number at runtime
};

export function Square({ value }: Readonly<Props>) {
  return <Button>{value}</Button>;
}
