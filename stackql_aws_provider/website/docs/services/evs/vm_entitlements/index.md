--- 
title: vm_entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - vm_entitlements
  - evs
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

Creates, updates, deletes, gets or lists a <code>vm_entitlements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vm_entitlements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.evs.vm_entitlements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_vm_entitlements"
    values={[
        { label: 'list_vm_entitlements', value: 'list_vm_entitlements' }
    ]}
>
<TabItem value="list_vm_entitlements">

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
    <td><CopyableCode code="connectorId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the connector associated with the entitlement. (pattern: &lt;code&gt;(cnctr-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the environment. (pattern: &lt;code&gt;(env-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorDetail" /></td>
    <td><code>object</code></td>
    <td>The error details associated with the entitlement, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSyncedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the entitlement was last synced.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the entitlement started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the entitlement. (CREATING, CREATED, DELETED, AT_RISK, ENTITLEMENT_REMOVED, CREATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="stoppedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the entitlement stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of entitlement. (WINDOWS_SERVER)</td>
</tr>
<tr>
    <td><CopyableCode code="vmId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the virtual machine. (pattern: &lt;code&gt;vm-&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vmName" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual machine.</td>
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
    <td><a href="#list_vm_entitlements"><CopyableCode code="list_vm_entitlements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Windows Server License entitlements for virtual machines in an Amazon EVS environment. Returns existing entitlements for virtual machines associated with the specified environment and connector.</td>
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
    defaultValue="list_vm_entitlements"
    values={[
        { label: 'list_vm_entitlements', value: 'list_vm_entitlements' }
    ]}
>
<TabItem value="list_vm_entitlements">

Lists the Windows Server License entitlements for virtual machines in an Amazon EVS environment. Returns existing entitlements for virtual machines associated with the specified environment and connector.

```sql
SELECT
connectorId,
environmentId,
errorDetail,
lastSyncedAt,
startedAt,
status,
stoppedAt,
type_,
vmId,
vmName
FROM aws.evs.vm_entitlements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
