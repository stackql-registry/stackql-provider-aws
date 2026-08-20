--- 
title: agent_recommendation_generations
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_recommendation_generations
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

Creates, updates, deletes, gets or lists an <code>agent_recommendation_generations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_recommendation_generations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.agent_recommendation_generations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_recommendation_generation"
    values={[
        { label: 'get_agent_recommendation_generation', value: 'get_agent_recommendation_generation' },
        { label: 'list_agent_recommendation_generations', value: 'list_agent_recommendation_generations' }
    ]}
>
<TabItem value="get_agent_recommendation_generation">

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
    <td>The unique identifier of the recommendation generation. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommendation generation.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_context" /></td>
    <td><code>object</code></td>
    <td>Additional context information provided to guide the recommendation generation process.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the generation was started.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that started this generation.</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation generation process completed.</td>
</tr>
<tr>
    <td><CopyableCode code="error_details" /></td>
    <td><code>object</code></td>
    <td>Details about the error if the generation status is ERROR.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_completion_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The estimated time for the generation to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the generation was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this generation.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the profile used for this generation. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td>Current progress information including steps completed and completion percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>object</code></td>
    <td>The scope configuration that defines which pillars and goals to focus on during generation.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the recommendation generation process started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the recommendation generation. (QUEUED, IN_PROGRESS, COMPLETED, ERROR)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_recommendation_generations">

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
    <td>The unique identifier of the recommendation generation. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommendation generation.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the generation was started.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that started this generation.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_completion_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The estimated time for the generation to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the generation was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this generation.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the profile used for this generation. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the recommendation generation. (QUEUED, IN_PROGRESS, COMPLETED, ERROR)</td>
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
    <td><a href="#get_agent_recommendation_generation"><CopyableCode code="get_agent_recommendation_generation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-generation_id"><code>generation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a recommendation generation process, including its status, progress, and results. Recommendation generation is asynchronous: poll this operation until status reaches a terminal value of COMPLETED (results are ready) or ERROR (see errorDetails). Intermediate values are QUEUED and IN_PROGRESS.</td>
</tr>
<tr>
    <td><a href="#list_agent_recommendation_generations"><CopyableCode code="list_agent_recommendation_generations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RecommendationType"><code>RecommendationType</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists recommendation generation processes for a specified profile.</td>
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
<tr id="parameter-generation_id">
    <td><CopyableCode code="generation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the recommendation generation to retrieve.</td>
</tr>
<tr id="parameter-profile_arn">
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the optimization profile to list generation processes for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of generation processes to return in a single response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to continue retrieving results.</td>
</tr>
<tr id="parameter-RecommendationType">
    <td><CopyableCode code="RecommendationType" /></td>
    <td><code>string</code></td>
    <td>Optional filter by recommendation type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_recommendation_generation"
    values={[
        { label: 'get_agent_recommendation_generation', value: 'get_agent_recommendation_generation' },
        { label: 'list_agent_recommendation_generations', value: 'list_agent_recommendation_generations' }
    ]}
>
<TabItem value="get_agent_recommendation_generation">

Retrieves information about a recommendation generation process, including its status, progress, and results. Recommendation generation is asynchronous: poll this operation until status reaches a terminal value of COMPLETED (results are ready) or ERROR (see errorDetails). Intermediate values are QUEUED and IN_PROGRESS.

```sql
SELECT
id,
name,
additional_context,
created_at,
created_by,
ended_at,
error_details,
estimated_completion_time,
last_modified_at,
last_modified_by,
profile_arn,
progress,
scope,
started_at,
status
FROM aws.wellarchitected.agent_recommendation_generations
WHERE profile_arn = '{{ profile_arn }}' -- required
AND generation_id = '{{ generation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_recommendation_generations">

Lists recommendation generation processes for a specified profile.

```sql
SELECT
id,
name,
created_at,
created_by,
estimated_completion_time,
last_modified_at,
last_modified_by,
profile_arn,
status
FROM aws.wellarchitected.agent_recommendation_generations
WHERE profile_arn = '{{ profile_arn }}' -- required
AND region = '{{ region }}' -- required
AND RecommendationType = '{{ RecommendationType }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
