export default function Overlay({ inside, setInside }) {
  return (
    <>
      <header>
        <img draggable={false} width="100%" src="/merry_xmas.svg" />
      </header>
      <footer className="footer">
        <button
          className="button--explore"
          onClick={() => {
            setInside(!inside)
          }}>
          SCROLL TO LOOK INSIDE
        </button>
        <br />
        <p style={{ fontSize: '1rem' }}>
          Created with 🫀 by SARIM SOVANDEN from SoB WMAD 🎄🧑‍🎄🦌
        </p>
      </footer>
    </>
  )
}
