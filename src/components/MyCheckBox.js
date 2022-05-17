const MyCheckBox = ({label, id}) => {
    return(
      <div className="form-check mb-3">
          <input className="form-check-input" id={id} type="checkbox" value="" />
          <label className="form-check-label" htmlFor={id}>{label}</label>
      </div>
    )
}

export default MyCheckBox;
