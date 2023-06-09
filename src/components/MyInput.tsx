type InputProps = {
    className?: string;
    text: string;
    type: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>
  };

export default function MyInput(props: InputProps) {
    return (
        <div className={`${props.className}`}>
            <p className="opacity-75">{props.text}</p>
            <input
                className="outline-none text-primary pl-3 pr-3 bg-white w-[250px] h-[40px] rounded-[10px]"
                type={props.type}
                onChange={props.onChange}/>
        </div>
    )
}