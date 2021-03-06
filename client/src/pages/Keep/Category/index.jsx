import React from 'react';
import { Card, Row, Col, Empty } from 'antd';
import { Link } from 'react-router-dom';
import CoverImage from '../../../components/CoverImage';
import axios from '../../../axios';
import './index.scss';

const { Meta } = Card;

export default class Category extends React.Component {
  state = {
    data: [],
  }

  render() {
    return (
      <div className="category-container main-container">
        {
          this.state.data.length > 0 ? (
            <Row type="flex" justify="space-between">
              {
                this.state.data.map((item, index) => {
                  return (
                    <Link to={`search/category/${item.id}`} key={index}>
                      <Card key={index}
                        className="category-card"
                        cover={<CoverImage src={item.cover} />}
                        hoverable
                      >
                        <Meta
                          title={item.name}
                          description={item.des}
                        />
                      </Card>
                    </Link>
                  );
                })
              }
            </Row>
          ) : (
              <Empty />
            )
        }
      </div>
    );
  }

  componentDidMount() {
    axios.get('category').then((res) => {
      const { data } = res;
      this.setState({ data });
    });
  }
}
