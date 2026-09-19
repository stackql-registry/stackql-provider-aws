--- 
title: transfer_responsibilities
hide_title: false
hide_table_of_contents: false
keywords:
  - transfer_responsibilities
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

Creates, updates, deletes, gets or lists a <code>transfer_responsibilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transfer_responsibilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.transfer_responsibilities" /></td></tr>
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
    <td><a href="#invite_organization_to_transfer_responsibility"><CopyableCode code="invite_organization_to_transfer_responsibility" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Target"><code>Target</code></a>, <a href="#parameter-StartTimestamp"><code>StartTimestamp</code></a>, <a href="#parameter-SourceName"><code>SourceName</code></a></td>
    <td></td>
    <td>Sends an invitation to another organization's management account to designate your account with the specified responsibilities for their organization. The invitation is implemented as a Handshake whose details are in the response. You can only call this operation from the management account.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="invite_organization_to_transfer_responsibility"
    values={[
        { label: 'invite_organization_to_transfer_responsibility', value: 'invite_organization_to_transfer_responsibility' }
    ]}
>
<TabItem value="invite_organization_to_transfer_responsibility">

Sends an invitation to another organization's management account to designate your account with the specified responsibilities for their organization. The invitation is implemented as a Handshake whose details are in the response. You can only call this operation from the management account.

```sql
EXEC aws.organizations.transfer_responsibilities.invite_organization_to_transfer_responsibility 
@region='{{ region }}' --required 
@@json=
'{
"Type": "{{ Type }}", 
"Target": "{{ Target }}", 
"Notes": "{{ Notes }}", 
"StartTimestamp": "{{ StartTimestamp }}", 
"SourceName": "{{ SourceName }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
