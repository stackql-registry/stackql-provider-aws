--- 
title: key_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - key_groups
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>key_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.key_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_key_group"
    values={[
        { label: 'get_key_group', value: 'get_key_group' },
        { label: 'list_key_groups', value: 'list_key_groups' }
    ]}
>
<TabItem value="get_key_group">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the key group.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyGroupConfig" /></td>
    <td><code>string</code></td>
    <td>The key group configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the key group was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_key_groups">

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
    <td><CopyableCode code="Items" /></td>
    <td><code>string</code></td>
    <td>A list of key groups.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of key groups requested.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the Marker field of a subsequent request to continue listing key groups.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of key groups returned in the response.</td>
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
    <td><a href="#get_key_group"><CopyableCode code="get_key_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a key group, including the date and time when the key group was last modified. To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using ListDistributions or GetDistribution. If the key group is not referenced in a cache behavior, you can get the identifier using ListKeyGroups.</td>
</tr>
<tr>
    <td><a href="#list_key_groups"><CopyableCode code="list_key_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets a list of key groups. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#create_key_group"><CopyableCode code="create_key_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyGroupConfig"><code>KeyGroupConfig</code></a></td>
    <td></td>
    <td>Creates a key group that you can use with CloudFront signed URLs and signed cookies. To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see Serving private content in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_key_group"><CopyableCode code="update_key_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyGroupConfig"><code>KeyGroupConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Updates a key group. When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group: Get the current key group with GetKeyGroup or GetKeyGroupConfig. Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs. Call UpdateKeyGroup with the entire key group object, including the fields that you modified and those that you didn't.</td>
</tr>
<tr>
    <td><a href="#delete_key_group"><CopyableCode code="delete_key_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Deletes a key group. You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group. To delete a key group, you must provide the key group's identifier and version. To get these values, use ListKeyGroups followed by GetKeyGroup or GetKeyGroupConfig.</td>
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
    <td>The identifier of the key group that you are deleting. To get the identifier, use ListKeyGroups.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The version of the key group that you are deleting. The version is the key group's ETag value. To get the ETag, use GetKeyGroup or GetKeyGroupConfig.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of key groups. The response includes key groups in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of key groups that you want in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_key_group"
    values={[
        { label: 'get_key_group', value: 'get_key_group' },
        { label: 'list_key_groups', value: 'list_key_groups' }
    ]}
>
<TabItem value="get_key_group">

Gets a key group, including the date and time when the key group was last modified. To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using ListDistributions or GetDistribution. If the key group is not referenced in a cache behavior, you can get the identifier using ListKeyGroups.

```sql
SELECT
Id,
KeyGroupConfig,
LastModifiedTime
FROM aws.cloudfront.key_groups
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_key_groups">

Gets a list of key groups. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
Items,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.key_groups
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_key_group"
    values={[
        { label: 'create_key_group', value: 'create_key_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_key_group">

Creates a key group that you can use with CloudFront signed URLs and signed cookies. To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see Serving private content in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.key_groups (
KeyGroupConfig,
region
)
SELECT 
'{{ KeyGroupConfig }}' /* required */,
'{{ region }}'
RETURNING
Id,
KeyGroupConfig,
LastModifiedTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: key_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the key_groups resource.
    - name: KeyGroupConfig
      description: |
        A key group configuration. A key group contains a list of public keys that you can use with CloudFront signed URLs and signed cookies.
      value:
        Name: "{{ Name }}"
        Items:
          - "{{ Items }}"
        Comment: "{{ Comment }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_key_group"
    values={[
        { label: 'update_key_group', value: 'update_key_group' }
    ]}
>
<TabItem value="update_key_group">

Updates a key group. When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group: Get the current key group with GetKeyGroup or GetKeyGroupConfig. Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs. Call UpdateKeyGroup with the entire key group object, including the fields that you modified and those that you didn't.

```sql
UPDATE aws.cloudfront.key_groups
SET 
KeyGroupConfig = '{{ KeyGroupConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND KeyGroupConfig = '{{ KeyGroupConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
Id,
KeyGroupConfig,
LastModifiedTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_key_group"
    values={[
        { label: 'delete_key_group', value: 'delete_key_group' }
    ]}
>
<TabItem value="delete_key_group">

Deletes a key group. You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group. To delete a key group, you must provide the key group's identifier and version. To get these values, use ListKeyGroups followed by GetKeyGroup or GetKeyGroupConfig.

```sql
DELETE FROM aws.cloudfront.key_groups
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
