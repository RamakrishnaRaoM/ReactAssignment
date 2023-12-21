function Button({text,clicked}) {
  return (<>
    <button onClick={clicked}>{text}</button>
        </>);
}
export default Button;