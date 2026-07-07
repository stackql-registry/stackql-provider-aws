--- 
title: components
hide_title: false
hide_table_of_contents: false
keywords:
  - components
  - greengrassv2
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

Creates, updates, deletes, gets or lists a <code>components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

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
    <td><CopyableCode code="recipe" /></td>
    <td><code>string (byte)</code></td>
    <td>The recipe of the component version.</td>
</tr>
<tr>
    <td><CopyableCode code="recipeOutputFormat" /></td>
    <td><code>string</code></td>
    <td>The format of the recipe. (JSON, YAML)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of key-value pairs that contain metadata for the resource. For more information, see Tag your resources in the IoT Greengrass V2 Developer Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_components">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the component version. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:greengrass:&#91;^:&#93;*:(aws|&#91;0-9&#93;+):components:&#91;^:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="componentName" /></td>
    <td><code>string</code></td>
    <td>The name of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="latestVersion" /></td>
    <td><code>object</code></td>
    <td>The latest version of the component and its details.</td>
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
    <td><a href="#get_component"><CopyableCode code="get_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-recipeOutputFormat"><code>recipeOutputFormat</code></a></td>
    <td>Gets the recipe for a version of a component.</td>
</tr>
<tr>
    <td><a href="#list_components"><CopyableCode code="list_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of component summaries. This list includes components that you have permission to view.</td>
</tr>
<tr>
    <td><a href="#delete_component"><CopyableCode code="delete_component" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a version of a component from IoT Greengrass. This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</td>
</tr>
<tr>
    <td><a href="#describe_component"><CopyableCode code="describe_component" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata for a version of a component.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the component version.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-recipeOutputFormat">
    <td><CopyableCode code="recipeOutputFormat" /></td>
    <td><code>string</code></td>
    <td>The format of the recipe.</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the components to list. Default: PRIVATE</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

Gets the recipe for a version of a component.

```sql
SELECT
recipe,
recipeOutputFormat,
tags
FROM aws.greengrassv2.components
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
AND recipeOutputFormat = '{{ recipeOutputFormat }}'
;
```
</TabItem>
<TabItem value="list_components">

Retrieves a paginated list of component summaries. This list includes components that you have permission to view.

```sql
SELECT
arn,
componentName,
latestVersion
FROM aws.greengrassv2.components
WHERE region = '{{ region }}' -- required
AND scope = '{{ scope }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_component"
    values={[
        { label: 'delete_component', value: 'delete_component' }
    ]}
>
<TabItem value="delete_component">

Deletes a version of a component from IoT Greengrass. This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.

```sql
DELETE FROM aws.greengrassv2.components
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="describe_component"
    values={[
        { label: 'describe_component', value: 'describe_component' }
    ]}
>
<TabItem value="describe_component">

Retrieves metadata for a version of a component.

```sql
EXEC aws.greengrassv2.components.describe_component 
@arn='{{ arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
