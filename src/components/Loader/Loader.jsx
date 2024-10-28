import { GridLoader } from "react-spinners";
import css from "./Loader.module.css";

export const Loader = () => {
	return (
		<div className={css.loader}>
			<GridLoader color="red" margin={5} />
		</div>
	);
};
