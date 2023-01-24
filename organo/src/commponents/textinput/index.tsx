import "./style.css";

const TextInput = (props: {
  required: boolean;
  label: string;
  placeholder: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) => {

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        onChange={props.onChange}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default TextInput;
