--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists a <code>recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommendation"
    values={[
        { label: 'get_recommendation', value: 'get_recommendation' },
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="get_recommendation">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommendation. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_-&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key used to encrypt recommendation data. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommendation. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:recommendation/&#91;0-9a-zA-Z_-&#93;&#123;1,48&#125;-&#91;0-9A-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the recommendation. (pattern: &lt;code&gt;&#91;0-9a-zA-Z_-&#93;&#123;1,48&#125;-&#91;0-9A-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_result" /></td>
    <td><code>object</code></td>
    <td>The result of the recommendation, containing the optimized system prompt or tool descriptions. Only present when the recommendation status is COMPLETED.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the recommendation. (PENDING, IN_PROGRESS, COMPLETED, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of recommendation. (SYSTEM_PROMPT_RECOMMENDATION, TOOL_DESCRIPTION_RECOMMENDATION)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recommendations">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommendation. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_-&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recommendation. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:recommendation/&#91;0-9a-zA-Z_-&#93;&#123;1,48&#125;-&#91;0-9A-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the recommendation. (pattern: &lt;code&gt;&#91;0-9a-zA-Z_-&#93;&#123;1,48&#125;-&#91;0-9A-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of a recommendation. (PENDING, IN_PROGRESS, COMPLETED, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of recommendation. (SYSTEM_PROMPT_RECOMMENDATION, TOOL_DESCRIPTION_RECOMMENDATION)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation was last updated.</td>
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
    <td><a href="#get_recommendation"><CopyableCode code="get_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-recommendation_id"><code>recommendation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a recommendation, including its configuration, status, and results.</td>
</tr>
<tr>
    <td><a href="#list_recommendations"><CopyableCode code="list_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists all recommendations in the account, with optional filtering by status.</td>
</tr>
<tr>
    <td><a href="#delete_recommendation"><CopyableCode code="delete_recommendation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-recommendation_id"><code>recommendation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a recommendation and its associated results.</td>
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
<tr id="parameter-recommendation_id">
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the recommendation to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Optional filter to return only recommendations with the specified status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recommendation"
    values={[
        { label: 'get_recommendation', value: 'get_recommendation' },
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="get_recommendation">

Retrieves detailed information about a recommendation, including its configuration, status, and results.

```sql
SELECT
name,
created_at,
description,
kms_key_arn,
recommendation_arn,
recommendation_config,
recommendation_id,
recommendation_result,
status,
type_,
updated_at
FROM aws.bedrock_agentcore.recommendations
WHERE recommendation_id = '{{ recommendation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recommendations">

Lists all recommendations in the account, with optional filtering by status.

```sql
SELECT
name,
created_at,
description,
recommendation_arn,
recommendation_id,
status,
type_,
updated_at
FROM aws.bedrock_agentcore.recommendations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recommendation"
    values={[
        { label: 'delete_recommendation', value: 'delete_recommendation' }
    ]}
>
<TabItem value="delete_recommendation">

Deletes a recommendation and its associated results.

```sql
DELETE FROM aws.bedrock_agentcore.recommendations
WHERE recommendation_id = '{{ recommendation_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
