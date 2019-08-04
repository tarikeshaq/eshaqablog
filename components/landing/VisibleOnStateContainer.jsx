export default function VisiableOnStateContainer(props) {

    if (props.state) {
        return { ...props.children };
    } else {
        return null;
    }
}