--- 
title: public_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - public_keys
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

Creates, updates, deletes, gets or lists a <code>public_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.public_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_public_key"
    values={[
        { label: 'get_public_key', value: 'get_public_key' },
        { label: 'list_public_keys', value: 'list_public_keys' }
    ]}
>
<TabItem value="get_public_key">

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
    <td><CopyableCode code="created_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the public key was uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the public key.</td>
</tr>
<tr>
    <td><CopyableCode code="public_key_config" /></td>
    <td><code>string</code></td>
    <td>Configuration information about a public key that you can use with signed URLs and signed cookies, or with field-level encryption.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_public_keys">

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
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>A list of public keys.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of public keys you want in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If there are more elements to be listed, this element is present and contains the value that you can use for the Marker request parameter to continue listing your public keys where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of public keys in the list.</td>
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
    <td><a href="#get_public_key"><CopyableCode code="get_public_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a public key.</td>
</tr>
<tr>
    <td><a href="#list_public_keys"><CopyableCode code="list_public_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>List all public keys that have been added to CloudFront for this account.</td>
</tr>
<tr>
    <td><a href="#create_public_key"><CopyableCode code="create_public_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PublicKeyConfig"><code>PublicKeyConfig</code></a></td>
    <td></td>
    <td>Uploads a public key to CloudFront that you can use with signed URLs and signed cookies, or with field-level encryption.</td>
</tr>
<tr>
    <td><a href="#update_public_key"><CopyableCode code="update_public_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PublicKeyConfig"><code>PublicKeyConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Update public key information. Note that the only value you can change is the comment.</td>
</tr>
<tr>
    <td><a href="#delete_public_key"><CopyableCode code="delete_public_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Remove a public key you previously added to CloudFront.</td>
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
    <td>The ID of the public key you want to remove from CloudFront.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The value of the ETag header that you received when retrieving the public key identity to delete. For example: E2QWRUHAPOMQZL.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the Marker to the value of the NextMarker from the current page's response (which is also the ID of the last public key on that page).</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of public keys you want in the response body.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_public_key"
    values={[
        { label: 'get_public_key', value: 'get_public_key' },
        { label: 'list_public_keys', value: 'list_public_keys' }
    ]}
>
<TabItem value="get_public_key">

Gets a public key.

```sql
SELECT
created_time,
id,
public_key_config
FROM aws.cloudfront.public_keys
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_public_keys">

List all public keys that have been added to CloudFront for this account.

```sql
SELECT
items,
max_items,
next_marker,
quantity
FROM aws.cloudfront.public_keys
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_public_key"
    values={[
        { label: 'create_public_key', value: 'create_public_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_public_key">

Uploads a public key to CloudFront that you can use with signed URLs and signed cookies, or with field-level encryption.

```sql
INSERT INTO aws.cloudfront.public_keys (
PublicKeyConfig,
region
)
SELECT 
'{{ PublicKeyConfig }}' /* required */,
'{{ region }}'
RETURNING
created_time,
id,
public_key_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: public_keys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the public_keys resource.
    - name: PublicKeyConfig
      description: |
        Configuration information about a public key that you can use with signed URLs and signed cookies, or with field-level encryption. CloudFront supports signed URLs and signed cookies with RSA 2048 or ECDSA 256 key signatures. Field-level encryption is only compatible with RSA 2048 key signatures.
      value:
        CallerReference: "{{ CallerReference }}"
        Name: "{{ Name }}"
        EncodedKey: "{{ EncodedKey }}"
        Comment: "{{ Comment }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_public_key"
    values={[
        { label: 'update_public_key', value: 'update_public_key' }
    ]}
>
<TabItem value="update_public_key">

Update public key information. Note that the only value you can change is the comment.

```sql
UPDATE aws.cloudfront.public_keys
SET 
PublicKeyConfig = '{{ PublicKeyConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND PublicKeyConfig = '{{ PublicKeyConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
created_time,
id,
public_key_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_public_key"
    values={[
        { label: 'delete_public_key', value: 'delete_public_key' }
    ]}
>
<TabItem value="delete_public_key">

Remove a public key you previously added to CloudFront.

```sql
DELETE FROM aws.cloudfront.public_keys
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
