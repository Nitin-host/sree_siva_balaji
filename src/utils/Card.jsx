import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";

const Card = ({
  title = "Card Title",
  imageUrl,
  link = "#",
  showContent = false,
  content = null,
  separator = true,
  theme = "bt_bb_background_color_light",
  border = "bt_bb_border_show",
}) => {
  return (
    <div className="bt_bb_column_content">
      <div className="bt_bb_column_content_inner">
        <div className={`bt_bb_card_image ${theme} ${border}`}>
          <div className="bt_bb_card_image_background">
            <Link to={link} target="_self" title={title}>
              <div className="bt_bb_image">
                <img src={imageUrl} alt={title} title={title} loading="lazy" />
              </div>
            </Link>
          </div>
          <div className="bt_bb_card_image_text_box">
            <div className="bt_bb_card_image_title">
              <header className="bt_bb_headline bt_bb_dash_none bt_bb_size_medium">
                <h3 className="bt_bb_headline_tag">
                  <span className="bt_bb_headline_content">
                    <Link to={link} target="_self" title={title}>
                      {title}
                    </Link>
                    <span className="bt_bb_card_arrow">→</span>
                  </span>
                </h3>
              </header>
            </div>
            {showContent && (
              <div className="bt_bb_card_image_content_inner">{content}</div>
            )}
          </div>
        </div>
        {separator && (
          <div className="bt_bb_separator_v2 bt_bb_border_style_none bt_bb_icon_size_normal bt_bb_text_size_normal bt_bb_separator_v2_without_content bt_bb_top_spacing_ bt_bb_bottom_spacing_medium">
            <div className="bt_bb_separator_v2_inner">
              <span className="bt_bb_separator_v2_inner_before"></span>
              <span className="bt_bb_separator_v2_inner_content">
                <span data-ico-="" className="bt_bb_icon_holder"></span>
              </span>
              <span className="bt_bb_separator_v2_inner_after"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
