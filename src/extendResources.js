import { map, overlay } from '@laufire/utils/collection';

const extendResources = ({
	config: { resources, extensions: { schema, flow }},
}) => ({
	config: {
		resources: map(resources, (resource) => overlay(
			{}, { flow }, { schema: { properties: schema }}, resource,
		)),
	},
});

export default extendResources;
