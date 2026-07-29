--- 
title: code_interpreter_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - code_interpreter_sessions
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

Creates, updates, deletes, gets or lists a <code>code_interpreter_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_interpreter_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.code_interpreter_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_code_interpreter_session"
    values={[
        { label: 'get_code_interpreter_session', value: 'get_code_interpreter_session' },
        { label: 'list_code_interpreter_sessions', value: 'list_code_interpreter_sessions' }
    ]}
>
<TabItem value="get_code_interpreter_session">

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
    <td>The name of the code interpreter session.</td>
</tr>
<tr>
    <td><CopyableCode code="certificates" /></td>
    <td><code>array</code></td>
    <td>The list of certificates installed in the code interpreter session.</td>
</tr>
<tr>
    <td><CopyableCode code="code_interpreter_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the code interpreter.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the code interpreter session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the code interpreter session. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;1,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>The timeout period for the code interpreter session in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the code interpreter session. Possible values include ACTIVE, STOPPING, and STOPPED. (READY, TERMINATED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_code_interpreter_sessions">

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
    <td><CopyableCode code="items_" /></td>
    <td><code>array</code></td>
    <td>The list of code interpreter sessions that match the specified criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use in a subsequent ListCodeInterpreterSessions request to get the next set of results. (pattern: &lt;code&gt;\S*&lt;/code&gt;)</td>
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
    <td><a href="#get_code_interpreter_session"><CopyableCode code="get_code_interpreter_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-code_interpreter_identifier"><code>code_interpreter_identifier</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific code interpreter session in Amazon Bedrock AgentCore. This operation returns the session's configuration, current status, and metadata. To get a code interpreter session, you must specify both the code interpreter identifier and the session ID. The response includes information about the session's timeout settings and current status. The following operations are related to GetCodeInterpreterSession: StartCodeInterpreterSession ListCodeInterpreterSessions StopCodeInterpreterSession</td>
</tr>
<tr>
    <td><a href="#list_code_interpreter_sessions"><CopyableCode code="list_code_interpreter_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-code_interpreter_identifier"><code>code_interpreter_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of code interpreter sessions in Amazon Bedrock AgentCore that match the specified criteria. This operation returns summary information about each session, including identifiers, status, and timestamps. You can filter the results by code interpreter identifier and session status. The operation supports pagination to handle large result sets efficiently. We recommend using pagination to ensure that the operation returns quickly and successfully when retrieving large numbers of sessions. The following operations are related to ListCodeInterpreterSessions: StartCodeInterpreterSession GetCodeInterpreterSession</td>
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
<tr id="parameter-code_interpreter_identifier">
    <td><CopyableCode code="code_interpreter_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code interpreter to list sessions for. If specified, only sessions for this code interpreter are returned. If not specified, sessions for all code interpreters are returned.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the code interpreter session to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_code_interpreter_session"
    values={[
        { label: 'get_code_interpreter_session', value: 'get_code_interpreter_session' },
        { label: 'list_code_interpreter_sessions', value: 'list_code_interpreter_sessions' }
    ]}
>
<TabItem value="get_code_interpreter_session">

Retrieves detailed information about a specific code interpreter session in Amazon Bedrock AgentCore. This operation returns the session's configuration, current status, and metadata. To get a code interpreter session, you must specify both the code interpreter identifier and the session ID. The response includes information about the session's timeout settings and current status. The following operations are related to GetCodeInterpreterSession: StartCodeInterpreterSession ListCodeInterpreterSessions StopCodeInterpreterSession

```sql
SELECT
name,
certificates,
code_interpreter_identifier,
created_at,
session_id,
session_timeout_seconds,
status
FROM aws.bedrock_agentcore.code_interpreter_sessions
WHERE code_interpreter_identifier = '{{ code_interpreter_identifier }}' -- required
AND sessionId = '{{ sessionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_code_interpreter_sessions">

Retrieves a list of code interpreter sessions in Amazon Bedrock AgentCore that match the specified criteria. This operation returns summary information about each session, including identifiers, status, and timestamps. You can filter the results by code interpreter identifier and session status. The operation supports pagination to handle large result sets efficiently. We recommend using pagination to ensure that the operation returns quickly and successfully when retrieving large numbers of sessions. The following operations are related to ListCodeInterpreterSessions: StartCodeInterpreterSession GetCodeInterpreterSession

```sql
SELECT
items_,
next_token
FROM aws.bedrock_agentcore.code_interpreter_sessions
WHERE code_interpreter_identifier = '{{ code_interpreter_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
