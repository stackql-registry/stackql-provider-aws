--- 
title: token_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - token_vaults
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>token_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="token_vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.token_vaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_token_vault"
    values={[
        { label: 'get_token_vault', value: 'get_token_vault' }
    ]}
>
<TabItem value="get_token_vault">

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
    <td><CopyableCode code="kmsConfiguration" /></td>
    <td><code>object</code></td>
    <td>The KMS configuration for the token vault.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the token vault was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="tokenVaultId" /></td>
    <td><code>string</code></td>
    <td>The ID of the token vault. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_token_vault"><CopyableCode code="get_token_vault" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a token vault.</td>
</tr>
<tr>
    <td><a href="#set_token_vault_cmk"><CopyableCode code="set_token_vault_cmk" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-kmsConfiguration"><code>kmsConfiguration</code></a></td>
    <td></td>
    <td>Sets the customer master key (CMK) for a token vault.</td>
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
    defaultValue="get_token_vault"
    values={[
        { label: 'get_token_vault', value: 'get_token_vault' }
    ]}
>
<TabItem value="get_token_vault">

Retrieves information about a token vault.

```sql
SELECT
kmsConfiguration,
lastModifiedDate,
tokenVaultId
FROM aws.bedrock_agentcore_control.token_vaults
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_token_vault_cmk"
    values={[
        { label: 'set_token_vault_cmk', value: 'set_token_vault_cmk' }
    ]}
>
<TabItem value="set_token_vault_cmk">

Sets the customer master key (CMK) for a token vault.

```sql
UPDATE aws.bedrock_agentcore_control.token_vaults
SET 
tokenVaultId = '{{ tokenVaultId }}',
kmsConfiguration = '{{ kmsConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND kmsConfiguration = '{{ kmsConfiguration }}' --required
RETURNING
kmsConfiguration,
lastModifiedDate,
tokenVaultId;
```
</TabItem>
</Tabs>
