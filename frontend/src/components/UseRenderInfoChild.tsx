import { useRenderInfo } from "@uidotdev/usehooks";

type Props = {
	info: any;
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * UseRenderInfoコンポーネントの子コンポーネント
 */
const UseRenderInfoChild: React.FC<Props> = ({
	info,
	count,
	setCount,
}) => {
	useRenderInfo("UseRenderInfoChild");

	return (
		<section style={{ padding: "30px" }}>
			<button className="primary" onClick={() => setCount(count + 1)}>
				Re-Render
			</button>
			<table style={{ margin: "30px auto" }}>
				<thead>
					<tr>
						<th colSpan={2}>Render Info</th>
					</tr>
				</thead>
				<tbody>
					{info &&
						Object.keys(info).map((key) => {
							return (
								<tr key={key}>
									<th>{key}</th>
									<td>{(info as any)[key]}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</section>
	);
};

export default UseRenderInfoChild;
