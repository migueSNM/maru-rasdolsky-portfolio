import './BackgroundScene.css'

export default function BackgroundScene({ active }) {
  return <div className={`bg-scene bg-scene--${active}`} aria-hidden="true" />
}
