--- 
title: field_level_encryption_profile_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - field_level_encryption_profile_configs
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

Creates, updates, deletes, gets or lists a <code>field_level_encryption_profile_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="field_level_encryption_profile_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.field_level_encryption_profile_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_field_level_encryption_profile_config"
    values={[
        { label: 'get_field_level_encryption_profile_config', value: 'get_field_level_encryption_profile_config' }
    ]}
>
<TabItem value="get_field_level_encryption_profile_config">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>A unique number that ensures that the request can't be replayed.</td>
</tr>
<tr>
    <td><CopyableCode code="Comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment for the field-level encryption profile. The comment cannot be longer than 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionEntities" /></td>
    <td><code>string</code></td>
    <td>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Profile name for the field-level encryption profile.</td>
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
    <td><a href="#get_field_level_encryption_profile_config"><CopyableCode code="get_field_level_encryption_profile_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the field-level encryption profile configuration information.</td>
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
    <td>Get the ID for the field-level encryption profile configuration information.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_field_level_encryption_profile_config"
    values={[
        { label: 'get_field_level_encryption_profile_config', value: 'get_field_level_encryption_profile_config' }
    ]}
>
<TabItem value="get_field_level_encryption_profile_config">

Get the field-level encryption profile configuration information.

```sql
SELECT
CallerReference,
Comment,
EncryptionEntities,
Name
FROM aws.cloudfront.field_level_encryption_profile_configs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
