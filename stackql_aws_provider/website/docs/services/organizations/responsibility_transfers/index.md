--- 
title: responsibility_transfers
hide_title: false
hide_table_of_contents: false
keywords:
  - responsibility_transfers
  - organizations
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

Creates, updates, deletes, gets or lists a <code>responsibility_transfers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="responsibility_transfers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.responsibility_transfers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_responsibility_transfer"
    values={[
        { label: 'describe_responsibility_transfer', value: 'describe_responsibility_transfer' }
    ]}
>
<TabItem value="describe_responsibility_transfer">

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
    <td><CopyableCode code="active_handshake_id" /></td>
    <td><code>string</code></td>
    <td>ID for the handshake of the transfer. (pattern: &lt;code&gt;^h-&#91;0-9a-z&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the transfer. (pattern: &lt;code&gt;^arn:&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;0,62&#125;:organizations::\d&#123;12&#125;:transfer\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/(billing)\/(inbound|outbound)\/rt-&#91;0-9a-z&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the transfer ends.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID for the transfer. (pattern: &lt;code&gt;^rt-&#91;0-9a-z&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name assigned to the transfer. (pattern: &lt;code&gt;^&#91; -~&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Account that allows another account external to its organization to manage the specified responsibilities for the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the transfer starts.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status for the transfer. (REQUESTED, DECLINED, CANCELED, EXPIRED, ACCEPTED, WITHDRAWN)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Account that manages the specified responsibilities for another organization.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of transfer. Currently, only BILLING is supported. (BILLING)</td>
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
    <td><a href="#describe_responsibility_transfer"><CopyableCode code="describe_responsibility_transfer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for a transfer. A transfer is an arrangement between two management accounts where one account designates the other with specified responsibilities for their organization.</td>
</tr>
<tr>
    <td><a href="#update_responsibility_transfer"><CopyableCode code="update_responsibility_transfer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Id"><code>Id</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Updates a transfer. A transfer is the arrangement between two management accounts where one account designates the other with specified responsibilities for their organization. You can update the name assigned to a transfer.</td>
</tr>
<tr>
    <td><a href="#terminate_responsibility_transfer"><CopyableCode code="terminate_responsibility_transfer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Ends a transfer. A transfer is an arrangement between two management accounts where one account designates the other with specified responsibilities for their organization.</td>
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
    defaultValue="describe_responsibility_transfer"
    values={[
        { label: 'describe_responsibility_transfer', value: 'describe_responsibility_transfer' }
    ]}
>
<TabItem value="describe_responsibility_transfer">

Returns details for a transfer. A transfer is an arrangement between two management accounts where one account designates the other with specified responsibilities for their organization.

```sql
SELECT
active_handshake_id,
arn,
end_timestamp,
id,
name,
source,
start_timestamp,
status,
target,
type
FROM aws.organizations.responsibility_transfers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_responsibility_transfer"
    values={[
        { label: 'update_responsibility_transfer', value: 'update_responsibility_transfer' }
    ]}
>
<TabItem value="update_responsibility_transfer">

Updates a transfer. A transfer is the arrangement between two management accounts where one account designates the other with specified responsibilities for their organization. You can update the name assigned to a transfer.

```sql
UPDATE aws.organizations.responsibility_transfers
SET 
Id = '{{ Id }}',
Name = '{{ Name }}'
WHERE 
region = '{{ region }}' --required
AND Id = '{{ Id }}' --required
AND Name = '{{ Name }}' --required
RETURNING
responsibility_transfer;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_responsibility_transfer"
    values={[
        { label: 'terminate_responsibility_transfer', value: 'terminate_responsibility_transfer' }
    ]}
>
<TabItem value="terminate_responsibility_transfer">

Ends a transfer. A transfer is an arrangement between two management accounts where one account designates the other with specified responsibilities for their organization.

```sql
DELETE FROM aws.organizations.responsibility_transfers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
