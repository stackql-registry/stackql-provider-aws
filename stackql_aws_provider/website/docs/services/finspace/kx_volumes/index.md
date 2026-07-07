--- 
title: kx_volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_volumes
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

Creates, updates, deletes, gets or lists a <code>kx_volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kx_volume"
    values={[
        { label: 'get_kx_volume', value: 'get_kx_volume' },
        { label: 'list_kx_volumes', value: 'list_kx_volumes' }
    ]}
>
<TabItem value="get_kx_volume">

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
    <td><CopyableCode code="attachedClusters" /></td>
    <td><code>array</code></td>
    <td>A list of cluster identifiers that a volume is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityZoneIds" /></td>
    <td><code>array</code></td>
    <td>The identifier of the availability zones.</td>
</tr>
<tr>
    <td><CopyableCode code="azMode" /></td>
    <td><code>string</code></td>
    <td>The number of availability zones you want to assign per volume. Currently, FinSpace only supports SINGLE for volumes. This places dataview in a single AZ. (SINGLE, MULTI)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the volume was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the volume. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9. &#93;&#123;1,1000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment, whose clusters can attach to the volume. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the volume was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="nas1Configuration" /></td>
    <td><code>object</code></td>
    <td>The structure containing the size and type of the network attached storage (NAS_1) file system volume.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of volume creation. CREATING – The volume creation is in progress. CREATE_FAILED – The volume creation has failed. ACTIVE – The volume is active. UPDATING – The volume is in the process of being updated. UPDATE_FAILED – The update action failed. UPDATED – The volume is successfully updated. DELETING – The volume is in the process of being deleted. DELETE_FAILED – The system failed to delete the volume. DELETED – The volume is successfully deleted. (CREATING, CREATE_FAILED, ACTIVE, UPDATING, UPDATED, UPDATE_FAILED, DELETING, DELETED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The error message when a failed state occurs. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-\.\s&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="volumeArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the volume. (pattern: &lt;code&gt;^arn:aws:finspace:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:\d+:kxEnvironment/&#91;0-9A-Za-z_-&#93;&#123;1,128&#125;(/kxSharedVolume/&#91;a-zA-Z0-9_-&#93;&#123;1,255&#125;)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="volumeName" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the volume. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="volumeType" /></td>
    <td><code>string</code></td>
    <td>The type of file system volume. Currently, FinSpace only supports NAS_1 volume type. (NAS_1)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kx_volumes">

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
    <td><CopyableCode code="kxVolumeSummaries" /></td>
    <td><code>array</code></td>
    <td>A summary of volumes.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_kx_volume"><CopyableCode code="get_kx_volume" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-volume_name"><code>volume_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the information about the volume.</td>
</tr>
<tr>
    <td><a href="#list_kx_volumes"><CopyableCode code="list_kx_volumes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-volumeType"><code>volumeType</code></a></td>
    <td>Lists all the volumes in a kdb environment.</td>
</tr>
<tr>
    <td><a href="#create_kx_volume"><CopyableCode code="create_kx_volume" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-volumeType"><code>volumeType</code></a>, <a href="#parameter-volumeName"><code>volumeName</code></a>, <a href="#parameter-azMode"><code>azMode</code></a>, <a href="#parameter-availabilityZoneIds"><code>availabilityZoneIds</code></a></td>
    <td></td>
    <td>Creates a new volume with a specific amount of throughput and storage capacity.</td>
</tr>
<tr>
    <td><a href="#update_kx_volume"><CopyableCode code="update_kx_volume" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-volume_name"><code>volume_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the throughput or capacity of a volume. During the update process, the filesystem might be unavailable for a few minutes. You can retry any operations after the update is complete.</td>
</tr>
<tr>
    <td><a href="#delete_kx_volume"><CopyableCode code="delete_kx_volume" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-volume_name"><code>volume_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a volume. You can only delete a volume if it's not attached to a cluster or a dataview. When a volume is deleted, any data on the volume is lost. This action is irreversible.</td>
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
    <td>A unique identifier for the kdb environment, whose clusters can attach to the volume.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-volume_name">
    <td><CopyableCode code="volume_name" /></td>
    <td><code>string</code></td>
    <td>The name of the volume that you want to delete.</td>
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
<tr id="parameter-volumeType">
    <td><CopyableCode code="volumeType" /></td>
    <td><code>string</code></td>
    <td>The type of file system volume. Currently, FinSpace only supports NAS_1 volume type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kx_volume"
    values={[
        { label: 'get_kx_volume', value: 'get_kx_volume' },
        { label: 'list_kx_volumes', value: 'list_kx_volumes' }
    ]}
>
<TabItem value="get_kx_volume">

Retrieves the information about the volume.

```sql
SELECT
attachedClusters,
availabilityZoneIds,
azMode,
createdTimestamp,
description,
environmentId,
lastModifiedTimestamp,
nas1Configuration,
status,
statusReason,
volumeArn,
volumeName,
volumeType
FROM aws.finspace.kx_volumes
WHERE environment_id = '{{ environment_id }}' -- required
AND volume_name = '{{ volume_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_kx_volumes">

Lists all the volumes in a kdb environment.

```sql
SELECT
kxVolumeSummaries,
nextToken
FROM aws.finspace.kx_volumes
WHERE environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND volumeType = '{{ volumeType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kx_volume"
    values={[
        { label: 'create_kx_volume', value: 'create_kx_volume' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kx_volume">

Creates a new volume with a specific amount of throughput and storage capacity.

```sql
INSERT INTO aws.finspace.kx_volumes (
clientToken,
volumeType,
volumeName,
description,
nas1Configuration,
azMode,
availabilityZoneIds,
tags,
environment_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ volumeType }}' /* required */,
'{{ volumeName }}' /* required */,
'{{ description }}',
'{{ nas1Configuration }}',
'{{ azMode }}' /* required */,
'{{ availabilityZoneIds }}' /* required */,
'{{ tags }}',
'{{ environment_id }}',
'{{ region }}'
RETURNING
availabilityZoneIds,
azMode,
createdTimestamp,
description,
environmentId,
nas1Configuration,
status,
statusReason,
volumeArn,
volumeName,
volumeType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kx_volumes
  props:
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the kx_volumes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the kx_volumes resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: volumeType
      value: "{{ volumeType }}"
      valid_values: ['NAS_1']
    - name: volumeName
      value: "{{ volumeName }}"
    - name: description
      value: "{{ description }}"
    - name: nas1Configuration
      description: |
        The structure containing the size and type of the network attached storage (NAS_1) file system volume.
      value:
        type_: "{{ type_ }}"
        size: {{ size }}
    - name: azMode
      value: "{{ azMode }}"
      valid_values: ['SINGLE', 'MULTI']
    - name: availabilityZoneIds
      value:
        - "{{ availabilityZoneIds }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_kx_volume"
    values={[
        { label: 'update_kx_volume', value: 'update_kx_volume' }
    ]}
>
<TabItem value="update_kx_volume">

Updates the throughput or capacity of a volume. During the update process, the filesystem might be unavailable for a few minutes. You can retry any operations after the update is complete.

```sql
UPDATE aws.finspace.kx_volumes
SET 
description = '{{ description }}',
clientToken = '{{ clientToken }}',
nas1Configuration = '{{ nas1Configuration }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND volume_name = '{{ volume_name }}' --required
AND region = '{{ region }}' --required
RETURNING
attachedClusters,
availabilityZoneIds,
azMode,
createdTimestamp,
description,
environmentId,
lastModifiedTimestamp,
nas1Configuration,
status,
statusReason,
volumeArn,
volumeName,
volumeType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kx_volume"
    values={[
        { label: 'delete_kx_volume', value: 'delete_kx_volume' }
    ]}
>
<TabItem value="delete_kx_volume">

Deletes a volume. You can only delete a volume if it's not attached to a cluster or a dataview. When a volume is deleted, any data on the volume is lost. This action is irreversible.

```sql
DELETE FROM aws.finspace.kx_volumes
WHERE environment_id = '{{ environment_id }}' --required
AND volume_name = '{{ volume_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
