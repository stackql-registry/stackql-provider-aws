--- 
title: virtual_machines
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_machines
  - backup_gateway
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

Creates, updates, deletes, gets or lists a <code>virtual_machines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_machines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup_gateway.virtual_machines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_virtual_machine"
    values={[
        { label: 'get_virtual_machine', value: 'get_virtual_machine' },
        { label: 'list_virtual_machines', value: 'list_virtual_machines' }
    ]}
>
<TabItem value="get_virtual_machine">

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
    <td><CopyableCode code="HostName" /></td>
    <td><code>string</code></td>
    <td>The host name of the virtual machine. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HypervisorId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual machine's hypervisor.</td>
</tr>
<tr>
    <td><CopyableCode code="LastBackupDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date a virtual machine was backed up, in Unix format and UTC time.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual machine. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path of the virtual machine. (pattern: &lt;code&gt;&#91;^\x00&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the virtual machine. For example, arn:aws:backup-gateway:us-west-1:0000000000000:vm/vm-0000ABCDEFGIJKL. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):backup-gateway(:&#91;a-zA-Z-0-9&#93;+)&#123;3&#125;\/&#91;a-zA-Z-0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VmwareTags" /></td>
    <td><code>array</code></td>
    <td>These are the details of the VMware tags associated with the specified virtual machine.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_virtual_machines">

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
    <td><CopyableCode code="HostName" /></td>
    <td><code>string</code></td>
    <td>The host name of the virtual machine. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HypervisorId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual machine's hypervisor.</td>
</tr>
<tr>
    <td><CopyableCode code="LastBackupDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date a virtual machine was backed up, in Unix format and UTC time.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual machine. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path of the virtual machine. (pattern: &lt;code&gt;&#91;^\x00&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the virtual machine. For example, arn:aws:backup-gateway:us-west-1:0000000000000:vm/vm-0000ABCDEFGIJKL. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):backup-gateway(:&#91;a-zA-Z-0-9&#93;+)&#123;3&#125;\/&#91;a-zA-Z-0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_virtual_machine"><CopyableCode code="get_virtual_machine" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>By providing the ARN (Amazon Resource Name), this API returns the virtual machine.</td>
</tr>
<tr>
    <td><a href="#list_virtual_machines"><CopyableCode code="list_virtual_machines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your virtual machines.</td>
</tr>
<tr>
    <td><a href="#start_virtual_machines_metadata_sync"><CopyableCode code="start_virtual_machines_metadata_sync" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HypervisorArn"><code>HypervisorArn</code></a></td>
    <td></td>
    <td>This action sends a request to sync metadata across the specified virtual machines.</td>
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
    defaultValue="get_virtual_machine"
    values={[
        { label: 'get_virtual_machine', value: 'get_virtual_machine' },
        { label: 'list_virtual_machines', value: 'list_virtual_machines' }
    ]}
>
<TabItem value="get_virtual_machine">

By providing the ARN (Amazon Resource Name), this API returns the virtual machine.

```sql
SELECT
HostName,
HypervisorId,
LastBackupDate,
Name,
Path,
ResourceArn,
VmwareTags
FROM aws.backup_gateway.virtual_machines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_virtual_machines">

Lists your virtual machines.

```sql
SELECT
HostName,
HypervisorId,
LastBackupDate,
Name,
Path,
ResourceArn
FROM aws.backup_gateway.virtual_machines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_virtual_machines_metadata_sync"
    values={[
        { label: 'start_virtual_machines_metadata_sync', value: 'start_virtual_machines_metadata_sync' }
    ]}
>
<TabItem value="start_virtual_machines_metadata_sync">

This action sends a request to sync metadata across the specified virtual machines.

```sql
EXEC aws.backup_gateway.virtual_machines.start_virtual_machines_metadata_sync 
@region='{{ region }}' --required 
@@json=
'{
"HypervisorArn": "{{ HypervisorArn }}"
}'
;
```
</TabItem>
</Tabs>
