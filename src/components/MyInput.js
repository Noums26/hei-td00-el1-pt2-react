const MyInput = (props) => {
    const {label, id, type, placeholder} = props

    return (
        <div className="form-floating mb-3">
            <input className="form-control" id={id} type={type} placeholder={placeholder} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default MyInput;
