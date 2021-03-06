import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Server from "../../server";
import "./Content.css";
import { useHistory, useParams } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {children}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const Content = () => {
    const params = useParams();
    const episode = Server.getEpisode(params.id.substring(1));
    const episodeContent = Server.getEpisodeContent(params.id.substring(1));
    const history = useHistory();

    const [value, setValue] = React.useState(1);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        [
            <div key="title" className="page-title" onClick={() => handleChange(value + 1)}>
                <div className="title-left-absolute-icon clickable" onClick={() => history.push('/course:' + episode.parentId)}>
                    <i className="material-icons">arrow_back</i>
                </div>
                <h1>{episode.title}</h1>
            </div>,
            <div key="content" className="content-container">
                {episodeContent.map(content => {
                    console.log(content)
                    return (
                        <TabPanel key={content.id} value={value} index={parseInt(content.pageNumber)}>
                            {content.content[0].src}
                        </TabPanel>
                    )
                })}
            </div>
        ]
    )
}

export default Content;