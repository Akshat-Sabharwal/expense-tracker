export const ExpenseCard = ({ amount, description, tags }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexFlow: "column wrap",
        gap: "0.5rem",
        padding: "1.8rem",
        width: "fit-content",
        borderRadius: "1rem",
        boxShadow: "0em 0.3rem 0.5rem 0.1rem grey",
        backgroundColor: "#D5F7E6",
      }}
    >
      <h1
        style={{
          color: "#1A2E35",
        }}
      >
        ${amount}
      </h1>
      <p
        style={{
          color: "#1a2e35",
          marginBottom: "0.5rem",
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: "inline-block",
          marginTop: "0.6rem",
        }}
      >
        {tags.map((tag) => (
          <span
            style={{
              color: "white",
              backgroundColor: "#87d7af",
              padding: "0.5rem 1rem",
              borderRadius: "5rem",
              margin: "0rem 0.7rem 0.2rem 0rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
