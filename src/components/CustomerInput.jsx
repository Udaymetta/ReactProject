import "../components/customerInput.css"

const CustomerInput = ({handle, data}) => {
    return (
        <form className="details-sec">
            <div>
            <Inputs name="intial investment" handleChange = {handle} val = {data}/>
            <Inputs name="expected return" handleChange = {handle} val = {data}/>
            </div>
            <div>
            <Inputs name="annual investment" handleChange = {handle} val = {data}/>
            <Inputs name="duration" handleChange = {handle} val = {data}/>
            </div>
        </form>
    )
}

const Inputs = ({name, handleChange, val}) => {
    return (
        <section className="input-field">
            <label>{name}</label>
            <input type="number" placeholder={0} onChange={(event) => handleChange(name,event.target.value)} value={val[name] || ""} required/>
        </section>
    )
}

export default CustomerInput;