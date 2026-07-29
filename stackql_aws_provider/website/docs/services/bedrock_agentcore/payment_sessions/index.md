--- 
title: payment_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - payment_sessions
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

Creates, updates, deletes, gets or lists a <code>payment_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payment_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.payment_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_payment_session"
    values={[
        { label: 'get_payment_session', value: 'get_payment_session' },
        { label: 'list_payment_sessions', value: 'list_payment_sessions' }
    ]}
>
<TabItem value="get_payment_session">

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
    <td><CopyableCode code="available_limits" /></td>
    <td><code>object</code></td>
    <td>The available limits for this session after accounting for processed payments.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this payment session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry_time_in_minutes" /></td>
    <td><code>integer</code></td>
    <td>The session expiry time in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="limits" /></td>
    <td><code>object</code></td>
    <td>Session spending limits</td>
</tr>
<tr>
    <td><CopyableCode code="payment_manager_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the payment manager that owns this session. (pattern: &lt;code&gt;arn:(aws|aws-&#91;a-z0-9-&#93;+):bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:payment-manager/&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;&#123;0,47&#125;&#91;a-z0-9&#93;)?-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this payment session. (pattern: &lt;code&gt;payment-session-&#91;0-9a-zA-Z-&#93;&#123;15&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this payment session was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID associated with this payment session.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_payment_sessions">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this payment session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry_time_in_minutes" /></td>
    <td><code>integer</code></td>
    <td>The session expiry time in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="payment_manager_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the payment manager that owns this session. (pattern: &lt;code&gt;arn:(aws|aws-&#91;a-z0-9-&#93;+):bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:payment-manager/&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;&#123;0,47&#125;&#91;a-z0-9&#93;)?-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payment_session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this payment session. (pattern: &lt;code&gt;payment-session-&#91;0-9a-zA-Z-&#93;&#123;15&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this payment session was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID associated with this payment session.</td>
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
    <td><a href="#get_payment_session"><CopyableCode code="get_payment_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"><code>X-Amzn-Bedrock-AgentCore-Payments-Agent-Name</code></a></td>
    <td>Get a payment session</td>
</tr>
<tr>
    <td><a href="#list_payment_sessions"><CopyableCode code="list_payment_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"><code>X-Amzn-Bedrock-AgentCore-Payments-Agent-Name</code></a></td>
    <td>List payment manager sessions</td>
</tr>
<tr>
    <td><a href="#create_payment_session"><CopyableCode code="create_payment_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-paymentManagerArn"><code>paymentManagerArn</code></a>, <a href="#parameter-expiryTimeInMinutes"><code>expiryTimeInMinutes</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"><code>X-Amzn-Bedrock-AgentCore-Payments-Agent-Name</code></a></td>
    <td>Create a new payment manager session</td>
</tr>
<tr>
    <td><a href="#delete_payment_session"><CopyableCode code="delete_payment_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a></td>
    <td>Delete a payment manager session Permanently removes a payment session record from the database. This is a hard delete operation that removes the session completely. Deleting a non-existent or already-deleted session returns ResourceNotFoundException (404). Authorization: The caller must own the session (accountId, userId, and paymentManagerId must match). If authorization fails, a 403 Forbidden error is returned. Errors: ResourceNotFoundException: The session does not exist or has already been deleted AccessDeniedException: The caller is not authorized to delete this session ValidationException: Required fields are missing or invalid InternalServerException: An unexpected server error occurred</td>
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
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Payments-Agent-Name" /></td>
    <td><code>string</code></td>
    <td>The agent name associated with this request, used for observability.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Payments-User-Id" /></td>
    <td><code>string</code></td>
    <td>The user ID making the delete request. Must match the session's userId.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_payment_session"
    values={[
        { label: 'get_payment_session', value: 'get_payment_session' },
        { label: 'list_payment_sessions', value: 'list_payment_sessions' }
    ]}
>
<TabItem value="get_payment_session">

Get a payment session

```sql
SELECT
available_limits,
created_at,
expiry_time_in_minutes,
limits,
payment_manager_arn,
payment_session_id,
updated_at,
user_id
FROM aws.bedrock_agentcore.payment_sessions
WHERE region = '{{ region }}' -- required
AND `X-Amzn-Bedrock-AgentCore-Payments-User-Id` = '{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}'
AND `X-Amzn-Bedrock-AgentCore-Payments-Agent-Name` = '{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}'
;
```
</TabItem>
<TabItem value="list_payment_sessions">

List payment manager sessions

```sql
SELECT
created_at,
expiry_time_in_minutes,
payment_manager_arn,
payment_session_id,
updated_at,
user_id
FROM aws.bedrock_agentcore.payment_sessions
WHERE region = '{{ region }}' -- required
AND `X-Amzn-Bedrock-AgentCore-Payments-User-Id` = '{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}'
AND `X-Amzn-Bedrock-AgentCore-Payments-Agent-Name` = '{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_payment_session"
    values={[
        { label: 'create_payment_session', value: 'create_payment_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_payment_session">

Create a new payment manager session

```sql
INSERT INTO aws.bedrock_agentcore.payment_sessions (
paymentManagerArn,
limits,
expiryTimeInMinutes,
clientToken,
region,
`X-Amzn-Bedrock-AgentCore-Payments-User-Id`,
`X-Amzn-Bedrock-AgentCore-Payments-Agent-Name`
)
SELECT 
'{{ paymentManagerArn }}' /* required */,
'{{ limits }}',
{{ expiryTimeInMinutes }} /* required */,
'{{ clientToken }}',
'{{ region }}',
'{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}',
'{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}'
RETURNING
payment_session
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: payment_sessions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the payment_sessions resource.
    - name: paymentManagerArn
      value: "{{ paymentManagerArn }}"
    - name: limits
      description: |
        Session spending limits
      value:
        maxSpendAmount:
          value: "{{ value }}"
          currency: "{{ currency }}"
    - name: expiryTimeInMinutes
      value: {{ expiryTimeInMinutes }}
    - name: clientToken
      value: "{{ clientToken }}"
    - name: X-Amzn-Bedrock-AgentCore-Payments-User-Id
      value: "{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}"
      description: The user ID associated with this payment session.
      description: The user ID associated with this payment session.
    - name: X-Amzn-Bedrock-AgentCore-Payments-Agent-Name
      value: "{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}"
      description: The agent name associated with this request, used for observability.
      description: The agent name associated with this request, used for observability.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_payment_session"
    values={[
        { label: 'delete_payment_session', value: 'delete_payment_session' }
    ]}
>
<TabItem value="delete_payment_session">

Delete a payment manager session Permanently removes a payment session record from the database. This is a hard delete operation that removes the session completely. Deleting a non-existent or already-deleted session returns ResourceNotFoundException (404). Authorization: The caller must own the session (accountId, userId, and paymentManagerId must match). If authorization fails, a 403 Forbidden error is returned. Errors: ResourceNotFoundException: The session does not exist or has already been deleted AccessDeniedException: The caller is not authorized to delete this session ValidationException: Required fields are missing or invalid InternalServerException: An unexpected server error occurred

```sql
DELETE FROM aws.bedrock_agentcore.payment_sessions
WHERE region = '{{ region }}' --required
AND `X-Amzn-Bedrock-AgentCore-Payments-User-Id` = '{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}'
;
```
</TabItem>
</Tabs>
