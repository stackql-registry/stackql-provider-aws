--- 
title: engagement_by_accepting_invitation_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - engagement_by_accepting_invitation_tasks
  - partnercentral_selling
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

Creates, updates, deletes, gets or lists an <code>engagement_by_accepting_invitation_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engagement_by_accepting_invitation_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.engagement_by_accepting_invitation_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_engagement_by_accepting_invitation_tasks"
    values={[
        { label: 'list_engagement_by_accepting_invitation_tasks', value: 'list_engagement_by_accepting_invitation_tasks' }
    ]}
>
<TabItem value="list_engagement_by_accepting_invitation_tasks">

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
    <td><CopyableCode code="engagement_invitation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the engagement invitation that was accepted. (pattern: &lt;code&gt;engi-&#91;0-9,a-z&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Detailed message describing the failure and possible recovery steps.</td>
</tr>
<tr>
    <td><CopyableCode code="opportunity_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of opportunity that was created. (pattern: &lt;code&gt;O&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reason_code" /></td>
    <td><code>string</code></td>
    <td>A code pointing to the specific reason for the failure. (InvitationAccessDenied, InvitationValidationFailed, EngagementAccessDenied, OpportunityAccessDenied, ResourceSnapshotJobAccessDenied, ResourceSnapshotJobValidationFailed, ResourceSnapshotJobConflict, EngagementValidationFailed, EngagementConflict, OpportunitySubmissionFailed, EngagementInvitationConflict, InternalError, OpportunityValidationFailed, OpportunityConflict, ResourceSnapshotAccessDenied, ResourceSnapshotValidationFailed, ResourceSnapshotConflict, ServiceQuotaExceeded, RequestThrottled, ContextNotFound, CustomerProjectContextNotPermitted, DisqualifiedLeadNotPermitted)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_snapshot_job_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the resource snapshot job that was created. (pattern: &lt;code&gt;job-&#91;0-9a-z&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task start timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="task_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the task. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the task. (pattern: &lt;code&gt;.*task-&#91;0-9a-z&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="task_status" /></td>
    <td><code>string</code></td>
    <td>Status of the task. (IN_PROGRESS, COMPLETE, FAILED)</td>
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
    <td><a href="#list_engagement_by_accepting_invitation_tasks"><CopyableCode code="list_engagement_by_accepting_invitation_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all in-progress, completed, or failed StartEngagementByAcceptingInvitationTask tasks that were initiated by the caller's account.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_engagement_by_accepting_invitation_tasks"
    values={[
        { label: 'list_engagement_by_accepting_invitation_tasks', value: 'list_engagement_by_accepting_invitation_tasks' }
    ]}
>
<TabItem value="list_engagement_by_accepting_invitation_tasks">

Lists all in-progress, completed, or failed StartEngagementByAcceptingInvitationTask tasks that were initiated by the caller's account.

```sql
SELECT
engagement_invitation_id,
message,
opportunity_id,
reason_code,
resource_snapshot_job_id,
start_time,
task_arn,
task_id,
task_status
FROM aws.partnercentral_selling.engagement_by_accepting_invitation_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
