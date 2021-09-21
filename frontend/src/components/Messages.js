import '../css/messages.css'
const Messages = (props) => {
    const {onChange,data,onSend,value,chat} = props;
    return (
        <div>
        <form className="msg-form" onSubmit={onSend}>
        <div className="msg-section">
        {
            chat.map((msg)=>{
                console.log(msg)
                return <span id="msgs">{msg.message}</span>
            })
        }
      </div>
      <div className="msg-room">
            <input className="input-form" type="text" placeholder="Type Something..." value={value} onChange={onChange}></input>
            <button className="input-btn" type="submit">Send</button>
            </div>
        </form>
        </div>
    )
}

export default Messages
