/* eslint-disable no-plusplus */
import React from 'react';
import { Icon, List, Spin } from 'antd';
import { Link } from 'react-router-dom';
import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import VList from 'react-virtualized/dist/commonjs/List';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import axios from '../../../axios';
import './index.scss';

const STATUS_LOADING = 1;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class Keep extends React.Component {
  state = {
    data: [],
    loading: false,
    pagination: {
      total: 0,
      pageSize: 10,
      current: 1,
    },
    loadedRowsMap: {},
    search: {},
  }

  isRowLoaded = ({ index }) => {
    const { loadedRowsMap } = this.state;
    return !!loadedRowsMap[index];
  }

  renderItem = ({ index, key, style }) => {
    const { data } = this.state;
    const item = data[index];
    return (
      <Link to={`/post/${item.id}`} key={key}>
        <List.Item
          className="vlist-item"
          style={style}
          key={item.id}
          actions={[<IconText type="heart-o" text="0" />]}
          extra={<div className="item-cover" style={{ backgroundImage: `url(${item.cover})` }} />}
        >
          <List.Item.Meta
            title={item.title}
            description={
              (
                <div>
                  <span className="item-category">to do</span>
                  <span>·</span>
                  <span className="item-time">to do</span>
                </div>
              )
            }
          />
        </List.Item>
      </Link>
    );
  }

  loadMoreRows = ({ startIndex, stopIndex }) => {
    console.log(startIndex, stopIndex);
    const { loadedRowsMap, pagination } = this.state;
    pagination.current += pagination.current;
    for (let i = startIndex; i <= stopIndex; i++) {
      loadedRowsMap[i] = STATUS_LOADING;
    }
    this.setState({ pagination });
    this.handleFecthData();
  }


  handleFecthData() {
    const { pagination, search } = this.state;
    let { data } = this.state;
    const { type, query } = search;
    this.setState({ loading: true });
    axios.get('post/search', {
      params: {
        pageSize: pagination.pageSize,
        pageNumber: pagination.current,
        type,
        query,
      },
    }).then((res) => {
      data = data.concat(res.data.map((item) => {
        return item;
      }));
      this.setState({
        data,
        loading: false,
      });
    });
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: [],
      pagination: {
        total: 0,
        pageSize: 10,
        current: 1,
      },
      search: props.match.params,
    }, this.handleFecthData);
  }

  componentDidMount() {
    this.setState({
      search: this.props.match.params,
    }, this.handleFecthData);
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div className="list-container">
        <Spin spinning={loading}>
          <List itemLayout="vertical">
            {
              data.length > 0 && (
                <WindowScroller>
                  {({ height, isScrolling, onChildScroll, scrollTop }) => (
                    <InfiniteLoader
                      isRowLoaded={this.isRowLoaded}
                      loadMoreRows={this.loadMoreRows}
                      rowCount={data.length}
                    >
                      {({ onRowsRendered }) => (
                        <AutoSizer disableHeight>
                          {({ width }) => (
                            <VList
                              autoHeight
                              height={height}
                              isScrolling={isScrolling}
                              onScroll={onChildScroll}
                              overscanRowCount={2}
                              rowCount={data.length}
                              rowHeight={120}
                              rowRenderer={this.renderItem}
                              scrollTop={scrollTop}
                              width={width}
                              onRowsRendered={onRowsRendered}
                            />
                          )}
                        </AutoSizer>
                      )}
                    </InfiniteLoader>
                  )}
                </WindowScroller>
              )
            }
          </List>
        </Spin>
      </div>
    );
  }
}
