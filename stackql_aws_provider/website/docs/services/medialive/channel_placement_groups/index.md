--- 
title: channel_placement_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - channel_placement_groups
  - medialive
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

Creates, updates, deletes, gets or lists a <code>channel_placement_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channel_placement_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.channel_placement_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_channel_placement_group"
    values={[
        { label: 'describe_channel_placement_group', value: 'describe_channel_placement_group' },
        { label: 'list_channel_placement_groups', value: 'list_channel_placement_groups' }
    ]}
>
<TabItem value="describe_channel_placement_group">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Channels" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterId" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Nodes" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the ChannelPlacementGroup. (UNASSIGNED, ASSIGNING, ASSIGNED, DELETING, DELETE_FAILED, DELETED, UNASSIGNING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_channel_placement_groups">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Channels" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterId" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Nodes" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the ChannelPlacementGroup. (UNASSIGNED, ASSIGNING, ASSIGNED, DELETING, DELETE_FAILED, DELETED, UNASSIGNING)</td>
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
    <td><a href="#describe_channel_placement_group"><CopyableCode code="describe_channel_placement_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_placement_group_id"><code>channel_placement_group_id</code></a>, <a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details about a ChannelPlacementGroup.</td>
</tr>
<tr>
    <td><a href="#list_channel_placement_groups"><CopyableCode code="list_channel_placement_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieve the list of ChannelPlacementGroups in the specified Cluster.</td>
</tr>
<tr>
    <td><a href="#create_channel_placement_group"><CopyableCode code="create_channel_placement_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a ChannelPlacementGroup in the specified Cluster. As part of the create operation, you specify the Nodes to attach the group to.After you create a ChannelPlacementGroup, you add Channels to the group (you do this by modifying the Channels to add them to a specific group). You now have an association of Channels to ChannelPlacementGroup, and ChannelPlacementGroup to Nodes. This association means that all the Channels in the group are able to run on any of the Nodes associated with the group.</td>
</tr>
<tr>
    <td><a href="#update_channel_placement_group"><CopyableCode code="update_channel_placement_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-channel_placement_group_id"><code>channel_placement_group_id</code></a>, <a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Change the settings for a ChannelPlacementGroup.</td>
</tr>
<tr>
    <td><a href="#delete_channel_placement_group"><CopyableCode code="delete_channel_placement_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-channel_placement_group_id"><code>channel_placement_group_id</code></a>, <a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the specified ChannelPlacementGroup that exists in the specified Cluster.</td>
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
<tr id="parameter-channel_placement_group_id">
    <td><CopyableCode code="channel_placement_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the channel placement group.</td>
</tr>
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_channel_placement_group"
    values={[
        { label: 'describe_channel_placement_group', value: 'describe_channel_placement_group' },
        { label: 'list_channel_placement_groups', value: 'list_channel_placement_groups' }
    ]}
>
<TabItem value="describe_channel_placement_group">

Get details about a ChannelPlacementGroup.

```sql
SELECT
Arn,
Channels,
ClusterId,
Id,
Name,
Nodes,
State
FROM aws.medialive.channel_placement_groups
WHERE channel_placement_group_id = '{{ channel_placement_group_id }}' -- required
AND cluster_id = '{{ cluster_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channel_placement_groups">

Retrieve the list of ChannelPlacementGroups in the specified Cluster.

```sql
SELECT
Arn,
Channels,
ClusterId,
Id,
Name,
Nodes,
State
FROM aws.medialive.channel_placement_groups
WHERE cluster_id = '{{ cluster_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel_placement_group"
    values={[
        { label: 'create_channel_placement_group', value: 'create_channel_placement_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel_placement_group">

Create a ChannelPlacementGroup in the specified Cluster. As part of the create operation, you specify the Nodes to attach the group to.After you create a ChannelPlacementGroup, you add Channels to the group (you do this by modifying the Channels to add them to a specific group). You now have an association of Channels to ChannelPlacementGroup, and ChannelPlacementGroup to Nodes. This association means that all the Channels in the group are able to run on any of the Nodes associated with the group.

```sql
INSERT INTO aws.medialive.channel_placement_groups (
Name,
Nodes,
RequestId,
Tags,
cluster_id,
region
)
SELECT 
'{{ Name }}',
'{{ Nodes }}',
'{{ RequestId }}',
'{{ Tags }}',
'{{ cluster_id }}',
'{{ region }}'
RETURNING
Arn,
Channels,
ClusterId,
Id,
Name,
Nodes,
State
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channel_placement_groups
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the channel_placement_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channel_placement_groups resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __string
    - name: Nodes
      value:
        - "{{ Nodes }}"
      description: |
        Placeholder documentation for __listOf__string
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __string
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Placeholder documentation for Tags
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_channel_placement_group"
    values={[
        { label: 'update_channel_placement_group', value: 'update_channel_placement_group' }
    ]}
>
<TabItem value="update_channel_placement_group">

Change the settings for a ChannelPlacementGroup.

```sql
UPDATE aws.medialive.channel_placement_groups
SET 
Name = '{{ Name }}',
Nodes = '{{ Nodes }}'
WHERE 
channel_placement_group_id = '{{ channel_placement_group_id }}' --required
AND cluster_id = '{{ cluster_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
Channels,
ClusterId,
Id,
Name,
Nodes,
State;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel_placement_group"
    values={[
        { label: 'delete_channel_placement_group', value: 'delete_channel_placement_group' }
    ]}
>
<TabItem value="delete_channel_placement_group">

Delete the specified ChannelPlacementGroup that exists in the specified Cluster.

```sql
DELETE FROM aws.medialive.channel_placement_groups
WHERE channel_placement_group_id = '{{ channel_placement_group_id }}' --required
AND cluster_id = '{{ cluster_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
