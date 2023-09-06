type Props = {
  params: {
    value: string;
  };
};

export default function UserSearchResultPage({ params: { value } }: Props) {
  const decodedValue = decodeURI(value);

  return <div></div>;
}
