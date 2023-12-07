export default function weather (props) {
    console.log(props.weather)
    return (
        <div>
    {JSON.stringify(props.weather)}
        </div>
    )
}