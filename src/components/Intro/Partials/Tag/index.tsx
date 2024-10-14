import { TagContainer } from "./styles"

interface TagProps {
  name: string
  color: string
  smaller?: boolean
}

export function Tag({color, name, smaller = false}: TagProps) {
  return (
    <TagContainer className={smaller ? 'smaller' : ''} bgColor={color}>
      <p>{name}</p>
    </TagContainer>
  )
}