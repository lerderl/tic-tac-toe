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

export default function Home() {
  return (
    <>
      <div className="board-row">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>
      <div className="board-row">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
      </div>
      <div className="board-row">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
      </div>
    </>
  );
}
