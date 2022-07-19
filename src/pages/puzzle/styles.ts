import styled from 'styled-components';

export const StylesContainer = styled.div`
  width: 100%;
  height: 100vh;

  .base {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .btnWatch {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 20px;
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .wrapperItem {
    position: relative;
    padding: 0;
    margin: 0;
  }

  .rotateImage {
    width: 20px;
    height: 20px;
  }

  .buttonRotateImage {
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    background-color: white;
    border-radius: 10px;
    border: 2px solid white;
    padding: 2px 1px 0px 1px;
    z-index: 10;
  }

  .buttonRotateImage:hover {
    box-shadow: 1px 1px 10px grey;
    z-index: 10;
  }

  .label {
    position: absolute;
    left: 10%;
    top: 10%;
    padding: 4px 6px;
    margin: 0;
    border-radius: 25px;
    border: 2px solid rgba(58, 63, 147, 1);
    font-weight: bold;
    background-color: rgba(216, 216, 216, 1);
    color: rgba(58, 63, 147, 1);
    font-size: 11px;
  }
`;
