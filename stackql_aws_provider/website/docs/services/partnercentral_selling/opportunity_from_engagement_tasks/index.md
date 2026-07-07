--- 
title: opportunity_from_engagement_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - opportunity_from_engagement_tasks
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

Creates, updates, deletes, gets or lists an <code>opportunity_from_engagement_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="opportunity_from_engagement_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.opportunity_from_engagement_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_opportunity_from_engagement_tasks"
    values={[
        { label: 'list_opportunity_from_engagement_tasks', value: 'list_opportunity_from_engagement_tasks' }
    ]}
>
<TabItem value="list_opportunity_from_engagement_tasks">

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
    <td><CopyableCode code="ContextId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the engagement context associated with the opportunity creation task. This links the task to specific contextual information within the engagement. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EngagementId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the engagement from which the opportunity is being created. This field helps track the source of the opportunity creation task. (pattern: &lt;code&gt;eng-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A detailed message providing additional information about the task, especially useful in case of failures. This field may contain error details or other relevant information about the task's execution.</td>
</tr>
<tr>
    <td><CopyableCode code="OpportunityId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the opportunity created as a result of the task. This field is populated when the task is completed successfully. (pattern: &lt;code&gt;O&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReasonCode" /></td>
    <td><code>string</code></td>
    <td>A code indicating the specific reason for a task failure. This field is populated when the task status is FAILED and provides a categorized reason for the failure. (InvitationAccessDenied, InvitationValidationFailed, EngagementAccessDenied, OpportunityAccessDenied, ResourceSnapshotJobAccessDenied, ResourceSnapshotJobValidationFailed, ResourceSnapshotJobConflict, EngagementValidationFailed, EngagementConflict, OpportunitySubmissionFailed, EngagementInvitationConflict, InternalError, OpportunityValidationFailed, OpportunityConflict, ResourceSnapshotAccessDenied, ResourceSnapshotValidationFailed, ResourceSnapshotConflict, ServiceQuotaExceeded, RequestThrottled, ContextNotFound, CustomerProjectContextNotPermitted, DisqualifiedLeadNotPermitted)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceSnapshotJobId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource snapshot job associated with this task, if a snapshot was created as part of the opportunity creation process. (pattern: &lt;code&gt;job-&#91;0-9a-z&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the task was initiated, in RFC 3339 format.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the task within AWS. This ARN can be used for referencing the task in other AWS services or APIs. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task for creating an opportunity from an engagement. (pattern: &lt;code&gt;.*task-&#91;0-9a-z&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TaskStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the task. Valid values are COMPLETE, INPROGRESS, or FAILED. (IN_PROGRESS, COMPLETE, FAILED)</td>
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
    <td><a href="#list_opportunity_from_engagement_tasks"><CopyableCode code="list_opportunity_from_engagement_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all in-progress, completed, or failed opportunity creation tasks from engagements that were initiated by the caller's account.</td>
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
    defaultValue="list_opportunity_from_engagement_tasks"
    values={[
        { label: 'list_opportunity_from_engagement_tasks', value: 'list_opportunity_from_engagement_tasks' }
    ]}
>
<TabItem value="list_opportunity_from_engagement_tasks">

Lists all in-progress, completed, or failed opportunity creation tasks from engagements that were initiated by the caller's account.

```sql
SELECT
ContextId,
EngagementId,
Message,
OpportunityId,
ReasonCode,
ResourceSnapshotJobId,
StartTime,
TaskArn,
TaskId,
TaskStatus
FROM aws.partnercentral_selling.opportunity_from_engagement_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
