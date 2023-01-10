// Write your code here.
import './index.css'

const ListItems = props => {
  const {ImgDetails, clickImgItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = ImgDetails
  const isThumbanailActive = isActive ? 'thumbnail_Active' : ''
  const onClickImgItem = () => {
    clickImgItem(id)
  }

  return (
    <li>
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${isThumbanailActive}`}
          onClick={onClickImgItem}
        />
      </button>
    </li>
  )
}

export default ListItems
