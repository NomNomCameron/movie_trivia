class GamesController < ApplicationController
  respond_to :json

  def index
    @games = Game.all.active
  end

  def create
    @game = Game.create(games_params)

    respond_with @game
  end

  def show
    @game = Game.find(params[:id])

    repsond_with @game
  end

  private

  def games_params
    params.require(:game).permit(:description)
  end
end
