class PapersController < ApplicationController
  def index
    @papers = Paper.all
    @paper = Paper.find_by(id: 2)
    @stages = Stage.all
  end

  def new
    @paper = @papers.find(params[:id])
  end

  def create
  end

  def show
  end

  
end

  
