--- 
title: bot_analyzer_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_analyzer_recommendations
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>bot_analyzer_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_analyzer_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.bot_analyzer_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bot_analyzer_recommendation"
    values={[
        { label: 'describe_bot_analyzer_recommendation', value: 'describe_bot_analyzer_recommendation' }
    ]}
>
<TabItem value="describe_bot_analyzer_recommendation">

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
    <td><CopyableCode code="issue_description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the identified configuration issue.</td>
</tr>
<tr>
    <td><CopyableCode code="issue_location" /></td>
    <td><code>object</code></td>
    <td>The location information for the identified issue within the bot configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>string</code></td>
    <td>The priority level of the recommendation. Valid Values: High | Medium | Low (High, Medium, Low)</td>
</tr>
<tr>
    <td><CopyableCode code="proposed_fix" /></td>
    <td><code>string</code></td>
    <td>The recommended solution to address the identified issue.</td>
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
    <td><a href="#describe_bot_analyzer_recommendation"><CopyableCode code="describe_bot_analyzer_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_analyzer_request_id"><code>bot_analyzer_request_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available status before recommendations can be retrieved. Recommendations are returned with pagination support. Each recommendation includes the issue location, priority level, detailed description, and proposed fix.</td>
</tr>
<tr>
    <td><a href="#delete_bot_analyzer_recommendation"><CopyableCode code="delete_bot_analyzer_recommendation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_analyzer_request_id"><code>bot_analyzer_request_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes the recommendations and analysis results for a specific bot analysis request. This operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be retrieved. The analysis request ID will still appear in the history list, but attempting to describe the recommendations will return a ResourceNotFoundException.</td>
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
<tr id="parameter-bot_analyzer_request_id">
    <td><CopyableCode code="bot_analyzer_request_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the analysis request whose recommendations should be deleted.</td>
</tr>
<tr id="parameter-bot_id">
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_bot_analyzer_recommendation"
    values={[
        { label: 'describe_bot_analyzer_recommendation', value: 'describe_bot_analyzer_recommendation' }
    ]}
>
<TabItem value="describe_bot_analyzer_recommendation">

Retrieves the analysis results and recommendations for bot optimization. The analysis must be in Available status before recommendations can be retrieved. Recommendations are returned with pagination support. Each recommendation includes the issue location, priority level, detailed description, and proposed fix.

```sql
SELECT
issue_description,
issue_location,
priority,
proposed_fix
FROM aws.lexv2_models.bot_analyzer_recommendations
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_analyzer_request_id = '{{ bot_analyzer_request_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bot_analyzer_recommendation"
    values={[
        { label: 'delete_bot_analyzer_recommendation', value: 'delete_bot_analyzer_recommendation' }
    ]}
>
<TabItem value="delete_bot_analyzer_recommendation">

Permanently deletes the recommendations and analysis results for a specific bot analysis request. This operation is provided for GDPR compliance and cannot be undone. After deletion, the analysis results cannot be retrieved. The analysis request ID will still appear in the history list, but attempting to describe the recommendations will return a ResourceNotFoundException.

```sql
DELETE FROM aws.lexv2_models.bot_analyzer_recommendations
WHERE bot_id = '{{ bot_id }}' --required
AND bot_analyzer_request_id = '{{ bot_analyzer_request_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
