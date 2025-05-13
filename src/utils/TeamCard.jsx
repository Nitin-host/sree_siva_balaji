import React, { useState } from "react";
import { Card, CardBody, Tooltip } from "reactstrap";
import "../styles/TeamCard.scss";

const TeamCard = ({ member }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const tooltipId = `tooltip-${member.id}`; // Ensure unique ID

  return (
    <Card className="unique-card">
      <div className="unique-card__banner" />
      <div className="unique-card__avatar">
        <img src={member.image} alt={member.name} />
      </div>
      <CardBody>
        <h5>{member.name}</h5>
        <p className="text-info">{member.role}</p>
        <p className="card-text">
          {member.bio}
        </p>
        {/* <Tooltip
          // placement="right"
          isOpen={tooltipOpen}
          target={tooltipId}
          toggle={toggle}
          className="custom-tooltip"
        >
          {member.bio}
        </Tooltip> */}
      </CardBody>
    </Card>
  );
};

export default TeamCard;
