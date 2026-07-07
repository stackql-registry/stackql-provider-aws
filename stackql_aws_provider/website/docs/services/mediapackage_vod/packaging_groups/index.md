--- 
title: packaging_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - packaging_groups
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

Creates, updates, deletes, gets or lists a <code>packaging_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="packaging_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackage_vod.packaging_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_packaging_group"
    values={[
        { label: 'describe_packaging_group', value: 'describe_packaging_group' },
        { label: 'list_packaging_groups', value: 'list_packaging_groups' }
    ]}
>
<TabItem value="describe_packaging_group">

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
    <td><CopyableCode code="ApproximateAssetCount" /></td>
    <td><code>integer</code></td>
    <td>The approximate asset count of the PackagingGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the PackagingGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="Authorization" /></td>
    <td><code>object</code></td>
    <td>CDN Authorization credentials</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The time the PackagingGroup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The fully qualified domain name for Assets in the PackagingGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="EgressAccessLogs" /></td>
    <td><code>object</code></td>
    <td>Configure egress access logging.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the PackagingGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_packaging_groups">

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
    <td><CopyableCode code="ApproximateAssetCount" /></td>
    <td><code>integer</code></td>
    <td>The approximate asset count of the PackagingGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the PackagingGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="Authorization" /></td>
    <td><code>object</code></td>
    <td>CDN Authorization credentials</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The time the PackagingGroup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The fully qualified domain name for Assets in the PackagingGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="EgressAccessLogs" /></td>
    <td><code>object</code></td>
    <td>Configure egress access logging.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the PackagingGroup.</td>
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
    <td><a href="#describe_packaging_group"><CopyableCode code="describe_packaging_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of a MediaPackage VOD PackagingGroup resource.</td>
</tr>
<tr>
    <td><a href="#list_packaging_groups"><CopyableCode code="list_packaging_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a collection of MediaPackage VOD PackagingGroup resources.</td>
</tr>
<tr>
    <td><a href="#create_packaging_group"><CopyableCode code="create_packaging_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new MediaPackage VOD PackagingGroup resource.</td>
</tr>
<tr>
    <td><a href="#update_packaging_group"><CopyableCode code="update_packaging_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a specific packaging group. You can't change the id attribute or any other system-generated attributes.</td>
</tr>
<tr>
    <td><a href="#delete_packaging_group"><CopyableCode code="delete_packaging_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a MediaPackage VOD PackagingGroup resource.</td>
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
    <td>The ID of the MediaPackage VOD PackagingGroup resource to delete.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_packaging_group"
    values={[
        { label: 'describe_packaging_group', value: 'describe_packaging_group' },
        { label: 'list_packaging_groups', value: 'list_packaging_groups' }
    ]}
>
<TabItem value="describe_packaging_group">

Returns a description of a MediaPackage VOD PackagingGroup resource.

```sql
SELECT
ApproximateAssetCount,
Arn,
Authorization,
CreatedAt,
DomainName,
EgressAccessLogs,
Id,
Tags
FROM aws.mediapackage_vod.packaging_groups
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_packaging_groups">

Returns a collection of MediaPackage VOD PackagingGroup resources.

```sql
SELECT
ApproximateAssetCount,
Arn,
Authorization,
CreatedAt,
DomainName,
EgressAccessLogs,
Id,
Tags
FROM aws.mediapackage_vod.packaging_groups
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_packaging_group"
    values={[
        { label: 'create_packaging_group', value: 'create_packaging_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_packaging_group">

Creates a new MediaPackage VOD PackagingGroup resource.

```sql
INSERT INTO aws.mediapackage_vod.packaging_groups (
Authorization,
EgressAccessLogs,
Id,
Tags,
region
)
SELECT 
'{{ Authorization }}',
'{{ EgressAccessLogs }}',
'{{ Id }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
Authorization,
CreatedAt,
DomainName,
EgressAccessLogs,
Id,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: packaging_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the packaging_groups resource.
    - name: Authorization
      description: |
        CDN Authorization credentials
      value:
        CdnIdentifierSecret: "{{ CdnIdentifierSecret }}"
        SecretsRoleArn: "{{ SecretsRoleArn }}"
    - name: EgressAccessLogs
      description: |
        Configure egress access logging.
      value:
        LogGroupName: "{{ LogGroupName }}"
    - name: Id
      value: "{{ Id }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of tags associated with a resource
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_packaging_group"
    values={[
        { label: 'update_packaging_group', value: 'update_packaging_group' }
    ]}
>
<TabItem value="update_packaging_group">

Updates a specific packaging group. You can't change the id attribute or any other system-generated attributes.

```sql
UPDATE aws.mediapackage_vod.packaging_groups
SET 
Authorization = '{{ Authorization }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
ApproximateAssetCount,
Arn,
Authorization,
CreatedAt,
DomainName,
EgressAccessLogs,
Id,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_packaging_group"
    values={[
        { label: 'delete_packaging_group', value: 'delete_packaging_group' }
    ]}
>
<TabItem value="delete_packaging_group">

Deletes a MediaPackage VOD PackagingGroup resource.

```sql
DELETE FROM aws.mediapackage_vod.packaging_groups
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
