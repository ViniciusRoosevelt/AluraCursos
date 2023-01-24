
import "./style.css";

export const Button = (props: {children: any}) => {
  return <button className="btn">{props.children}</button>;
};
