export default function VisiableOnStateContainer(props) {
  const { state, children } = props;
  if (state) {
    return { ...children };
  }
  return null;
}
