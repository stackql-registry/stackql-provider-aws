--- 
title: kx_scaling_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_scaling_groups
  - finspace
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

Creates, updates, deletes, gets or lists a <code>kx_scaling_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_scaling_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_scaling_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kx_scaling_group"
    values={[
        { label: 'get_kx_scaling_group', value: 'get_kx_scaling_group' },
        { label: 'list_kx_scaling_groups', value: 'list_kx_scaling_groups' }
    ]}
>
<TabItem value="get_kx_scaling_group">

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
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the availability zones. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusters" /></td>
    <td><code>array</code></td>
    <td>The list of Managed kdb clusters that are currently active in the given scaling group.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the scaling group was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="host_type" /></td>
    <td><code>string</code></td>
    <td>The memory and CPU capabilities of the scaling group host on which FinSpace Managed kdb clusters will be placed. It can have one of the following values: kx.sg.large – The host type with a configuration of 16 GiB memory and 2 vCPUs. kx.sg.xlarge – The host type with a configuration of 32 GiB memory and 4 vCPUs. kx.sg.2xlarge – The host type with a configuration of 64 GiB memory and 8 vCPUs. kx.sg.4xlarge – The host type with a configuration of 108 GiB memory and 16 vCPUs. kx.sg.8xlarge – The host type with a configuration of 216 GiB memory and 32 vCPUs. kx.sg.16xlarge – The host type with a configuration of 432 GiB memory and 64 vCPUs. kx.sg.32xlarge – The host type with a configuration of 864 GiB memory and 128 vCPUs. kx.sg1.16xlarge – The host type with a configuration of 1949 GiB memory and 64 vCPUs. kx.sg1.24xlarge – The host type with a configuration of 2948 GiB memory and 96 vCPUs. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the scaling group was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_group_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier for the scaling group. (pattern: &lt;code&gt;^arn:*:*:*:*:*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_group_name" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb scaling group. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of scaling group. CREATING – The scaling group creation is in progress. CREATE_FAILED – The scaling group creation has failed. ACTIVE – The scaling group is active. UPDATING – The scaling group is in the process of being updated. UPDATE_FAILED – The update action failed. DELETING – The scaling group is in the process of being deleted. DELETE_FAILED – The system failed to delete the scaling group. DELETED – The scaling group is successfully deleted. (CREATING, CREATE_FAILED, ACTIVE, DELETING, DELETED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The error message when a failed state occurs. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-\.\s&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kx_scaling_groups">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_groups" /></td>
    <td><code>array</code></td>
    <td>A list of scaling groups available in a kdb environment.</td>
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
    <td><a href="#get_kx_scaling_group"><CopyableCode code="get_kx_scaling_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-scaling_group_name"><code>scaling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of a scaling group.</td>
</tr>
<tr>
    <td><a href="#list_kx_scaling_groups"><CopyableCode code="list_kx_scaling_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of scaling groups in a kdb environment.</td>
</tr>
<tr>
    <td><a href="#create_kx_scaling_group"><CopyableCode code="create_kx_scaling_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-scalingGroupName"><code>scalingGroupName</code></a>, <a href="#parameter-hostType"><code>hostType</code></a>, <a href="#parameter-availabilityZoneId"><code>availabilityZoneId</code></a></td>
    <td></td>
    <td>Creates a new scaling group.</td>
</tr>
<tr>
    <td><a href="#delete_kx_scaling_group"><CopyableCode code="delete_kx_scaling_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-scaling_group_name"><code>scaling_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the specified scaling group. This action is irreversible. You cannot delete a scaling group until all the clusters running on it have been deleted.</td>
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
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment, from where you want to delete the dataview.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-scaling_group_name">
    <td><CopyableCode code="scaling_group_name" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb scaling group.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A token that ensures idempotency. This token expires in 10 minutes.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kx_scaling_group"
    values={[
        { label: 'get_kx_scaling_group', value: 'get_kx_scaling_group' },
        { label: 'list_kx_scaling_groups', value: 'list_kx_scaling_groups' }
    ]}
>
<TabItem value="get_kx_scaling_group">

Retrieves details of a scaling group.

```sql
SELECT
availability_zone_id,
clusters,
created_timestamp,
host_type,
last_modified_timestamp,
scaling_group_arn,
scaling_group_name,
status,
status_reason
FROM aws.finspace.kx_scaling_groups
WHERE environment_id = '{{ environment_id }}' -- required
AND scaling_group_name = '{{ scaling_group_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_kx_scaling_groups">

Returns a list of scaling groups in a kdb environment.

```sql
SELECT
next_token,
scaling_groups
FROM aws.finspace.kx_scaling_groups
WHERE environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kx_scaling_group"
    values={[
        { label: 'create_kx_scaling_group', value: 'create_kx_scaling_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kx_scaling_group">

Creates a new scaling group.

```sql
INSERT INTO aws.finspace.kx_scaling_groups (
clientToken,
scalingGroupName,
hostType,
availabilityZoneId,
tags,
environment_id,
region
)
SELECT 
'{{ clientToken }}' /* required */,
'{{ scalingGroupName }}' /* required */,
'{{ hostType }}' /* required */,
'{{ availabilityZoneId }}' /* required */,
'{{ tags }}',
'{{ environment_id }}',
'{{ region }}'
RETURNING
availability_zone_id,
created_timestamp,
environment_id,
host_type,
last_modified_timestamp,
scaling_group_name,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kx_scaling_groups
  props:
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the kx_scaling_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the kx_scaling_groups resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: scalingGroupName
      value: "{{ scalingGroupName }}"
    - name: hostType
      value: "{{ hostType }}"
    - name: availabilityZoneId
      value: "{{ availabilityZoneId }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kx_scaling_group"
    values={[
        { label: 'delete_kx_scaling_group', value: 'delete_kx_scaling_group' }
    ]}
>
<TabItem value="delete_kx_scaling_group">

Deletes the specified scaling group. This action is irreversible. You cannot delete a scaling group until all the clusters running on it have been deleted.

```sql
DELETE FROM aws.finspace.kx_scaling_groups
WHERE environment_id = '{{ environment_id }}' --required
AND scaling_group_name = '{{ scaling_group_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
