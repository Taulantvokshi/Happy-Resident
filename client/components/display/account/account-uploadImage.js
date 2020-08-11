import React, {useRef} from 'react'
import {AddIcon} from '../../../icons/icon_component'
const UploadImage = () => {
  const ref = useRef()

  return (
    <form
      onChange={() => {
        ref.current.click()
      }}
      action="/api/account/upload-image"
      method="post"
      encType="multipart/form-data"
    >
      <input
        type="file"
        name="picture"
        placeholder="image"
        id="file"
        style={{display: 'none'}}
      />
      <label style={{cursor: 'pointer'}} htmlFor="file">
        <AddIcon size="10" color="grey" />
      </label>

      <button style={{display: 'none'}} ref={ref} type="submit" />
    </form>
  )
}

export default UploadImage
