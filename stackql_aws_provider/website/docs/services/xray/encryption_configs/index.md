--- 
title: encryption_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - encryption_configs
  - xray
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

Creates, updates, deletes, gets or lists an <code>encryption_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="encryption_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.encryption_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_encryption_config"
    values={[
        { label: 'get_encryption_config', value: 'get_encryption_config' }
    ]}
>
<TabItem value="get_encryption_config">

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
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used for encryption, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The encryption status. While the status is UPDATING, X-Ray may encrypt data with a combination of the new and old settings. (UPDATING, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption. Set to KMS for encryption with KMS keys. Set to NONE for default encryption. (NONE, KMS)</td>
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
    <td><a href="#get_encryption_config"><CopyableCode code="get_encryption_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current encryption configuration for X-Ray data.</td>
</tr>
<tr>
    <td><a href="#put_encryption_config"><CopyableCode code="put_encryption_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Type"><code>Type</code></a></td>
    <td></td>
    <td>Updates the encryption configuration for X-Ray data.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_encryption_config"
    values={[
        { label: 'get_encryption_config', value: 'get_encryption_config' }
    ]}
>
<TabItem value="get_encryption_config">

Retrieves the current encryption configuration for X-Ray data.

```sql
SELECT
key_id,
status,
type
FROM aws.xray.encryption_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_encryption_config"
    values={[
        { label: 'put_encryption_config', value: 'put_encryption_config' }
    ]}
>
<TabItem value="put_encryption_config">

Updates the encryption configuration for X-Ray data.

```sql
REPLACE aws.xray.encryption_configs
SET 
KeyId = '{{ KeyId }}',
Type = '{{ Type }}'
WHERE 
region = '{{ region }}' --required
AND Type = '{{ Type }}' --required
RETURNING
encryption_config;
```
</TabItem>
</Tabs>
