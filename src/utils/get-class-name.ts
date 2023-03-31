import { CLASS_NAME_PREFIX } from '@/constants';
export default (componentName: string) => (className?: string) => {
	const componentPrefix = `${CLASS_NAME_PREFIX}-${componentName}`;
	if (!className) {
		return componentPrefix;
	}
	return `${componentPrefix}__${className}`;
};
