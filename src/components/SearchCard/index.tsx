
import Button, { ButtonProps } from '../Button'
import Input, { InputProps } from '../Input'
import styles from './searchcard.module.scss'

type SearchCardProps = {
  title: string,
  margin?: string,
  width?: number,
  height?: number,
  image: string | boolean,
  alt: string,
  buttonProps?: ButtonProps,
  inputProps?: InputProps,
  imageMargin?: string,
  imageWidth?: number,
  imageHeight?: number,
  borderRadius: string,
  summonerName: string,
  summonerLevel: string,
  championPicture?: string,
  championPictureAlt?: string,
  championPictureMargin?: string,
  championPictureWidth?: number,
  championPictureHeight?: number,
  championPictureBorderRadius: string
}

export default function SearchCard({
  title,
  margin,
  width,
  height,
  image,
  alt,
  buttonProps,
  inputProps,
  imageMargin,
  imageHeight,
  imageWidth,
  borderRadius,
  summonerName,
  summonerLevel,
  championPicture,
  championPictureAlt,
  championPictureMargin,
  championPictureWidth,
  championPictureHeight,
  championPictureBorderRadius
}: SearchCardProps) {

  return (
    <div className={styles.card} style={{ margin, width, height }}>
      <h1>{title}</h1>
      {inputProps && <Input {...inputProps} />}
      {buttonProps && <Button {...buttonProps} />}
      {image && <img src={image as string} alt={alt} style={{ margin: imageMargin, width: imageWidth, height: imageHeight, borderRadius }} />
      }
      <h2>{summonerName}</h2>
      {summonerLevel && <p><strong>Level:</strong> {summonerLevel}</p>}
      {championPicture &&
        <>
          <img src={championPicture} alt={championPictureAlt} style={{ margin: championPictureMargin, width: championPictureWidth, height: championPictureHeight, borderRadius: championPictureBorderRadius }} /> <p>Most played champion</p>
        </>
      }
    </div>
  )
}
