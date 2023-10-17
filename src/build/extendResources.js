import { map, overlay } from '@laufire/utils/collection';

const extendResources = ({
	config: { resources, extensions: { schema, ...props }},
}) => ({
	config: {
		resources: map(resources, (resource) => overlay(
			{}, props, { schema: { properties: schema }}, resource,
		)),
	},
});

export default extendResources;
