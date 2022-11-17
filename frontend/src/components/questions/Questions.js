function Questions({ alternatives }) {
  return <div>{makeQuestions(alternatives)}</div>;
}

function makeQuestions(alternatives) {
  return alternatives.map((v, i) => {
    return (
      <div key={i}>
        <input type="radio" id={v.title} name="fav_language" value={v.title} />
        <label for={v.title}>{v.title}</label>
      </div>
    );
  });
}

export default Questions;
