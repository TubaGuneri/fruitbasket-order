

function OrderForm (type, name, formValue, handleChange, labelName, fieldName) {
    return (
        <>
            <label>
                {labelName}
                <input
                    type={type}
                    name= {fieldName}
                    value = {formValue}
                    onChange = {handleChange}
                />
            </label>


        </>
    )
}
export default OrderForm;