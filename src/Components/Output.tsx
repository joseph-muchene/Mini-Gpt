

function Output({ targetText }: { targetText: string }) {
  return (
    <div className="container my-4 border">
      <p className="text-center py-2 text-success">
        {targetText.length < 1 ? "welcome to mini Gpt. Write prompt to get started" : targetText}
      </p>
    </div>
  );
}

export default Output;
