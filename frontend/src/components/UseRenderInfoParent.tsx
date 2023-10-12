import { useRenderInfo } from "@uidotdev/usehooks";
import { useState } from "react";
import UseRenderInfoChild from "./UseRenderInfoChild";

/**
 * useRenderInfo フックは、コンポーネント内のレンダリング情報を追跡し、ログに記録するのに役立ちます。
 * レンダリングの数、最後のレンダリングからの経過時間、現在のレンダリングのタイムスタンプを追跡します。
 * コンポーネントのレンダリングに関する情報を確認することで、パフォーマンス向上に役立てることができます。
 */
const UseRenderInfoParent = () => {
	/**
	 * info -> コンポーネントのレンダリングに関する情報を含むオブジェクト。
	 * info.name -> コンポーネントの名前。
	 * info.renders -> コンポーネントがレンダリングした回数。
	 * info.sinceLastRender -> 前回のレンダリングからの経過時間（ミリ秒）。
	 * info.timestamp -> 現在のレンダリングのタイムスタンプ。
	 */
	const info = useRenderInfo("UseRenderInfoParent");

	const [count, setCount] = useState<number>(0);

	return (
		<UseRenderInfoChild
			info={info}
			count={count}
			setCount={setCount}
		/>
	);
};

export default UseRenderInfoParent;
