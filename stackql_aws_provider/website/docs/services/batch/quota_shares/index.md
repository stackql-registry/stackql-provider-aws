--- 
title: quota_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - quota_shares
  - batch
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

Creates, updates, deletes, gets or lists a <code>quota_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quota_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.quota_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_quota_share"
    values={[
        { label: 'describe_quota_share', value: 'describe_quota_share' },
        { label: 'list_quota_shares', value: 'list_quota_shares' }
    ]}
>
<TabItem value="describe_quota_share">

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
    <td><CopyableCode code="capacityLimits" /></td>
    <td><code>array</code></td>
    <td>A list that specifies the quantity and type of compute capacity allocated to the quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="jobQueueArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the job queue associated with the quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="preemptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Specifies the preemption behavior for jobs in a quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaShareArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaShareName" /></td>
    <td><code>string</code></td>
    <td>The name of the quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSharingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the quota share. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the quota share. (CREATING, VALID, INVALID, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags applied to the quota share.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_quota_shares">

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
    <td><CopyableCode code="capacityLimits" /></td>
    <td><code>array</code></td>
    <td>A list that specifies the quantity and type of compute capacity allocated to the quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="jobQueueArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job queue associated with the quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="preemptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Specifies the preemption behavior for jobs in a quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaShareArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="quotaShareName" /></td>
    <td><code>string</code></td>
    <td>The name of the quota share.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSharingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the quota share. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the quota share. (CREATING, VALID, INVALID, UPDATING, DELETING)</td>
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
    <td><a href="#describe_quota_share"><CopyableCode code="describe_quota_share" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the specified quota share.</td>
</tr>
<tr>
    <td><a href="#list_quota_shares"><CopyableCode code="list_quota_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Batch quota shares associated with a job queue.</td>
</tr>
<tr>
    <td><a href="#create_quota_share"><CopyableCode code="create_quota_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-quotaShareName"><code>quotaShareName</code></a>, <a href="#parameter-jobQueue"><code>jobQueue</code></a>, <a href="#parameter-capacityLimits"><code>capacityLimits</code></a>, <a href="#parameter-resourceSharingConfiguration"><code>resourceSharingConfiguration</code></a>, <a href="#parameter-preemptionConfiguration"><code>preemptionConfiguration</code></a></td>
    <td></td>
    <td>Creates an Batch quota share. Each quota share operates as a virtual queue with a configured compute capacity, resource sharing strategy, and borrow limits.</td>
</tr>
<tr>
    <td><a href="#update_quota_share"><CopyableCode code="update_quota_share" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-quotaShareArn"><code>quotaShareArn</code></a></td>
    <td></td>
    <td>Updates a quota share.</td>
</tr>
<tr>
    <td><a href="#delete_quota_share"><CopyableCode code="delete_quota_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified quota share. You must first disable submissions for the share by updating the state to DISABLED using the UpdateQuotaShare operation. All jobs in the share are eventually terminated when you delete a quota share.</td>
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
    defaultValue="describe_quota_share"
    values={[
        { label: 'describe_quota_share', value: 'describe_quota_share' },
        { label: 'list_quota_shares', value: 'list_quota_shares' }
    ]}
>
<TabItem value="describe_quota_share">

Returns a description of the specified quota share.

```sql
SELECT
capacityLimits,
jobQueueArn,
preemptionConfiguration,
quotaShareArn,
quotaShareName,
resourceSharingConfiguration,
state,
status,
tags
FROM aws.batch.quota_shares
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_quota_shares">

Returns a list of Batch quota shares associated with a job queue.

```sql
SELECT
capacityLimits,
jobQueueArn,
preemptionConfiguration,
quotaShareArn,
quotaShareName,
resourceSharingConfiguration,
state,
status
FROM aws.batch.quota_shares
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_quota_share"
    values={[
        { label: 'create_quota_share', value: 'create_quota_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_quota_share">

Creates an Batch quota share. Each quota share operates as a virtual queue with a configured compute capacity, resource sharing strategy, and borrow limits.

```sql
INSERT INTO aws.batch.quota_shares (
quotaShareName,
jobQueue,
capacityLimits,
resourceSharingConfiguration,
preemptionConfiguration,
state,
tags,
region
)
SELECT 
'{{ quotaShareName }}' /* required */,
'{{ jobQueue }}' /* required */,
'{{ capacityLimits }}' /* required */,
'{{ resourceSharingConfiguration }}' /* required */,
'{{ preemptionConfiguration }}' /* required */,
'{{ state }}',
'{{ tags }}',
'{{ region }}'
RETURNING
quotaShareArn,
quotaShareName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: quota_shares
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the quota_shares resource.
    - name: quotaShareName
      value: "{{ quotaShareName }}"
    - name: jobQueue
      value: "{{ jobQueue }}"
    - name: capacityLimits
      value:
        - maxCapacity: {{ maxCapacity }}
          capacityUnit: "{{ capacityUnit }}"
    - name: resourceSharingConfiguration
      description: |
        Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.
      value:
        strategy: "{{ strategy }}"
        borrowLimit: {{ borrowLimit }}
    - name: preemptionConfiguration
      description: |
        Specifies the preemption behavior for jobs in a quota share.
      value:
        inSharePreemption: "{{ inSharePreemption }}"
    - name: state
      value: "{{ state }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_quota_share"
    values={[
        { label: 'update_quota_share', value: 'update_quota_share' }
    ]}
>
<TabItem value="update_quota_share">

Updates a quota share.

```sql
UPDATE aws.batch.quota_shares
SET 
quotaShareArn = '{{ quotaShareArn }}',
capacityLimits = '{{ capacityLimits }}',
resourceSharingConfiguration = '{{ resourceSharingConfiguration }}',
preemptionConfiguration = '{{ preemptionConfiguration }}',
state = '{{ state }}'
WHERE 
region = '{{ region }}' --required
AND quotaShareArn = '{{ quotaShareArn }}' --required
RETURNING
quotaShareArn,
quotaShareName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_quota_share"
    values={[
        { label: 'delete_quota_share', value: 'delete_quota_share' }
    ]}
>
<TabItem value="delete_quota_share">

Deletes the specified quota share. You must first disable submissions for the share by updating the state to DISABLED using the UpdateQuotaShare operation. All jobs in the share are eventually terminated when you delete a quota share.

```sql
DELETE FROM aws.batch.quota_shares
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
