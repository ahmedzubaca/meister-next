'use client'

export default function ScrollTopArrow({children}) {
  const scrollTop = () => {
    window.scrollTo(0,0)
  }

  return(
    <div onClick={scrollTop}>
      {children}
    </div>
  )
}