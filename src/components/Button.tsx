interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ type = "button", children, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="square">
      {children}
    </button>
  );
};
