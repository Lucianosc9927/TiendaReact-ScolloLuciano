import "./button.css";

export const Button = ({ value, children }) => {
  return (
    <button className="button pressMe">
      {value}
      {children}
    </button>
  );
};
