--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
  - qconnect
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommendations"
    values={[
        { label: 'get_recommendations', value: 'get_recommendations' }
    ]}
>
<TabItem value="get_recommendations">

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
    <td><CopyableCode code="recommendations" /></td>
    <td><code>array</code></td>
    <td>The recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>The triggers corresponding to recommendations.</td>
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
    <td><a href="#get_recommendations"><CopyableCode code="get_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-waitTimeSeconds"><code>waitTimeSeconds</code></a>, <a href="#parameter-nextChunkToken"><code>nextChunkToken</code></a>, <a href="#parameter-recommendationType"><code>recommendationType</code></a></td>
    <td>This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications. Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use NotifyRecommendationsReceived. This API supports long-polling behavior with the waitTimeSeconds parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use QueryAssistant.</td>
</tr>
<tr>
    <td><a href="#notify_recommendations_received"><CopyableCode code="notify_recommendations_received" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recommendationIds"><code>recommendationIds</code></a></td>
    <td></td>
    <td>Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with GetRecommendations and a waitTimeSeconds input for long-polling behavior and avoiding duplicate recommendations.</td>
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
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextChunkToken">
    <td><CopyableCode code="nextChunkToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of chunks. Use the value returned in the previous response in the next request to retrieve the next set of chunks.</td>
</tr>
<tr id="parameter-recommendationType">
    <td><CopyableCode code="recommendationType" /></td>
    <td><code>string</code></td>
    <td>The type of recommendation being requested.</td>
</tr>
<tr id="parameter-waitTimeSeconds">
    <td><CopyableCode code="waitTimeSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration (in seconds) for which the call waits for a recommendation to be made available before returning. If a recommendation is available, the call returns sooner than WaitTimeSeconds. If no messages are available and the wait time expires, the call returns successfully with an empty list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recommendations"
    values={[
        { label: 'get_recommendations', value: 'get_recommendations' }
    ]}
>
<TabItem value="get_recommendations">

This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications. Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use NotifyRecommendationsReceived. This API supports long-polling behavior with the waitTimeSeconds parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use QueryAssistant.

```sql
SELECT
recommendations,
triggers
FROM aws.qconnect.recommendations
WHERE assistant_id = '{{ assistant_id }}' -- required
AND session_id = '{{ session_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND waitTimeSeconds = '{{ waitTimeSeconds }}'
AND nextChunkToken = '{{ nextChunkToken }}'
AND recommendationType = '{{ recommendationType }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="notify_recommendations_received"
    values={[
        { label: 'notify_recommendations_received', value: 'notify_recommendations_received' }
    ]}
>
<TabItem value="notify_recommendations_received">

Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with GetRecommendations and a waitTimeSeconds input for long-polling behavior and avoiding duplicate recommendations.

```sql
EXEC aws.qconnect.recommendations.notify_recommendations_received 
@assistant_id='{{ assistant_id }}' --required, 
@session_id='{{ session_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"recommendationIds": "{{ recommendationIds }}"
}'
;
```
</TabItem>
</Tabs>
