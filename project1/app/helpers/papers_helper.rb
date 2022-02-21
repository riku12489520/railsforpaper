module PapersHelper
  def checkbox_row(name, text, score, el= :q)
    content_tag el, :style => "text-align:start" do
      label_tag(name, text)+
      check_box_tag(name, "", score)
    end
  end

  def score_for_checked(score, name1="pass", name2="fail", test1="合格", test2="不合格", el= :p)
    content_tag :div do
      if score == nil
        checkbox_row(name1, test1, nil, el)+
        checkbox_row(name2, test2, nil, el)
      elsif score == true
        checkbox_row(name1, test1, true, el)+
        checkbox_row(name2, test2, false, el)
      else
        checkbox_row(name1, test1, false, el)+
        checkbox_row(name2, test2, true, el)
      end
    end
  end

  def date_format(date, type="date")
    # # if date = 2022-02-18
    # d = date.to_s.split("-")
    # render "#{d[0]}年 #{d[1]}月 #{d[2]}日"

    # if date = 2022-02-18 01:56:16 UTC

    
    d_to_s = date.to_s.split
    d = d_to_s[0].split("-")
    if type == "date"
    return "#{d[0]}年 #{d[1]}月 #{d[2]}日"
    elsif type == "time"
    return d_to_s[1]
    end
  end

end
