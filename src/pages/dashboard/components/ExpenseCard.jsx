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
        $1300
      </h1>
      <p
        style={{
          color: "#1a2e35",
          marginBottom: "0.5rem",
        }}
      >
        Nostrud amet tempor fugiat mollit est mollit adipisicing voluptate
        incididunt. Dolore reprehenderit quis eu sint pariatur ullamco aute
        magna anim magna laborum est voluptate amet. Magna laboris et excepteur
        veniam irure labore elit consectetur fugiat Lorem aute consequat
        occaecat. Cillum sunt esse occaecat incididunt elit enim eu. Nostrud
        proident culpa deserunt eiusmod.
      </p>
      <span
        style={{
          color: "#1a2e35",
          backgroundColor: "#87d7af",
          padding: "0.5rem 1rem",
          borderRadius: "5rem",
        }}
      >
        Food
      </span>
    </div>
  );
};
