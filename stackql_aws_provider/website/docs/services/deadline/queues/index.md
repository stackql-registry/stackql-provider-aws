--- 
title: queues
hide_title: false
hide_table_of_contents: false
keywords:
  - queues
  - deadline
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

Creates, updates, deletes, gets or lists a <code>queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_queue"
    values={[
        { label: 'get_queue', value: 'get_queue' },
        { label: 'list_queues', value: 'list_queues' }
    ]}
>
<TabItem value="get_queue">

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
    <td><CopyableCode code="allowed_storage_profile_ids" /></td>
    <td><code>array</code></td>
    <td>The storage profile IDs for the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="blocked_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the queue was blocked. (NO_BUDGET_CONFIGURED, BUDGET_THRESHOLD_REACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="default_budget_action" /></td>
    <td><code>string</code></td>
    <td>The default action taken on a queue if a budget wasn't configured. (NONE, STOP_SCHEDULING_AND_COMPLETE_TASKS, STOP_SCHEDULING_AND_CANCEL_TASKS)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the queue. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the queue. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID for the queue. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_attachment_settings" /></td>
    <td><code>object</code></td>
    <td>The job attachment settings. These are the Amazon S3 bucket name and the Amazon S3 prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="job_run_as_user" /></td>
    <td><code>object</code></td>
    <td>Identifies the user for a job.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID. (pattern: &lt;code&gt;queue-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="required_file_system_location_names" /></td>
    <td><code>array</code></td>
    <td>A list of the required file system location names in the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):iam::\d&#123;12&#125;:role(/&#91;!-.0-~&#93;+)*/&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduling_configuration" /></td>
    <td><code>object</code></td>
    <td>The scheduling configuration for a queue. Defines the strategy used to assign workers to jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the queue. ACTIVE–The queue is active. SCHEDULING–The queue is scheduling. SCHEDULING_BLOCKED–The queue scheduling is blocked. See the provided reason. (IDLE, SCHEDULING, SCHEDULING_BLOCKED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_queues">

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
    <td><CopyableCode code="blocked_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the queue is blocked, if applicable. (NO_BUDGET_CONFIGURED, BUDGET_THRESHOLD_REACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="default_budget_action" /></td>
    <td><code>string</code></td>
    <td>The default action taken on a queue summary if a budget wasn't configured. (NONE, STOP_SCHEDULING_AND_COMPLETE_TASKS, STOP_SCHEDULING_AND_CANCEL_TASKS)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the queue summary to update. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID. (pattern: &lt;code&gt;queue-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>That status of the queue. (IDLE, SCHEDULING, SCHEDULING_BLOCKED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
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
    <td><a href="#get_queue"><CopyableCode code="get_queue" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a queue.</td>
</tr>
<tr>
    <td><a href="#list_queues"><CopyableCode code="list_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-principalId"><code>principalId</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists queues.</td>
</tr>
<tr>
    <td><a href="#create_queue"><CopyableCode code="create_queue" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates a queue to coordinate the order in which jobs run on a farm. A queue can also specify where to pull resources and indicate where to output completed jobs.</td>
</tr>
<tr>
    <td><a href="#associate_member_to_queue"><CopyableCode code="associate_member_to_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-principalType"><code>principalType</code></a>, <a href="#parameter-identityStoreId"><code>identityStoreId</code></a>, <a href="#parameter-membershipLevel"><code>membershipLevel</code></a></td>
    <td></td>
    <td>Assigns a queue membership level to a member</td>
</tr>
<tr>
    <td><a href="#disassociate_member_from_queue"><CopyableCode code="disassociate_member_from_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a member from a queue.</td>
</tr>
<tr>
    <td><a href="#update_queue"><CopyableCode code="update_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Updates a queue.</td>
</tr>
<tr>
    <td><a href="#delete_queue"><CopyableCode code="delete_queue" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a queue. You can't recover the jobs in a queue if you delete the queue. Deleting the queue also deletes the jobs in that queue.</td>
</tr>
<tr>
    <td><a href="#assume_queue_role_for_read"><CopyableCode code="assume_queue_role_for_read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets Amazon Web Services credentials from the queue role. The IAM permissions of the credentials are scoped down to have read-only access.</td>
</tr>
<tr>
    <td><a href="#assume_queue_role_for_user"><CopyableCode code="assume_queue_role_for_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows a user to assume a role for a queue.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the queue that the user assumes the role for.</td>
</tr>
<tr id="parameter-principal_id">
    <td><CopyableCode code="principal_id" /></td>
    <td><code>string</code></td>
    <td>A member's principal ID to disassociate from a queue.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID of the queue that the user assumes the role for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The idempotency token to update in the queue.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
<tr id="parameter-principalId">
    <td><CopyableCode code="principalId" /></td>
    <td><code>string</code></td>
    <td>The principal IDs to include in the list of queues.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the queues listed. ACTIVE–The queues are active. SCHEDULING–The queues are scheduling. SCHEDULING_BLOCKED–The queue scheduling is blocked for these queues.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_queue"
    values={[
        { label: 'get_queue', value: 'get_queue' },
        { label: 'list_queues', value: 'list_queues' }
    ]}
>
<TabItem value="get_queue">

Gets a queue.

```sql
SELECT
allowed_storage_profile_ids,
blocked_reason,
created_at,
created_by,
default_budget_action,
description,
display_name,
farm_id,
job_attachment_settings,
job_run_as_user,
queue_id,
required_file_system_location_names,
role_arn,
scheduling_configuration,
status,
updated_at,
updated_by
FROM aws.deadline.queues
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_queues">

Lists queues.

```sql
SELECT
blocked_reason,
created_at,
created_by,
default_budget_action,
display_name,
farm_id,
queue_id,
status,
updated_at,
updated_by
FROM aws.deadline.queues
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND principalId = '{{ principalId }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_queue"
    values={[
        { label: 'create_queue', value: 'create_queue' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_queue">

Creates a queue to coordinate the order in which jobs run on a farm. A queue can also specify where to pull resources and indicate where to output completed jobs.

```sql
INSERT INTO aws.deadline.queues (
displayName,
description,
defaultBudgetAction,
jobAttachmentSettings,
roleArn,
jobRunAsUser,
requiredFileSystemLocationNames,
allowedStorageProfileIds,
tags,
schedulingConfiguration,
farm_id,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ displayName }}' /* required */,
'{{ description }}',
'{{ defaultBudgetAction }}',
'{{ jobAttachmentSettings }}',
'{{ roleArn }}',
'{{ jobRunAsUser }}',
'{{ requiredFileSystemLocationNames }}',
'{{ allowedStorageProfileIds }}',
'{{ tags }}',
'{{ schedulingConfiguration }}',
'{{ farm_id }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
queue_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: queues
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the queues resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the queues resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
    - name: defaultBudgetAction
      value: "{{ defaultBudgetAction }}"
      valid_values: ['NONE', 'STOP_SCHEDULING_AND_COMPLETE_TASKS', 'STOP_SCHEDULING_AND_CANCEL_TASKS']
    - name: jobAttachmentSettings
      description: |
        The job attachment settings. These are the Amazon S3 bucket name and the Amazon S3 prefix.
      value:
        s3BucketName: "{{ s3BucketName }}"
        rootPrefix: "{{ rootPrefix }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: jobRunAsUser
      description: |
        Identifies the user for a job.
      value:
        posix:
          user: "{{ user }}"
          group: "{{ group }}"
        windows:
          user: "{{ user }}"
          passwordArn: "{{ passwordArn }}"
        runAs: "{{ runAs }}"
    - name: requiredFileSystemLocationNames
      value:
        - "{{ requiredFileSystemLocationNames }}"
    - name: allowedStorageProfileIds
      value:
        - "{{ allowedStorageProfileIds }}"
    - name: tags
      value: "{{ tags }}"
    - name: schedulingConfiguration
      description: |
        The scheduling configuration for a queue. Defines the strategy used to assign workers to jobs.
      value:
        priorityFifo: "{{ priorityFifo }}"
        priorityBalanced:
          renderingTaskBuffer: {{ renderingTaskBuffer }}
        weightedBalanced:
          priorityWeight: {{ priorityWeight }}
          errorWeight: {{ errorWeight }}
          submissionTimeWeight: {{ submissionTimeWeight }}
          renderingTaskWeight: {{ renderingTaskWeight }}
          renderingTaskBuffer: {{ renderingTaskBuffer }}
          maxPriorityOverride:
            alwaysScheduleFirst: "{{ alwaysScheduleFirst }}"
          minPriorityOverride:
            alwaysScheduleLast: "{{ alwaysScheduleLast }}"
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_member_to_queue"
    values={[
        { label: 'associate_member_to_queue', value: 'associate_member_to_queue' },
        { label: 'disassociate_member_from_queue', value: 'disassociate_member_from_queue' },
        { label: 'update_queue', value: 'update_queue' }
    ]}
>
<TabItem value="associate_member_to_queue">

Assigns a queue membership level to a member

```sql
UPDATE aws.deadline.queues
SET 
principalType = '{{ principalType }}',
identityStoreId = '{{ identityStoreId }}',
membershipLevel = '{{ membershipLevel }}',
identityCenterRegion = '{{ identityCenterRegion }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND principal_id = '{{ principal_id }}' --required
AND region = '{{ region }}' --required
AND principalType = '{{ principalType }}' --required
AND identityStoreId = '{{ identityStoreId }}' --required
AND membershipLevel = '{{ membershipLevel }}' --required;
```
</TabItem>
<TabItem value="disassociate_member_from_queue">

Disassociates a member from a queue.

```sql
UPDATE aws.deadline.queues
SET 
-- No updatable properties
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND principal_id = '{{ principal_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_queue">

Updates a queue.

```sql
UPDATE aws.deadline.queues
SET 
displayName = '{{ displayName }}',
description = '{{ description }}',
defaultBudgetAction = '{{ defaultBudgetAction }}',
jobAttachmentSettings = '{{ jobAttachmentSettings }}',
roleArn = '{{ roleArn }}',
jobRunAsUser = '{{ jobRunAsUser }}',
requiredFileSystemLocationNamesToAdd = '{{ requiredFileSystemLocationNamesToAdd }}',
requiredFileSystemLocationNamesToRemove = '{{ requiredFileSystemLocationNamesToRemove }}',
allowedStorageProfileIdsToAdd = '{{ allowedStorageProfileIdsToAdd }}',
allowedStorageProfileIdsToRemove = '{{ allowedStorageProfileIdsToRemove }}',
schedulingConfiguration = '{{ schedulingConfiguration }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queue"
    values={[
        { label: 'delete_queue', value: 'delete_queue' }
    ]}
>
<TabItem value="delete_queue">

Deletes a queue. You can't recover the jobs in a queue if you delete the queue. Deleting the queue also deletes the jobs in that queue.

```sql
DELETE FROM aws.deadline.queues
WHERE farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="assume_queue_role_for_read"
    values={[
        { label: 'assume_queue_role_for_read', value: 'assume_queue_role_for_read' },
        { label: 'assume_queue_role_for_user', value: 'assume_queue_role_for_user' }
    ]}
>
<TabItem value="assume_queue_role_for_read">

Gets Amazon Web Services credentials from the queue role. The IAM permissions of the credentials are scoped down to have read-only access.

```sql
EXEC aws.deadline.queues.assume_queue_role_for_read 
@farm_id='{{ farm_id }}' --required, 
@queue_id='{{ queue_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="assume_queue_role_for_user">

Allows a user to assume a role for a queue.

```sql
EXEC aws.deadline.queues.assume_queue_role_for_user 
@farm_id='{{ farm_id }}' --required, 
@queue_id='{{ queue_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
