--- 
title: instance_tpm_ek_pubs
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_tpm_ek_pubs
  - ec2
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

Creates, updates, deletes, gets or lists an <code>instance_tpm_ek_pubs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_tpm_ek_pubs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_tpm_ek_pubs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_tpm_ek_pub"
    values={[
        { label: 'get_instance_tpm_ek_pub', value: 'get_instance_tpm_ek_pub' }
    ]}
>
<TabItem value="get_instance_tpm_ek_pub">

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
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyFormat" /></td>
    <td><code>string</code></td>
    <td>The public endorsement key format.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyType" /></td>
    <td><code>string</code></td>
    <td>The public endorsement key type.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyValue" /></td>
    <td><code>string</code></td>
    <td>The public endorsement key material.</td>
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
    <td><a href="#get_instance_tpm_ek_pub"><CopyableCode code="get_instance_tpm_ek_pub" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-KeyType"><code>KeyType</code></a>, <a href="#parameter-KeyFormat"><code>KeyFormat</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets the public endorsement key associated with the Nitro Trusted Platform Module (NitroTPM) for the specified instance.</td>
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
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance for which to get the public endorsement key.</td>
</tr>
<tr id="parameter-KeyFormat">
    <td><CopyableCode code="KeyFormat" /></td>
    <td><code>string</code></td>
    <td>The required public endorsement key format. Specify der for a DER-encoded public key that is compatible with OpenSSL. Specify tpmt for a TPM 2.0 format that is compatible with tpm2-tools. The returned key is base64 encoded.</td>
</tr>
<tr id="parameter-KeyType">
    <td><CopyableCode code="KeyType" /></td>
    <td><code>string</code></td>
    <td>The required public endorsement key type.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Specify this parameter to verify whether the request will succeed, without actually making the request. If the request will succeed, the response is DryRunOperation. Otherwise, the response is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_instance_tpm_ek_pub"
    values={[
        { label: 'get_instance_tpm_ek_pub', value: 'get_instance_tpm_ek_pub' }
    ]}
>
<TabItem value="get_instance_tpm_ek_pub">

Gets the public endorsement key associated with the Nitro Trusted Platform Module (NitroTPM) for the specified instance.

```sql
SELECT
InstanceId,
KeyFormat,
KeyType,
KeyValue
FROM aws.ec2.instance_tpm_ek_pubs
WHERE InstanceId = '{{ InstanceId }}' -- required
AND KeyType = '{{ KeyType }}' -- required
AND KeyFormat = '{{ KeyFormat }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
