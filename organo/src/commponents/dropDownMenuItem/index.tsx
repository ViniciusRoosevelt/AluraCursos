import "./style.css";

export const DropDownMenuItem = (props: {
  required: boolean;
  label: string;
  itens: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  value: string;
}) => {

  return (
    <div
      className="
    dropdown-list"
    >
      <label>{props.label}</label>
      <select
        onChange={props.onChange}
        value={props.value}
        required={props.required}
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
  
};
