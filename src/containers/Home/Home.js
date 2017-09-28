import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Masonry from 'react-masonry-component';
import { Card, CardTitle } from 'material-ui/Card';
import TabView from '../../components/TabView';
import './styles.css';

const style = {
  margin: 15,
  height: 100,
  width: '25%',
};

const Home = ({ repoData }) => (
  <div className="home-wrapper">
    <div className="home-header">
      <Card className="home-header-card">
        <div className="home-header-card-title">
          <Avatar src={repoData[0].owner.avatar_url} size={100} />
          <CardTitle
            title="Trevor McLean"
            subtitle="Developer of things web and native"
          />
        </div>
      </Card>
    </div>
    <div className="tab-wrapper">
      <Paper zDepth={2}>
        <TabView />
      </Paper>
    </div>
{/* <Masonry>
      {
        repoData.map((data, idx) => (
          <Paper key={idx} style={style} zDepth={3}><p>{data.name}</p></Paper>
        ))
      }
    </Masonry> */}

  </div>
);

export default Home;
