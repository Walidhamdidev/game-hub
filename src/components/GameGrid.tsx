import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, isLoading, games } = useGames();

  return (
    <div>
      {isLoading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {games && games.map((game) => <p key={game.id}>{game.name}</p>)}
    </div>
  );
};

export default GameGrid;
