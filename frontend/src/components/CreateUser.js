import '../css/signup.css'
const CreateUser = (props) => {
    const {oncreateUser,value,onChange} = props
    return (
        <div>
             <div className="signup-col1">
             <img src="../profile/user2.png"></img>
        <form onSubmit={oncreateUser} className="signup-form">
          
          <input id="input-form" placeholder="Name" value={value} onChange={onChange} />
          <button id="btn-form">Create</button>
        </form>
      </div>
        </div>
    )
}

export default CreateUser
