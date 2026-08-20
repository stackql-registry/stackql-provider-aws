--- 
title: agent_recommendation_items
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_recommendation_items
  - wellarchitected
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

Creates, updates, deletes, gets or lists an <code>agent_recommendation_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_recommendation_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.agent_recommendation_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_agent_recommendation_items"
    values={[
        { label: 'list_agent_recommendation_items', value: 'list_agent_recommendation_items' }
    ]}
>
<TabItem value="list_agent_recommendation_items">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the recommendation item.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation item was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created this recommendation item.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation item was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this recommendation item.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata containing a snapshot of the resource or recommendation at the time of generation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the associated recommendation. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-recommendation/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the recommendation item. (AWS_RESOURCE, RECOMMENDATION)</td>
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
    <td><a href="#list_agent_recommendation_items"><CopyableCode code="list_agent_recommendation_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-recommendation_arn"><code>recommendation_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists recommendation items for a specific recommendation. Recommendation items provide detailed information about individual optimization opportunities.</td>
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
<tr id="parameter-recommendation_arn">
    <td><CopyableCode code="recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommendation to list items for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of recommendation items to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to continue retrieving results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Optional filter to return only recommendation items of the specified type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_agent_recommendation_items"
    values={[
        { label: 'list_agent_recommendation_items', value: 'list_agent_recommendation_items' }
    ]}
>
<TabItem value="list_agent_recommendation_items">

Lists recommendation items for a specific recommendation. Recommendation items provide detailed information about individual optimization opportunities.

```sql
SELECT
id,
created_at,
created_by,
last_modified_at,
last_modified_by,
metadata,
recommendation_arn,
type_
FROM aws.wellarchitected.agent_recommendation_items
WHERE recommendation_arn = '{{ recommendation_arn }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
