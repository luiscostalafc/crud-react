import "./styles.css";

export const Technology = ({ techs, handleRemoveTechnology }) => {
  return (
    <div className="containerTech">
      {!!techs?.length &&
        techs.map((tech, index) => (
          <div className="contentTech" key={index}>
            <strong>{tech.name}</strong>

            <span>{tech.description}</span>

            <button onClick={() => handleRemoveTechnology(tech.name)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};
