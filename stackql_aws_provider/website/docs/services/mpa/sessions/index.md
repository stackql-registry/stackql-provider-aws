--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - mpa
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mpa.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
<TabItem value="get_session">

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
    <td><CopyableCode code="ActionCompletionStrategy" /></td>
    <td><code>string</code></td>
    <td>Strategy for executing the protected operation. AUTO_COMPLETION_UPON_APPROVAL means the operation is automatically executed using the requester's permissions, if approved. (AUTO_COMPLETION_UPON_APPROVAL)</td>
</tr>
<tr>
    <td><CopyableCode code="ActionName" /></td>
    <td><code>string</code></td>
    <td>Name of the protected operation.</td>
</tr>
<tr>
    <td><CopyableCode code="AdditionalSecurityRequirements" /></td>
    <td><code>array</code></td>
    <td>A list of AdditionalSecurityRequirement applied to the session.</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovalStrategy" /></td>
    <td><code>object</code></td>
    <td>An ApprovalStrategyResponse object. Contains details for how the team grants approval</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovalTeamArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the approval team. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:mpa:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:approval-team/&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovalTeamName" /></td>
    <td><code>string</code></td>
    <td>Name of the approval team. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ApproverResponses" /></td>
    <td><code>array</code></td>
    <td>An array of GetSessionResponseApproverResponse objects. Contains details for approver responses in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the session completed.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Description for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionStatus" /></td>
    <td><code>string</code></td>
    <td>Status for the protected operation. For example, if the operation is PENDING. (EXECUTED, FAILED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the session will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="InitiationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the session was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata for the session.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfApprovers" /></td>
    <td><code>integer</code></td>
    <td>Total number of approvers in the session.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectedResourceArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the protected operation.</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterAccountId" /></td>
    <td><code>string</code></td>
    <td>ID for the account that made the operation request. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterComment" /></td>
    <td><code>string</code></td>
    <td>Message from the account that made the operation request</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterPrincipalArn" /></td>
    <td><code>string</code></td>
    <td>IAM principal that made the operation request.</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterRegion" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services Region where the operation request originated.</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterServicePrincipal" /></td>
    <td><code>string</code></td>
    <td>Service principal for the service associated with the protected operation.</td>
</tr>
<tr>
    <td><CopyableCode code="SessionArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the session. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:mpa:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:session/&#91;a-zA-Z0-9._-&#93;+/&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status for the session. For example, if the team has approved the requested operation. (PENDING, CANCELLED, APPROVED, FAILED, CREATING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusCode" /></td>
    <td><code>string</code></td>
    <td>Status code of the session. (REJECTED, EXPIRED, CONFIGURATION_CHANGED, ALL_APPROVERS_IN_SESSION)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Message describing the status for session.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sessions">

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
    <td><CopyableCode code="ActionCompletionStrategy" /></td>
    <td><code>string</code></td>
    <td>Strategy for executing the protected operation. AUTO_COMPLETION_UPON_APPROVAL means the operation is executed automatically using the requester's permissions, if approved. (AUTO_COMPLETION_UPON_APPROVAL)</td>
</tr>
<tr>
    <td><CopyableCode code="ActionName" /></td>
    <td><code>string</code></td>
    <td>Name of the protected operation.</td>
</tr>
<tr>
    <td><CopyableCode code="AdditionalSecurityRequirements" /></td>
    <td><code>array</code></td>
    <td>A list of AdditionalSecurityRequirement applied to the session.</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovalTeamArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the approval team. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:mpa:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:approval-team/&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovalTeamName" /></td>
    <td><code>string</code></td>
    <td>Name of the approval team. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the session was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Description for the team.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the session was expire.</td>
</tr>
<tr>
    <td><CopyableCode code="InitiationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the session was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectedResourceArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the protected operation.</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterAccountId" /></td>
    <td><code>string</code></td>
    <td>ID for the account that made the operation request. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterPrincipalArn" /></td>
    <td><code>string</code></td>
    <td>IAM principal that made the operation request.</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterRegion" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services Region where the operation request originated.</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterServicePrincipal" /></td>
    <td><code>string</code></td>
    <td>Service principal for the service associated with the protected operation.</td>
</tr>
<tr>
    <td><CopyableCode code="SessionArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the session. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:mpa:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:session/&#91;a-zA-Z0-9._-&#93;+/&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status for the protected operation. For example, if the operation is PENDING. (PENDING, CANCELLED, APPROVED, FAILED, CREATING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusCode" /></td>
    <td><code>string</code></td>
    <td>Status code of the session. (REJECTED, EXPIRED, CONFIGURATION_CHANGED, ALL_APPROVERS_IN_SESSION)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Message describing the status for session.</td>
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
    <td><a href="#get_session"><CopyableCode code="get_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-session_arn"><code>session_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for an approval session. For more information, see Session in the Multi-party approval User Guide.</td>
</tr>
<tr>
    <td><a href="#list_sessions"><CopyableCode code="list_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-approval_team_arn"><code>approval_team_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of approval sessions. For more information, see Session in the Multi-party approval User Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_session"><CopyableCode code="cancel_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_arn"><code>session_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an approval session. For more information, see Session in the Multi-party approval User Guide.</td>
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
<tr id="parameter-approval_team_arn">
    <td><CopyableCode code="approval_team_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the approval team.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_arn">
    <td><CopyableCode code="session_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the session.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
<TabItem value="get_session">

Returns details for an approval session. For more information, see Session in the Multi-party approval User Guide.

```sql
SELECT
ActionCompletionStrategy,
ActionName,
AdditionalSecurityRequirements,
ApprovalStrategy,
ApprovalTeamArn,
ApprovalTeamName,
ApproverResponses,
CompletionTime,
Description,
ExecutionStatus,
ExpirationTime,
InitiationTime,
Metadata,
NumberOfApprovers,
ProtectedResourceArn,
RequesterAccountId,
RequesterComment,
RequesterPrincipalArn,
RequesterRegion,
RequesterServicePrincipal,
SessionArn,
Status,
StatusCode,
StatusMessage
FROM aws.mpa.sessions
WHERE session_arn = '{{ session_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sessions">

Returns a list of approval sessions. For more information, see Session in the Multi-party approval User Guide.

```sql
SELECT
ActionCompletionStrategy,
ActionName,
AdditionalSecurityRequirements,
ApprovalTeamArn,
ApprovalTeamName,
CompletionTime,
Description,
ExpirationTime,
InitiationTime,
ProtectedResourceArn,
RequesterAccountId,
RequesterPrincipalArn,
RequesterRegion,
RequesterServicePrincipal,
SessionArn,
Status,
StatusCode,
StatusMessage
FROM aws.mpa.sessions
WHERE approval_team_arn = '{{ approval_team_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_session"
    values={[
        { label: 'cancel_session', value: 'cancel_session' }
    ]}
>
<TabItem value="cancel_session">

Cancels an approval session. For more information, see Session in the Multi-party approval User Guide.

```sql
EXEC aws.mpa.sessions.cancel_session 
@session_arn='{{ session_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
