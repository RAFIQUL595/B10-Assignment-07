import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
const AvailablePlayers = ({ coinAdd, setCoinAdd }) => {
  const [selectedButton, setSelectedButton] = useState("available");
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);

  // Handle button click to switch between available and selected players
  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  // Select a player
  const handleSelectPlayer = (player) => {
    if (coinAdd < player.price) {
      toast.error("Not enough money to buy this player. Claim some Credit");
      return;
    }
    if (selectedPlayers.some((p) => p.id === player.id)) {
      toast.error("Player already selected!");
      return;
    }
    if (selectedPlayers.length >= 6) {
      toast.error("You can only select up to 6 players.");
      return;
    }

    // If all conditions are satisfied, select the player
    setSelectedPlayers([...selectedPlayers, player]);
    // Decrease available coins
    setCoinAdd((prevCoins) => prevCoins - player.price);
    toast.success(`Congrats!! ${player.Player_name} is now in your squad`);
  };

  // Remove a player from selected players
  const handleRemovePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
    // Increase available coins back when a player is removed
    setCoinAdd((prevCoins) => prevCoins + player.price);
    toast.success(`${player.Player_name} removed from selection.`);
  };

  // Add more players (return to available players view)
  const handleAddMorePlayers = () => {
    setSelectedButton("available");
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center backdrop-blur-md sticky top-20 z-0">
        <h1 className="font-bold text-2xl">Available Players</h1>
        <div className="flex gap-5 border-2 rounded-xl">
          <div
            className="font-bold cursor-pointer px-5 py-2 rounded-s-xl"
            style={{
              background:
                selectedButton === "available" ? "#E7FE29" : "transparent",
            }}
            onClick={() => handleButtonClick("available")}
          >
            Available
          </div>
          <div
            className="font-bold cursor-pointer px-5 py-2 rounded-e-xl"
            style={{
              background:
                selectedButton === "selected" ? "#E7FE29" : "transparent",
            }}
            onClick={() => handleButtonClick("selected")}
          >
            Selected ({selectedPlayers.length})
          </div>
        </div>
      </div>

      {/* Conditional rendering based on selected button */}
      <div className="mt-6">
        {selectedButton === "available" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availablePlayers.map((player) => (
              <div key={player.id} className="border p-4 rounded shadow-lg">
                <img
                  src={player.cover}
                  alt={player.Player_name}
                  className="mb-2 w-full rounded-xl object-cover"
                />
                <h2 className="font-bold">
                <FontAwesomeIcon icon={faUser} /> {player.Player_name}</h2>
                <div className="mb-5 flex justify-between items-center">
                  <p><FontAwesomeIcon icon={faFlag} /> {player.country}</p>
                  <p className="bg-gray-300 px-5 py-2 rounded-xl">
                    {player.playing_role}
                  </p>
                </div>
                <hr />
                <p className="mt-4 mb-3 font-bold">Rating</p>
                <div className="flex justify-between items-center opacity-70">
                  <p> {player.batting_style}</p>
                  <p>{player.bowling_style}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-bold">Price: $ {player.price}</p>
                  <button
                    onClick={() => handleSelectPlayer(player)}
                    className="border-2 hover:bg-[#E7FE29] text-black px-3 py-2 rounded-xl mt-2"
                  >
                    Choose Player
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedButton === "selected" && (
          <div>
            <h2 className="font-bold">
              Selected Players ({selectedPlayers.length}/6)
            </h2>
            {selectedPlayers.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {selectedPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="border p-4 rounded shadow-lg flex justify-between items-center"
                  >
                    <div className="flex gap-4">
                      <img
                        src={player.cover}
                        alt={player.Player_name}
                        className="mb-2 w-11 h-12 rounded-3xl"
                      />
                      <div>
                        <h3 className="font-bold">{player.Player_name}</h3>
                        <p>{player.playing_role}</p>
                        <p>$ {player.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemovePlayer(player)}
                      className=" text-red-500 px-2 py-1 rounded"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        {/* Add More Players button only rendered when viewing selected players */}
        {selectedButton === "selected" && (
          <button
            className="font-bold cursor-pointer px-5 py-2 bg-[#E7FE29] rounded-xl mt-4"
            onClick={handleAddMorePlayers}
          >
            Add More Players
          </button>
        )}
      </div>
    </div>
  );
};

// Define prop types for AvailablePlayers
AvailablePlayers.propTypes = {
  coinAdd: PropTypes.number.isRequired,
  setCoinAdd: PropTypes.func.isRequired,
};

export default AvailablePlayers;
