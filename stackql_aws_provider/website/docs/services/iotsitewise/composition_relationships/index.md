--- 
title: composition_relationships
hide_title: false
hide_table_of_contents: false
keywords:
  - composition_relationships
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>composition_relationships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="composition_relationships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.composition_relationships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_composition_relationships"
    values={[
        { label: 'list_composition_relationships', value: 'list_composition_relationships' }
    ]}
>
<TabItem value="list_composition_relationships">

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
    <td><CopyableCode code="assetModelCompositeModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of a composite model on this asset model. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelCompositeModelType" /></td>
    <td><code>string</code></td>
    <td>The composite model type. Valid values are AWS/ALARM, CUSTOM, or AWS/L4E_ANOMALY. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assetModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model, in UUID format. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_composition_relationships"><CopyableCode code="list_composition_relationships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-asset_model_id"><code>asset_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of composition relationships for an asset model of type COMPONENT_MODEL.</td>
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
<tr id="parameter-asset_model_id">
    <td><CopyableCode code="asset_model_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID, if it has one. For more information, see Referencing objects with external IDs in the IoT SiteWise User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_composition_relationships"
    values={[
        { label: 'list_composition_relationships', value: 'list_composition_relationships' }
    ]}
>
<TabItem value="list_composition_relationships">

Retrieves a paginated list of composition relationships for an asset model of type COMPONENT_MODEL.

```sql
SELECT
assetModelCompositeModelId,
assetModelCompositeModelType,
assetModelId
FROM aws.iotsitewise.composition_relationships
WHERE asset_model_id = '{{ asset_model_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
