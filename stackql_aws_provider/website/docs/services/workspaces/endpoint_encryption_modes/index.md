--- 
title: endpoint_encryption_modes
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_encryption_modes
  - workspaces
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

Creates, updates, deletes, gets or lists an <code>endpoint_encryption_modes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_encryption_modes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.endpoint_encryption_modes" /></td></tr>
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
    <td><a href="#modify_endpoint_encryption_mode"><CopyableCode code="modify_endpoint_encryption_mode" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-EndpointEncryptionMode"><code>EndpointEncryptionMode</code></a></td>
    <td></td>
    <td>Modifies the endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="modify_endpoint_encryption_mode"
    values={[
        { label: 'modify_endpoint_encryption_mode', value: 'modify_endpoint_encryption_mode' }
    ]}
>
<TabItem value="modify_endpoint_encryption_mode">

Modifies the endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.

```sql
UPDATE aws.workspaces.endpoint_encryption_modes
SET 
DirectoryId = '{{ DirectoryId }}',
EndpointEncryptionMode = '{{ EndpointEncryptionMode }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
AND EndpointEncryptionMode = '{{ EndpointEncryptionMode }}' --required;
```
</TabItem>
</Tabs>
