
export default function Menu({ menu }) {
    return (
        <section>
            <nav className=" grid gap-y-4">
                <h6 className="text-lg text-primary-brand-color">{menu.title}</h6>
                <nav>
                    <ul className="grid gap-y-2">
                        {menu.items.map((item, key) => (
                            <li key={key} >
                                <a href={item.link} className="text-sm hover:text-brand-color">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </nav>
        </section>
    )
}