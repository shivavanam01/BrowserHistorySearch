import './index.css'

const HistorySearch = props => {
  const {eachlistdetails, deleteclickedlist} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachlistdetails

  const deletelist = () => deleteclickedlist(id)

  return (
    <li className="list-item">
      <div>
        <p className="para">{timeAccessed}</p>
      </div>
      <div className="info-container">
        <img src={logoUrl} className="image-size" alt="domain logo" />
        <p className="name">{title}</p>
        <p className="domian-name">{domainUrl}</p>
      </div>
      <div>
        <button type="button" onClick={deletelist} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistorySearch
