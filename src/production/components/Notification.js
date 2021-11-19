
const Notification = ({text,type}) =>{

    return (
        <div className={`text-center alert ${type}`} role="alert">
          {text}  
        </div>
    )
}

export default Notification