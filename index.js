const Notification = props => {
  //  Write your code here.
  const {imageLink, text, type} = props
  return (
    <div className='box' className={type}>
      <img src={imageLink} className='icon' />
      <p>{text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='contentContainer'>
    <h1 className='mainHeading'>Notifications</h1>
    <div>
      <Notification
        imageLink='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        text='Information Message'
        type='information'
      />
      <Notification
        imageLink='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        text='Success Message'
        type='success'
      />
      <Notification
        imageLink='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        text='Warning Message'
        type='warning'
      />
      <Notification
        imageLink='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        text='Error Message'
        type='error'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
