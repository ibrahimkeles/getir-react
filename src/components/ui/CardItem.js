
export default function CardItem({ card }) {
    return (
        <div className="bg-white p-14 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src={card.image} className="w-[150px] h-[150px] mb-6" />
            <h6 className="font-semibold text-lg text-primary-brand-color mb-3">{card.title}</h6>
            <p className="mb-2 text-sm text-gray-700">{card.description}</p>
        </div>
    )
}
