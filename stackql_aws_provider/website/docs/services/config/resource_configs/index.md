--- 
title: resource_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_configs
  - config
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>resource_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.resource_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_resource_config"
    values={[
        { label: 'batch_get_resource_config', value: 'batch_get_resource_config' }
    ]}
>
<TabItem value="batch_get_resource_config">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="base_configuration_items" /></td>
    <td><code>array</code></td>
    <td>A list that contains the current configuration of one or more resources.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_resource_keys" /></td>
    <td><code>array</code></td>
    <td>A list of resource keys that were not processed with the current response. The unprocessesResourceKeys value is in the same form as ResourceKeys, so the value can be directly provided to a subsequent BatchGetResourceConfig operation. If there are no unprocessed resource keys, the response contains an empty unprocessedResourceKeys list.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#batch_get_resource_config"><CopyableCode code="batch_get_resource_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the BaseConfigurationItem for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. The API does not return results for deleted resources. The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</td>
</tr>
<tr>
    <td><a href="#put_resource_config"><CopyableCode code="put_resource_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-SchemaVersionId"><code>SchemaVersionId</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-Configuration"><code>Configuration</code></a></td>
    <td></td>
    <td>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation. When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. Write-only schema properites are not recorded as part of the published configuration item.</td>
</tr>
<tr>
    <td><a href="#delete_resource_config"><CopyableCode code="delete_resource_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_resource_config"
    values={[
        { label: 'batch_get_resource_config', value: 'batch_get_resource_config' }
    ]}
>
<TabItem value="batch_get_resource_config">

Returns the BaseConfigurationItem for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. The API does not return results for deleted resources. The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.

```sql
SELECT
base_configuration_items,
unprocessed_resource_keys
FROM aws.config.resource_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_config"
    values={[
        { label: 'put_resource_config', value: 'put_resource_config' }
    ]}
>
<TabItem value="put_resource_config">

Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation. When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. Write-only schema properites are not recorded as part of the published configuration item.

```sql
REPLACE aws.config.resource_configs
SET 
ResourceType = '{{ ResourceType }}',
SchemaVersionId = '{{ SchemaVersionId }}',
ResourceId = '{{ ResourceId }}',
ResourceName = '{{ ResourceName }}',
Configuration = '{{ Configuration }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ResourceType = '{{ ResourceType }}' --required
AND SchemaVersionId = '{{ SchemaVersionId }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND Configuration = '{{ Configuration }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_config"
    values={[
        { label: 'delete_resource_config', value: 'delete_resource_config' }
    ]}
>
<TabItem value="delete_resource_config">

Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History.

```sql
DELETE FROM aws.config.resource_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
