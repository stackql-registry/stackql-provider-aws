--- 
title: layers
hide_title: false
hide_table_of_contents: false
keywords:
  - layers
  - lambda
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

Creates, updates, deletes, gets or lists a <code>layers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="layers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.layers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_layers"
    values={[
        { label: 'list_layers', value: 'list_layers' }
    ]}
>
<TabItem value="list_layers">

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
    <td><CopyableCode code="latest_matching_version" /></td>
    <td><code>object</code></td>
    <td>Details about a version of an Lambda layer.</td>
</tr>
<tr>
    <td><CopyableCode code="layer_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the function layer. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:layer:&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="layer_name" /></td>
    <td><code>string</code></td>
    <td>The name of the layer. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:layer:&#91;a-zA-Z0-9-_&#93;+)|&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_layers"><CopyableCode code="list_layers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CompatibleArchitecture"><code>CompatibleArchitecture</code></a>, <a href="#parameter-CompatibleRuntime"><code>CompatibleRuntime</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists Lambda layers and shows information about the latest version of each. Specify a runtime identifier to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that instruction set architecture.</td>
</tr>
<tr>
    <td><a href="#publish_layer_version"><CopyableCode code="publish_layer_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-layer_name"><code>layer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an Lambda layer from a ZIP archive. Each time you call PublishLayerVersion with the same layer name, a new version is created. Add layers to your function with CreateFunction or UpdateFunctionConfiguration.</td>
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
<tr id="parameter-layer_name">
    <td><CopyableCode code="layer_name" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the layer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CompatibleArchitecture">
    <td><CopyableCode code="CompatibleArchitecture" /></td>
    <td><code>string</code></td>
    <td>The compatible instruction set architecture.</td>
</tr>
<tr id="parameter-CompatibleRuntime">
    <td><CopyableCode code="CompatibleRuntime" /></td>
    <td><code>string</code></td>
    <td>A runtime identifier. The following list includes deprecated runtimes. For more information, see Runtime use after deprecation. For a list of all currently supported runtimes, see Supported runtimes.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned by a previous call.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of layers to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_layers"
    values={[
        { label: 'list_layers', value: 'list_layers' }
    ]}
>
<TabItem value="list_layers">

Lists Lambda layers and shows information about the latest version of each. Specify a runtime identifier to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that instruction set architecture.

```sql
SELECT
latest_matching_version,
layer_arn,
layer_name
FROM aws.lambda.layers
WHERE region = '{{ region }}' -- required
AND CompatibleArchitecture = '{{ CompatibleArchitecture }}'
AND CompatibleRuntime = '{{ CompatibleRuntime }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="publish_layer_version"
    values={[
        { label: 'publish_layer_version', value: 'publish_layer_version' }
    ]}
>
<TabItem value="publish_layer_version">

Creates an Lambda layer from a ZIP archive. Each time you call PublishLayerVersion with the same layer name, a new version is created. Add layers to your function with CreateFunction or UpdateFunctionConfiguration.

```sql
EXEC aws.lambda.layers.publish_layer_version 
@layer_name='{{ layer_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Description": "{{ Description }}", 
"Content": "{{ Content }}", 
"CompatibleArchitectures": "{{ CompatibleArchitectures }}", 
"CompatibleRuntimes": "{{ CompatibleRuntimes }}", 
"LicenseInfo": "{{ LicenseInfo }}"
}'
;
```
</TabItem>
</Tabs>
