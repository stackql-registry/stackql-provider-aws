--- 
title: recovery_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_groups
  - route53_recovery_readiness
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

Creates, updates, deletes, gets or lists a <code>recovery_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_readiness.recovery_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recovery_group"
    values={[
        { label: 'get_recovery_group', value: 'get_recovery_group' },
        { label: 'list_recovery_groups', value: 'list_recovery_groups' }
    ]}
>
<TabItem value="get_recovery_group">

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
    <td><CopyableCode code="Cells" /></td>
    <td><code>array</code></td>
    <td>A list of a cell's Amazon Resource Names (ARNs).</td>
</tr>
<tr>
    <td><CopyableCode code="RecoveryGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the recovery group.</td>
</tr>
<tr>
    <td><CopyableCode code="RecoveryGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the recovery group. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the recovery group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recovery_groups">

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
    <td><CopyableCode code="Cells" /></td>
    <td><code>array</code></td>
    <td>A list of a cell's Amazon Resource Names (ARNs).</td>
</tr>
<tr>
    <td><CopyableCode code="RecoveryGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the recovery group.</td>
</tr>
<tr>
    <td><CopyableCode code="RecoveryGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the recovery group. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the recovery group.</td>
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
    <td><a href="#get_recovery_group"><CopyableCode code="get_recovery_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-recovery_group_name"><code>recovery_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a recovery group, including a list of the cells that are included in it.</td>
</tr>
<tr>
    <td><a href="#list_recovery_groups"><CopyableCode code="list_recovery_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the recovery groups in an account.</td>
</tr>
<tr>
    <td><a href="#create_recovery_group"><CopyableCode code="create_recovery_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RecoveryGroupName"><code>RecoveryGroupName</code></a></td>
    <td></td>
    <td>Creates a recovery group in an account. A recovery group corresponds to an application and includes a list of the cells that make up the application.</td>
</tr>
<tr>
    <td><a href="#update_recovery_group"><CopyableCode code="update_recovery_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-recovery_group_name"><code>recovery_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a recovery group.</td>
</tr>
<tr>
    <td><a href="#delete_recovery_group"><CopyableCode code="delete_recovery_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-recovery_group_name"><code>recovery_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a recovery group.</td>
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
<tr id="parameter-recovery_group_name">
    <td><CopyableCode code="recovery_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of a recovery group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recovery_group"
    values={[
        { label: 'get_recovery_group', value: 'get_recovery_group' },
        { label: 'list_recovery_groups', value: 'list_recovery_groups' }
    ]}
>
<TabItem value="get_recovery_group">

Gets details about a recovery group, including a list of the cells that are included in it.

```sql
SELECT
Cells,
RecoveryGroupArn,
RecoveryGroupName,
Tags
FROM aws.route53_recovery_readiness.recovery_groups
WHERE recovery_group_name = '{{ recovery_group_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recovery_groups">

Lists the recovery groups in an account.

```sql
SELECT
Cells,
RecoveryGroupArn,
RecoveryGroupName,
Tags
FROM aws.route53_recovery_readiness.recovery_groups
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_recovery_group"
    values={[
        { label: 'create_recovery_group', value: 'create_recovery_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recovery_group">

Creates a recovery group in an account. A recovery group corresponds to an application and includes a list of the cells that make up the application.

```sql
INSERT INTO aws.route53_recovery_readiness.recovery_groups (
Cells,
RecoveryGroupName,
Tags,
region
)
SELECT 
'{{ Cells }}',
'{{ RecoveryGroupName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Cells,
RecoveryGroupArn,
RecoveryGroupName,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recovery_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recovery_groups resource.
    - name: Cells
      value:
        - "{{ Cells }}"
    - name: RecoveryGroupName
      value: "{{ RecoveryGroupName }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of tags associated with a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_recovery_group"
    values={[
        { label: 'update_recovery_group', value: 'update_recovery_group' }
    ]}
>
<TabItem value="update_recovery_group">

Updates a recovery group.

```sql
UPDATE aws.route53_recovery_readiness.recovery_groups
SET 
Cells = '{{ Cells }}'
WHERE 
recovery_group_name = '{{ recovery_group_name }}' --required
AND region = '{{ region }}' --required
RETURNING
Cells,
RecoveryGroupArn,
RecoveryGroupName,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recovery_group"
    values={[
        { label: 'delete_recovery_group', value: 'delete_recovery_group' }
    ]}
>
<TabItem value="delete_recovery_group">

Deletes a recovery group.

```sql
DELETE FROM aws.route53_recovery_readiness.recovery_groups
WHERE recovery_group_name = '{{ recovery_group_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
