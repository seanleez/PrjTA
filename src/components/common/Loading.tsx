import LoadingIcon from "@assets/icons/loading-icon.svg";
import styles from "./Loading.module.scss";
import styled from "styled-components";

interface ILoading {
  loading?: boolean;
  size?: string;
}

const Spinner = styled.div`
  width: ${({ size }: any) => size ?? "90px"};
  height: ${({ size }: any) => size ?? "90px"};
` as any;

const Loading: React.FC<ILoading> = ({ loading, size }) => {
  return (
    <>
      {loading && (
        <Spinner size={size} className={`${styles["spinner"]}`}>
          <img src={LoadingIcon} alt={LoadingIcon} />
        </Spinner>
      )}
    </>
  );
};

export default Loading;
