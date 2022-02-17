module ApplicationHelper

  def checkbox_row(name, text, score)
    content_tag :p, :style => "text-align:start" do
      label_tag(name, text)+
      check_box_tag(name, "", score)
    end
  end
  def score_for_checked(score)
    content_tag :div do
    if score == nil
      checkbox_row("pass", "合格", nil)+
      checkbox_row("fail", "不合格", nil)
    elsif score == true
      checkbox_row("pass", "合格", true)+
      checkbox_row("fail", "不合格", false)
    else
      checkbox_row("pass", "合格", false)+
      checkbox_row("fail", "不合格", true)
    end
  end
  end
end
