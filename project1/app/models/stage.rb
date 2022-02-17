class Stage < ApplicationRecord
  belongs_to :paper, foreign_key: 'paper_id'
  def index
    @stages = stage.all
  end

  def new
    @stage = @stages.find(params[:id])
  end

  def create
  end

  def edit
  end

end
