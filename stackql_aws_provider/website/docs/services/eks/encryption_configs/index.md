--- 
title: encryption_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - encryption_configs
  - eks
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.encryption_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#associate_encryption_config"><CopyableCode code="associate_encryption_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-encryptionConfig"><code>encryptionConfig</code></a></td>
    <td></td>
    <td>Associates an encryption configuration to an existing cluster. Use this API to enable encryption on existing clusters that don't already have encryption enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_encryption_config"
    values={[
        { label: 'associate_encryption_config', value: 'associate_encryption_config' }
    ]}
>
<TabItem value="associate_encryption_config">

Associates an encryption configuration to an existing cluster. Use this API to enable encryption on existing clusters that don't already have encryption enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new Amazon EKS clusters.

```sql
UPDATE aws.eks.encryption_configs
SET 
encryptionConfig = '{{ encryptionConfig }}',
clientRequestToken = '{{ clientRequestToken }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND encryptionConfig = '{{ encryptionConfig }}' --required
RETURNING
update;
```
</TabItem>
</Tabs>
