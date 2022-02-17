class PapersController < ApplicationController
  def index
    @papers = Paper.all
    @paper = Paper.find_by(params[:id])
  end

  def new
    @paper = @papers.find(params[:id])
  end

  def create
  end

  def show
  end

  
end

  
