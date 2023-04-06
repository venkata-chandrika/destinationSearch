// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetailsList} = props
  const {imgUrl, name} = destinationDetailsList
  return (
    <li className="container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="text">{name}</p>
    </li>
  )
}

export default DestinationItem
