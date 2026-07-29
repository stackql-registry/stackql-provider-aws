--- 
title: invocation_steps
hide_title: false
hide_table_of_contents: false
keywords:
  - invocation_steps
  - bedrock_agent_runtime
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

Creates, updates, deletes, gets or lists an <code>invocation_steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invocation_steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.invocation_steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_invocation_step"
    values={[
        { label: 'get_invocation_step', value: 'get_invocation_step' },
        { label: 'list_invocation_steps', value: 'list_invocation_steps' }
    ]}
>
<TabItem value="get_invocation_step">

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
    <td><CopyableCode code="invocation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (in UUID format) for the invocation that includes the invocation step. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invocation_step_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (in UUID format) for the invocation step. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invocation_step_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the invocation step was created.</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>Payload content, such as text and images, for the invocation step.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session containing the invocation step. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_invocation_steps">

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
    <td><CopyableCode code="invocation_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the invocation in UUID format. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invocation_step_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (in UUID format) for the invocation step. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invocation_step_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the invocation step was created.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the session associated with the invocation step. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_invocation_step"><CopyableCode code="get_invocation_step" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-invocation_step_id"><code>invocation_step_id</code></a>, <a href="#parameter-session_identifier"><code>session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a specific invocation step within an invocation in a session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.</td>
</tr>
<tr>
    <td><a href="#list_invocation_steps"><CopyableCode code="list_invocation_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-session_identifier"><code>session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all invocation steps associated with a session and optionally, an invocation within the session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.</td>
</tr>
<tr>
    <td><a href="#put_invocation_step"><CopyableCode code="put_invocation_step" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-session_identifier"><code>session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-invocationIdentifier"><code>invocationIdentifier</code></a>, <a href="#parameter-invocationStepTime"><code>invocationStepTime</code></a>, <a href="#parameter-payload"><code>payload</code></a></td>
    <td></td>
    <td>Add an invocation step to an invocation in a session. An invocation step stores fine-grained state checkpoints, including text and images, for each interaction. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions. Related APIs: GetInvocationStep ListInvocationSteps ListInvocations ListSessions</td>
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
<tr id="parameter-invocation_step_id">
    <td><CopyableCode code="invocation_step_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (in UUID format) for the specific invocation step to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_identifier">
    <td><CopyableCode code="session_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the session to add the invocation step to. You can specify either the session's sessionId or its Amazon Resource Name (ARN).</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_invocation_step"
    values={[
        { label: 'get_invocation_step', value: 'get_invocation_step' },
        { label: 'list_invocation_steps', value: 'list_invocation_steps' }
    ]}
>
<TabItem value="get_invocation_step">

Retrieves the details of a specific invocation step within an invocation in a session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.

```sql
SELECT
invocation_id,
invocation_step_id,
invocation_step_time,
payload,
session_id
FROM aws.bedrock_agent_runtime.invocation_steps
WHERE invocation_step_id = '{{ invocation_step_id }}' -- required
AND session_identifier = '{{ session_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_invocation_steps">

Lists all invocation steps associated with a session and optionally, an invocation within the session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.

```sql
SELECT
invocation_id,
invocation_step_id,
invocation_step_time,
session_id
FROM aws.bedrock_agent_runtime.invocation_steps
WHERE session_identifier = '{{ session_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_invocation_step"
    values={[
        { label: 'put_invocation_step', value: 'put_invocation_step' }
    ]}
>
<TabItem value="put_invocation_step">

Add an invocation step to an invocation in a session. An invocation step stores fine-grained state checkpoints, including text and images, for each interaction. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions. Related APIs: GetInvocationStep ListInvocationSteps ListInvocations ListSessions

```sql
REPLACE aws.bedrock_agent_runtime.invocation_steps
SET 
invocationIdentifier = '{{ invocationIdentifier }}',
invocationStepId = '{{ invocationStepId }}',
invocationStepTime = '{{ invocationStepTime }}',
payload = '{{ payload }}'
WHERE 
session_identifier = '{{ session_identifier }}' --required
AND region = '{{ region }}' --required
AND invocationIdentifier = '{{ invocationIdentifier }}' --required
AND invocationStepTime = '{{ invocationStepTime }}' --required
AND payload = '{{ payload }}' --required
RETURNING
invocation_step_id;
```
</TabItem>
</Tabs>
