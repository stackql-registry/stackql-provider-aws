--- 
title: key_value_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - key_value_stores
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

Creates, updates, deletes, gets or lists a <code>key_value_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_value_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.key_value_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_key_value_store"
    values={[
        { label: 'describe_key_value_store', value: 'describe_key_value_store' },
        { label: 'list_key_value_stores', value: 'list_key_value_stores' }
    ]}
>
<TabItem value="describe_key_value_store">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the key value store.</td>
</tr>
<tr>
    <td><CopyableCode code="Comment" /></td>
    <td><code>string</code></td>
    <td>A comment for the key value store.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique Id for the key value store.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The last-modified time of the key value store.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the key value store.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the key value store.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_key_value_stores">

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
    <td>The items of the key value store list.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items in the key value store list.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>The next marker associated with the key value store list.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The quantity of the key value store list.</td>
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
    <td><a href="#describe_key_value_store"><CopyableCode code="describe_key_value_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specifies the key value store and its configuration.</td>
</tr>
<tr>
    <td><a href="#list_key_value_stores"><CopyableCode code="list_key_value_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>Specifies the key value stores to list.</td>
</tr>
<tr>
    <td><a href="#create_key_value_store"><CopyableCode code="create_key_value_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specifies the key value store resource to add to your account. In your account, the key value store names must be unique. You can also import key value store data in JSON format from an S3 bucket by providing a valid ImportSource that you own.</td>
</tr>
<tr>
    <td><a href="#update_key_value_store"><CopyableCode code="update_key_value_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specifies the key value store to update.</td>
</tr>
<tr>
    <td><a href="#delete_key_value_store"><CopyableCode code="delete_key_value_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specifies the key value store to delete.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The key value store to delete, if a match occurs.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the key value store.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The marker associated with the key value stores list.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items in the key value stores list.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the request for the key value stores list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_key_value_store"
    values={[
        { label: 'describe_key_value_store', value: 'describe_key_value_store' },
        { label: 'list_key_value_stores', value: 'list_key_value_stores' }
    ]}
>
<TabItem value="describe_key_value_store">

Specifies the key value store and its configuration.

```sql
SELECT
ARN,
Comment,
Id,
LastModifiedTime,
Name,
Status
FROM aws.cloudfront.key_value_stores
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_key_value_stores">

Specifies the key value stores to list.

```sql
SELECT
Items,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.key_value_stores
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
AND Status = '{{ Status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_key_value_store"
    values={[
        { label: 'create_key_value_store', value: 'create_key_value_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_key_value_store">

Specifies the key value store resource to add to your account. In your account, the key value store names must be unique. You can also import key value store data in JSON format from an S3 bucket by providing a valid ImportSource that you own.

```sql
INSERT INTO aws.cloudfront.key_value_stores (
Name,
Comment,
ImportSource,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Comment }}',
'{{ ImportSource }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ARN,
Comment,
Id,
LastModifiedTime,
Name,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: key_value_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the key_value_stores resource.
    - name: Name
      value: "{{ Name }}"
    - name: Comment
      value: "{{ Comment }}"
    - name: ImportSource
      description: |
        The import source for the key value store.
      value:
        SourceType: "{{ SourceType }}"
        SourceARN: "{{ SourceARN }}"
    - name: Tags
      description: |
        A complex type that contains zero or more Tag elements.
      value:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_key_value_store"
    values={[
        { label: 'update_key_value_store', value: 'update_key_value_store' }
    ]}
>
<TabItem value="update_key_value_store">

Specifies the key value store to update.

```sql
UPDATE aws.cloudfront.key_value_stores
SET 
Comment = '{{ Comment }}'
WHERE 
name = '{{ name }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
RETURNING
ARN,
Comment,
Id,
LastModifiedTime,
Name,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_key_value_store"
    values={[
        { label: 'delete_key_value_store', value: 'delete_key_value_store' }
    ]}
>
<TabItem value="delete_key_value_store">

Specifies the key value store to delete.

```sql
DELETE FROM aws.cloudfront.key_value_stores
WHERE name = '{{ name }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
