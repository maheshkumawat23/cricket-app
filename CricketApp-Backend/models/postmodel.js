
var postmodel = {
    status: { type: String, required: true },
    teamAName: { type: String, required: true },
    teamBName: { type: String, required: true },
    teamARun: { type: String, required: true },
    teamAWicket: { type: String, required: true },
    teamBRun: { type: String, required: true },
    teamBWicket: { type: String, required: true },
    teamAOvers: { type: String, required: true },
    teamBOvers: { type: String, required: true },
    currentPlayer1Score: { type: String, required: true },
    currentPlayer2Score: { type: String, required: true },
    currentPlayer1Name: { type: String, required: true },
    currentPlayer2Name: { type: String, required: true }
}; 



exports.postobj = postmodel;