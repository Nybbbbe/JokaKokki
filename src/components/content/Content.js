import React from 'react';
import PropTypes from 'prop-types';
import Server from "../../server";
import "./Content.css";
import { useHistory, useParams } from 'react-router-dom';
import ContentContainer from './ContentContainer';

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
        <>
            <div className="page-title">
                <div id="back" className="title-left-absolute-icon clickable" onClick={() => history.goBack()}>
                    <i className="material-icons">arrow_back</i>
                </div>
                <h1>{episode.title}</h1>
            </div>
            <div id="content" className="content-container">
                {episodeContent.map(content => {
                    return (
                        <TabPanel key={content.id} value={value} index={parseInt(content.pageNumber)}>
                            {content.content.map((cont, i) => {
                                return (
                                    <ContentContainer key={i}type={cont.type} src={cont.src}/>
                                )
                            })}
                        </TabPanel>
                    )
                })}
            </div>

            <div className="button-container">
                {value > 1?
                    <button id="previous" type="button" className="btn btn-secondary left-btn" onClick={() => handleChange(value - 1)}>Takaisin</button> : <div></div>
                }
                <span className="page-num-text">{"Sivu: " + value + " / " + episodeContent.length}</span>
                {value < episodeContent.length?
                    <button id="next" type="button" className="btn btn-primary right-btn" onClick={() => handleChange(value + 1)}>Seuraava</button> : <div></div>
                }
            </div>
        </>
    )
}

export default Content;