--- 
title: workspaces_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces_pools
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>workspaces_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspaces_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.workspaces_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspaces_pools"
    values={[
        { label: 'describe_workspaces_pools', value: 'describe_workspaces_pools' }
    ]}
>
<TabItem value="describe_workspaces_pools">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkspacesPools" /></td>
    <td><code>array</code></td>
    <td>Information about the WorkSpaces Pools.</td>
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
    <td><a href="#describe_workspaces_pools"><CopyableCode code="describe_workspaces_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified WorkSpaces Pools.</td>
</tr>
<tr>
    <td><a href="#create_workspaces_pool"><CopyableCode code="create_workspaces_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolName"><code>PoolName</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-BundleId"><code>BundleId</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-Capacity"><code>Capacity</code></a></td>
    <td></td>
    <td>Creates a pool of WorkSpaces.</td>
</tr>
<tr>
    <td><a href="#update_workspaces_pool"><CopyableCode code="update_workspaces_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolId"><code>PoolId</code></a></td>
    <td></td>
    <td>Updates the specified pool.</td>
</tr>
<tr>
    <td><a href="#terminate_workspaces_pool"><CopyableCode code="terminate_workspaces_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Terminates the specified pool.</td>
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
    defaultValue="describe_workspaces_pools"
    values={[
        { label: 'describe_workspaces_pools', value: 'describe_workspaces_pools' }
    ]}
>
<TabItem value="describe_workspaces_pools">

Describes the specified WorkSpaces Pools.

```sql
SELECT
NextToken,
WorkspacesPools
FROM aws.workspaces.workspaces_pools
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspaces_pool"
    values={[
        { label: 'create_workspaces_pool', value: 'create_workspaces_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspaces_pool">

Creates a pool of WorkSpaces.

```sql
INSERT INTO aws.workspaces.workspaces_pools (
PoolName,
Description,
BundleId,
DirectoryId,
Capacity,
Tags,
ApplicationSettings,
TimeoutSettings,
RunningMode,
region
)
SELECT 
'{{ PoolName }}' /* required */,
'{{ Description }}' /* required */,
'{{ BundleId }}' /* required */,
'{{ DirectoryId }}' /* required */,
'{{ Capacity }}' /* required */,
'{{ Tags }}',
'{{ ApplicationSettings }}',
'{{ TimeoutSettings }}',
'{{ RunningMode }}',
'{{ region }}'
RETURNING
WorkspacesPool
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspaces_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspaces_pools resource.
    - name: PoolName
      value: "{{ PoolName }}"
      description: |
        The name of the pool.
    - name: Description
      value: "{{ Description }}"
      description: |
        The pool description.
    - name: BundleId
      value: "{{ BundleId }}"
      description: |
        The identifier of the bundle for the pool.
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: |
        The identifier of the directory for the pool.
    - name: Capacity
      description: |
        The user capacity of the pool.
      value:
        DesiredUserSessions: {{ DesiredUserSessions }}
    - name: Tags
      description: |
        The tags for the pool.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ApplicationSettings
      description: |
        Indicates the application settings of the pool.
      value:
        Status: "{{ Status }}"
        SettingsGroup: "{{ SettingsGroup }}"
    - name: TimeoutSettings
      description: |
        Indicates the timeout settings of the pool.
      value:
        DisconnectTimeoutInSeconds: {{ DisconnectTimeoutInSeconds }}
        IdleDisconnectTimeoutInSeconds: {{ IdleDisconnectTimeoutInSeconds }}
        MaxUserDurationInSeconds: {{ MaxUserDurationInSeconds }}
    - name: RunningMode
      value: "{{ RunningMode }}"
      description: |
        The running mode for the pool.
      valid_values: ['AUTO_STOP', 'ALWAYS_ON']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workspaces_pool"
    values={[
        { label: 'update_workspaces_pool', value: 'update_workspaces_pool' }
    ]}
>
<TabItem value="update_workspaces_pool">

Updates the specified pool.

```sql
UPDATE aws.workspaces.workspaces_pools
SET 
PoolId = '{{ PoolId }}',
Description = '{{ Description }}',
BundleId = '{{ BundleId }}',
DirectoryId = '{{ DirectoryId }}',
Capacity = '{{ Capacity }}',
ApplicationSettings = '{{ ApplicationSettings }}',
TimeoutSettings = '{{ TimeoutSettings }}',
RunningMode = '{{ RunningMode }}'
WHERE 
region = '{{ region }}' --required
AND PoolId = '{{ PoolId }}' --required
RETURNING
WorkspacesPool;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_workspaces_pool"
    values={[
        { label: 'terminate_workspaces_pool', value: 'terminate_workspaces_pool' }
    ]}
>
<TabItem value="terminate_workspaces_pool">

Terminates the specified pool.

```sql
DELETE FROM aws.workspaces.workspaces_pools
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
