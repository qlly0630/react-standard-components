import type { CSSProperties, FC } from 'react';
import getClassName from '@/utils/get-class-name';

const className = getClassName('image');
export interface ImageProps {
	/** 图片链接 */
	url: string;
	/** 图片裁切方式 */
	objectFit: 'fill' | 'contain' | 'cover';
}
/** Image图片组件 */
export const Image: FC<ImageProps> = (props) => {
	const { url, objectFit } = props;
	const style: CSSProperties = {
		objectFit,
	};
	return (
		<>
			<div className={className('container')}>
				<img
					className={className('content')}
					src={url}
					style={style}
					loading="lazy"
				/>
			</div>
		</>
	);
};

Image.defaultProps = {
	url: '',
	objectFit: 'contain',
};

export default Image;
