interface ILoadingProps {
  loading: boolean;
}

const Loading: React.FC<ILoadingProps> = (props) => {
  const { loading } = props;

  if (loading) {
    return <>Loading...</>;
  } else {
  }

  return <div>{props.children}</div>;
};

export default Loading;
