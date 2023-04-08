import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: #333333;
  }

  div {
    display: flex;
    gap: 0.5rem;

    button {
      border: none;
      background-color: #28a745;
      color: #f1f1f1;
      padding: 0.3rem 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    button:hover {
      background-color: #218838;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;
