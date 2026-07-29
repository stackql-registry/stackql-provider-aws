--- 
title: encryption_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - encryption_keys
  - inspector2
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

Creates, updates, deletes, gets or lists an <code>encryption_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="encryption_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.encryption_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_encryption_key"
    values={[
        { label: 'get_encryption_key', value: 'get_encryption_key' }
    ]}
>
<TabItem value="get_encryption_key">

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
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>A kms key ID. (pattern: &lt;code&gt;arn:aws(-(us-gov|cn))?:kms:(&#91;a-z0-9&#93;&#91;-.a-z0-9&#93;&#123;0,62&#125;)?:&#91;0-9&#93;&#123;12&#125;?:key/((&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;)|(mrk-&#91;0-9a-zA-Z&#93;&#123;32&#125;))&lt;/code&gt;)</td>
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
    <td><a href="#get_encryption_key"><CopyableCode code="get_encryption_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scanType"><code>scanType</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an encryption key.</td>
</tr>
<tr>
    <td><a href="#update_encryption_key"><CopyableCode code="update_encryption_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-kmsKeyId"><code>kmsKeyId</code></a>, <a href="#parameter-scanType"><code>scanType</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a></td>
    <td></td>
    <td>Updates an encryption key. A ResourceNotFoundException means that an Amazon Web Services owned key is being used for encryption.</td>
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
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type the key encrypts.</td>
</tr>
<tr id="parameter-scanType">
    <td><CopyableCode code="scanType" /></td>
    <td><code>string</code></td>
    <td>The scan type the key encrypts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_encryption_key"
    values={[
        { label: 'get_encryption_key', value: 'get_encryption_key' }
    ]}
>
<TabItem value="get_encryption_key">

Gets an encryption key.

```sql
SELECT
kms_key_id
FROM aws.inspector2.encryption_keys
WHERE scanType = '{{ scanType }}' -- required
AND resourceType = '{{ resourceType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_encryption_key"
    values={[
        { label: 'update_encryption_key', value: 'update_encryption_key' }
    ]}
>
<TabItem value="update_encryption_key">

Updates an encryption key. A ResourceNotFoundException means that an Amazon Web Services owned key is being used for encryption.

```sql
UPDATE aws.inspector2.encryption_keys
SET 
kmsKeyId = '{{ kmsKeyId }}',
scanType = '{{ scanType }}',
resourceType = '{{ resourceType }}'
WHERE 
region = '{{ region }}' --required
AND kmsKeyId = '{{ kmsKeyId }}' --required
AND scanType = '{{ scanType }}' --required
AND resourceType = '{{ resourceType }}' --required;
```
</TabItem>
</Tabs>
