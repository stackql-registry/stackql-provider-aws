--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
  - devops_agent
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.recommendations" /></td></tr>
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
    <td><CopyableCode code="additional_context" /></td>
    <td><code>string</code></td>
    <td>Additional context for recommendation</td>
</tr>
<tr>
    <td><CopyableCode code="agent_space_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the agent space this recommendation belongs to</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Content of the recommendation</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this recommendation was created</td>
</tr>
<tr>
    <td><CopyableCode code="goal_id" /></td>
    <td><code>string</code></td>
    <td>ID of the goal this recommendation is associated with</td>
</tr>
<tr>
    <td><CopyableCode code="goal_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Version of the goal at the time this recommendation was generated</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>Priority level of the recommendation (HIGH, MEDIUM, LOW)</td>
</tr>
<tr>
    <td><CopyableCode code="rank_position" /></td>
    <td><code>integer</code></td>
    <td>Position in ranked list (1 = highest priority)</td>
</tr>
<tr>
    <td><CopyableCode code="ranked_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the recommendation was last ranked</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this recommendation</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the recommendation (PROPOSED, ACCEPTED, REJECTED, CLOSED, COMPLETED, UPDATE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>ID of the task that generated the recommendation</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the recommendation</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when this recommendation was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>Version number for optimistic locking</td>
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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Token for retrieving the next page of results, if more results are available</td>
</tr>
<tr>
    <td><CopyableCode code="recommendations" /></td>
    <td><code>array</code></td>
    <td>List of recommendations matching the request criteria</td>
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
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-recommendation_id"><code>recommendation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-recommendationVersion"><code>recommendationVersion</code></a></td>
    <td>Retrieves a specific recommendation by its ID</td>
</tr>
<tr>
    <td><a href="#list_recommendations"><CopyableCode code="list_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists recommendations for the specified agent space</td>
</tr>
<tr>
    <td><a href="#update_recommendation"><CopyableCode code="update_recommendation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-recommendation_id"><code>recommendation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing recommendation with new content, status, or metadata</td>
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
<tr id="parameter-agent_space_id">
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the agent space containing the recommendation</td>
</tr>
<tr id="parameter-recommendation_id">
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the recommendation to update</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-recommendationVersion">
    <td><CopyableCode code="recommendationVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specific version of the recommendation to retrieve. If not specified, returns the latest version.</td>
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

Retrieves a specific recommendation by its ID

```sql
SELECT
additional_context,
agent_space_arn,
content,
created_at,
goal_id,
goal_version,
priority,
rank_position,
ranked_at,
recommendation_id,
status,
task_id,
title_,
updated_at,
version
FROM aws.devops_agent.recommendations
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND recommendation_id = '{{ recommendation_id }}' -- required
AND region = '{{ region }}' -- required
AND recommendationVersion = '{{ recommendationVersion }}'
;
```
</TabItem>
<TabItem value="list_recommendations">

Lists recommendations for the specified agent space

```sql
SELECT
next_token,
recommendations
FROM aws.devops_agent.recommendations
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_recommendation"
    values={[
        { label: 'update_recommendation', value: 'update_recommendation' }
    ]}
>
<TabItem value="update_recommendation">

Updates an existing recommendation with new content, status, or metadata

```sql
UPDATE aws.devops_agent.recommendations
SET 
status = '{{ status }}',
additionalContext = '{{ additionalContext }}',
clientToken = '{{ clientToken }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND recommendation_id = '{{ recommendation_id }}' --required
AND region = '{{ region }}' --required
RETURNING
recommendation;
```
</TabItem>
</Tabs>
