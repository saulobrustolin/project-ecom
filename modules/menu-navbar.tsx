export default function MenuBar({ index, content }) {
    console.log(content[index]);
    return (
        <div
            className="animation-menu"
        >
            {content[index].name}
        </div>
    )
}