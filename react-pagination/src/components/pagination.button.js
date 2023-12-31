import styled from "styled-components";
import button from "./pair2-button";
import { flexCenter } from "../style/common";

const PaginationButton = ({
  buttonCount,
  currentPage,
  onMoveTargetPage,
  onMovePrePage,
  onMoveNextPage,
}) => {
  const buttonList = Array(buttonCount)
    .fill()
    .map((_, index) => {
      const currentGroup = Math.ceil(currentPage / buttonCount);
      const pageNumber = (currentGroup - 1) * buttonCount + index + 1;
      return pageNumber;
    });

  return (
    <PaginationBtn>
      <button onClick={onMovePrePage}>이전</button>
      {buttonList.map((el) => (
        <button onClick={onMoveTargetPage}>{el}</button>
      ))}
      <button onClick={onMoveNextPage}>다음</button>
    </PaginationBtn>
  );
};

export default PaginationButton;

const PaginationBtn = styled.div`
  ${flexCenter}
`;
