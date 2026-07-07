--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
  - mediapackage_vod
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackage_vod.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_asset"
    values={[
        { label: 'describe_asset', value: 'describe_asset' },
        { label: 'list_assets', value: 'list_assets' }
    ]}
>
<TabItem value="describe_asset">

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
    <td>The ARN of the Asset.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The time the Asset was initially submitted for Ingest.</td>
</tr>
<tr>
    <td><CopyableCode code="EgressEndpoints" /></td>
    <td><code>array</code></td>
    <td>The list of egress endpoints available for the Asset.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Asset.</td>
</tr>
<tr>
    <td><CopyableCode code="PackagingGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the PackagingGroup for the Asset.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The resource ID to include in SPEKE key requests.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the source object in S3.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role_arn used to access the source S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_assets">

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
    <td>The ARN of the Asset.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The time the Asset was initially submitted for Ingest.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Asset.</td>
</tr>
<tr>
    <td><CopyableCode code="PackagingGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the PackagingGroup for the Asset.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The resource ID to include in SPEKE key requests.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the source object in S3.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN used to access the source S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#describe_asset"><CopyableCode code="describe_asset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of a MediaPackage VOD Asset resource.</td>
</tr>
<tr>
    <td><a href="#list_assets"><CopyableCode code="list_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-packagingGroupId"><code>packagingGroupId</code></a></td>
    <td>Returns a collection of MediaPackage VOD Asset resources.</td>
</tr>
<tr>
    <td><a href="#create_asset"><CopyableCode code="create_asset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PackagingGroupId"><code>PackagingGroupId</code></a>, <a href="#parameter-SourceArn"><code>SourceArn</code></a>, <a href="#parameter-SourceRoleArn"><code>SourceRoleArn</code></a></td>
    <td></td>
    <td>Creates a new MediaPackage VOD Asset resource.</td>
</tr>
<tr>
    <td><a href="#delete_asset"><CopyableCode code="delete_asset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing MediaPackage VOD Asset resource.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the MediaPackage VOD Asset resource to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Upper bound on number of records to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to resume pagination from the end of a previous request.</td>
</tr>
<tr id="parameter-packagingGroupId">
    <td><CopyableCode code="packagingGroupId" /></td>
    <td><code>string</code></td>
    <td>Returns Assets associated with the specified PackagingGroup.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_asset"
    values={[
        { label: 'describe_asset', value: 'describe_asset' },
        { label: 'list_assets', value: 'list_assets' }
    ]}
>
<TabItem value="describe_asset">

Returns a description of a MediaPackage VOD Asset resource.

```sql
SELECT
Arn,
CreatedAt,
EgressEndpoints,
Id,
PackagingGroupId,
ResourceId,
SourceArn,
SourceRoleArn,
Tags
FROM aws.mediapackage_vod.assets
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_assets">

Returns a collection of MediaPackage VOD Asset resources.

```sql
SELECT
Arn,
CreatedAt,
Id,
PackagingGroupId,
ResourceId,
SourceArn,
SourceRoleArn,
Tags
FROM aws.mediapackage_vod.assets
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND packagingGroupId = '{{ packagingGroupId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_asset"
    values={[
        { label: 'create_asset', value: 'create_asset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_asset">

Creates a new MediaPackage VOD Asset resource.

```sql
INSERT INTO aws.mediapackage_vod.assets (
Id,
PackagingGroupId,
ResourceId,
SourceArn,
SourceRoleArn,
Tags,
region
)
SELECT 
'{{ Id }}',
'{{ PackagingGroupId }}' /* required */,
'{{ ResourceId }}',
'{{ SourceArn }}' /* required */,
'{{ SourceRoleArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
CreatedAt,
EgressEndpoints,
Id,
PackagingGroupId,
ResourceId,
SourceArn,
SourceRoleArn,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assets resource.
    - name: Id
      value: "{{ Id }}"
    - name: PackagingGroupId
      value: "{{ PackagingGroupId }}"
    - name: ResourceId
      value: "{{ ResourceId }}"
    - name: SourceArn
      value: "{{ SourceArn }}"
    - name: SourceRoleArn
      value: "{{ SourceRoleArn }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of tags associated with a resource
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_asset"
    values={[
        { label: 'delete_asset', value: 'delete_asset' }
    ]}
>
<TabItem value="delete_asset">

Deletes an existing MediaPackage VOD Asset resource.

```sql
DELETE FROM aws.mediapackage_vod.assets
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
