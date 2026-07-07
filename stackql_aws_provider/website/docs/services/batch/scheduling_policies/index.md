--- 
title: scheduling_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduling_policies
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

Creates, updates, deletes, gets or lists a <code>scheduling_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduling_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.scheduling_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scheduling_policies"
    values={[
        { label: 'describe_scheduling_policies', value: 'describe_scheduling_policies' },
        { label: 'list_scheduling_policies', value: 'list_scheduling_policies' }
    ]}
>
<TabItem value="describe_scheduling_policies">

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
    <td><CopyableCode code="schedulingPolicies" /></td>
    <td><code>array</code></td>
    <td>The list of scheduling policies.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scheduling_policies">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the scheduling policy.</td>
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
    <td><a href="#describe_scheduling_policies"><CopyableCode code="describe_scheduling_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your scheduling policies.</td>
</tr>
<tr>
    <td><a href="#list_scheduling_policies"><CopyableCode code="list_scheduling_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Batch scheduling policies.</td>
</tr>
<tr>
    <td><a href="#create_scheduling_policy"><CopyableCode code="create_scheduling_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an Batch scheduling policy.</td>
</tr>
<tr>
    <td><a href="#update_scheduling_policy"><CopyableCode code="update_scheduling_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates a scheduling policy.</td>
</tr>
<tr>
    <td><a href="#delete_scheduling_policy"><CopyableCode code="delete_scheduling_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified scheduling policy. You can't delete a scheduling policy that's used in any job queues.</td>
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
    defaultValue="describe_scheduling_policies"
    values={[
        { label: 'describe_scheduling_policies', value: 'describe_scheduling_policies' },
        { label: 'list_scheduling_policies', value: 'list_scheduling_policies' }
    ]}
>
<TabItem value="describe_scheduling_policies">

Describes one or more of your scheduling policies.

```sql
SELECT
schedulingPolicies
FROM aws.batch.scheduling_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scheduling_policies">

Returns a list of Batch scheduling policies.

```sql
SELECT
arn
FROM aws.batch.scheduling_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scheduling_policy"
    values={[
        { label: 'create_scheduling_policy', value: 'create_scheduling_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scheduling_policy">

Creates an Batch scheduling policy.

```sql
INSERT INTO aws.batch.scheduling_policies (
name,
quotaSharePolicy,
fairsharePolicy,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ quotaSharePolicy }}',
'{{ fairsharePolicy }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduling_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scheduling_policies resource.
    - name: name
      value: "{{ name }}"
    - name: quotaSharePolicy
      description: |
        The quota share scheduling policy details for a job queue.
      value:
        idleResourceAssignmentStrategy: "{{ idleResourceAssignmentStrategy }}"
    - name: fairsharePolicy
      description: |
        The fair-share scheduling policy details.
      value:
        shareDecaySeconds: {{ shareDecaySeconds }}
        computeReservation: {{ computeReservation }}
        shareDistribution:
          - shareIdentifier: "{{ shareIdentifier }}"
            weightFactor: {{ weightFactor }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scheduling_policy"
    values={[
        { label: 'update_scheduling_policy', value: 'update_scheduling_policy' }
    ]}
>
<TabItem value="update_scheduling_policy">

Updates a scheduling policy.

```sql
UPDATE aws.batch.scheduling_policies
SET 
arn = '{{ arn }}',
quotaSharePolicy = '{{ quotaSharePolicy }}',
fairsharePolicy = '{{ fairsharePolicy }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scheduling_policy"
    values={[
        { label: 'delete_scheduling_policy', value: 'delete_scheduling_policy' }
    ]}
>
<TabItem value="delete_scheduling_policy">

Deletes the specified scheduling policy. You can't delete a scheduling policy that's used in any job queues.

```sql
DELETE FROM aws.batch.scheduling_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
