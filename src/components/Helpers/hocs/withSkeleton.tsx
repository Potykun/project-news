import Skeleton from "../../Skeleton/Skeleton"

function withSkeleton(Component, type: "banner" | "list", count: number) {
	return function SkeletonComponent(props) {
		const { loading, ...restProps } = props

		return loading ? (
			<Skeleton
				type={type}
				count={count}
			/>
		) : (
			<Component {...restProps} />
		)
	}
}

export default withSkeleton
