--- 
title: invocations
hide_title: false
hide_table_of_contents: false
keywords:
  - invocations
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

Creates, updates, deletes, gets or lists an <code>invocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.invocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_invocations"
    values={[
        { label: 'list_invocations', value: 'list_invocations' }
    ]}
>
<TabItem value="list_invocations">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the invocation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="invocationId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the invocation in UUID format. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the session associated with the invocation. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_invocations"><CopyableCode code="list_invocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-session_identifier"><code>session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all invocations associated with a specific session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.</td>
</tr>
<tr>
    <td><a href="#create_invocation"><CopyableCode code="create_invocation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-session_identifier"><code>session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new invocation within a session. An invocation groups the related invocation steps that store the content from a conversation. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions. Related APIs ListInvocations ListSessions GetSession</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_identifier">
    <td><CopyableCode code="session_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the associated session for the invocation. You can specify either the session's sessionId or its Amazon Resource Name (ARN).</td>
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
    defaultValue="list_invocations"
    values={[
        { label: 'list_invocations', value: 'list_invocations' }
    ]}
>
<TabItem value="list_invocations">

Lists all invocations associated with a specific session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.

```sql
SELECT
createdAt,
invocationId,
sessionId
FROM aws.bedrock_agent_runtime.invocations
WHERE session_identifier = '{{ session_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_invocation"
    values={[
        { label: 'create_invocation', value: 'create_invocation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_invocation">

Creates a new invocation within a session. An invocation groups the related invocation steps that store the content from a conversation. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions. Related APIs ListInvocations ListSessions GetSession

```sql
INSERT INTO aws.bedrock_agent_runtime.invocations (
description,
invocationId,
session_identifier,
region
)
SELECT 
'{{ description }}',
'{{ invocationId }}',
'{{ session_identifier }}',
'{{ region }}'
RETURNING
createdAt,
invocationId,
sessionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: invocations
  props:
    - name: session_identifier
      value: "{{ session_identifier }}"
      description: Required parameter for the invocations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the invocations resource.
    - name: description
      value: "{{ description }}"
    - name: invocationId
      value: "{{ invocationId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
