import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { rhythm, column, gutter, DarkGray, maxAppWidth } from './lib';
import { sofiLogo, reactLogo } from './images';
import { GiphyGifObject } from './types/giphyApi';
const mockResponse = require('./__tests__/mockGiphyApiResponse.json');

const AppPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: ${maxAppWidth}px;
  margin-right: auto;
  margin-left: auto;

  // non-prod CSS guardrails
  ${() => {
    if (process.env.NODE_ENV !== 'production') {
      /* Accessibility: All imgs must have an alt attribute,
       * see https://webaim.org/techniques/alttext/
       */
      return `
      img:not([alt]) {
        border: 5px dashed #c00 !important;
      }
    `;
    } else {
      return ``;
    }
  }};
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${DarkGray};
  max-height: ${rhythm(4)}px;

  .react-logo-animation {
    animation: App-logo-spin infinite 20s linear;
    height: ${rhythm(2)}px;
    pointer-events: none;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Page = styled.div`
  padding: ${rhythm(2)}px ${column + gutter}px ${rhythm(3)}px
    ${column - gutter}px;
  @media (max-width: 768px) {
    padding: ${rhythm(1)}px ${gutter}px;
  }
`;

const StyledDropzone = styled.section`
  border: 1px solid ${DarkGray};
  min-height: ${rhythm(10)}px;
`;

const DndTypes = {
  RESULT: 'result',
};

const Result = (
  props: GiphyGifObject & {
    connectDragSource: (compoent: React.ReactNode) => any;
    isDragging: boolean;
  },
) => props.connectDragSource(<div key={props.id}>{props.slug}</div>);

const DraggableResult = DragSource(
  DndTypes.RESULT,
  {
    beginDrag(props: any, _monitor, _component) {
      const item = { id: props.id };
      console.log('Dragging', item);
      return item;
    },
  },
  function registerWithDnD(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    };
  },
)(Result);

const Dropzone = (props: {
  connectDropTarget: (compoent: React.ReactNode) => any;
  isOver: boolean;
  canDrop: boolean;
}) =>
  props.connectDropTarget(
    <div>
      <StyledDropzone />
    </div>,
  );

const TargetDropzone = DropTarget(
  DndTypes.RESULT,
  {
    drop(_props, monitor, _component) {
      const item = monitor.getItem();
      console.log('Dropped', item);
    },
  },
  function registerWithDnD(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    };
  },
)(Dropzone);

class App extends React.Component {
  render() {
    return (
      <AppPageContainer>
        <AppHeader>
          <img src={sofiLogo} alt="SoFi logo" />
          <img
            src={reactLogo}
            className="react-logo-animation"
            alt="React logo"
          />
        </AppHeader>
        <Page>
          {_.map(mockResponse.data, (result: GiphyGifObject) => (
            <DraggableResult key={result.id} {...result} />
          ))}
          <TargetDropzone />
        </Page>
      </AppPageContainer>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
