interface TitlebarProps {
  pageSuper?: string,
  pageTitle?: string,
  pageDescription?: string
}

export default function Titlebar({ pageSuper = "", pageTitle = "", pageDescription = "" }: TitlebarProps) {

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 sm:px-5 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h5>{pageSuper}</h5>
          <h1 className="text-3xl text-center tracking-tight sm:text-4xl/12 md:text-[2.5rem]/12 mb-8 pt-10">{pageTitle}</h1>
           <h2>{pageDescription}</h2>
        </div>
      </div>
    </section>
  )
}
