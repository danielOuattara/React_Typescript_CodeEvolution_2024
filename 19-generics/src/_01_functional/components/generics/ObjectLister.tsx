type PropsType = {
  item: Object;
};

export default function ObjectLister(props: PropsType) {
  return (
    <ul>
      {Object.entries(props.item).map((subArray) => {
        const [key, value] = subArray;
        return (
          <li
            style={{
              textAlign: "center",
              margin: "10px 0 10px 10px",
            }}
            key={key}
          >
            {" "}
            <b>{key}</b> : {value}
          </li>
        );
      })}
    </ul>
  );
}
