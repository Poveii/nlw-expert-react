export function NoteCard() {
  return (
    <button className="rounded-md text-left outline-none bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">
        Há 3 dias
      </span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt corporis ratione natus itaque earum reprehenderit dolorum aperiam, ipsum, placeat harum possimus corrupti optio cupiditate tenetur maxime dolorem ipsam, ut iusto.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit modi exercitationem consequatur omnis iste nam eveniet iusto commodi deserunt consequuntur perspiciatis qui labore quod sit totam quisquam, eius molestiae corporis?
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}
