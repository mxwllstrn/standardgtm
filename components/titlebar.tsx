interface TitlebarProps {
  pageSuper?: string,
  pageTitle?: string,
  pageDescription?: string,
  bgColor?: string,
}

export default function Titlebar({ pageSuper = "", pageTitle = "", pageDescription = "", bgColor = "" }: TitlebarProps) {

  return (
    <section className="w-full py-12 md:pt-20 md:pb-12 lg:pt-20 lg:pb-12 px-4 sm:px-5 lg:px-10">
      <div className={`rounded-xs ${bgColor ? bgColor : ""}`}>
        <div className="mx-auto max-w-3xl py-12">
          <h5>{pageSuper}</h5>
          <br />
          <h1 className="text-3xl text-center tracking-tight sm:text-4xl/12 md:text-[2.5rem]/12 text-neutral-950">{pageTitle}</h1>
          <br />
          <h2 className="text-md text-center tracking-normal sm:text-4xl/8 md:text-[1.25rem]/7 text-neutral-500 max-w-md mx-auto">{pageDescription}</h2>
        </div>
      </div>
    </section>
  )
}
