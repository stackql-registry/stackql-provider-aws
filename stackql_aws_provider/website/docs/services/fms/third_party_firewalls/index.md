--- 
title: third_party_firewalls
hide_title: false
hide_table_of_contents: false
keywords:
  - third_party_firewalls
  - fms
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

Creates, updates, deletes, gets or lists a <code>third_party_firewalls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="third_party_firewalls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.third_party_firewalls" /></td></tr>
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
    <td><a href="#associate_third_party_firewall"><CopyableCode code="associate_third_party_firewall" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ThirdPartyFirewall"><code>ThirdPartyFirewall</code></a></td>
    <td></td>
    <td>Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.</td>
</tr>
<tr>
    <td><a href="#disassociate_third_party_firewall"><CopyableCode code="disassociate_third_party_firewall" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ThirdPartyFirewall"><code>ThirdPartyFirewall</code></a></td>
    <td></td>
    <td>Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call DisassociateThirdPartyFirewall, the third-party firewall vendor deletes all of the firewalls that are associated with the account.</td>
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
    defaultValue="associate_third_party_firewall"
    values={[
        { label: 'associate_third_party_firewall', value: 'associate_third_party_firewall' }
    ]}
>
<TabItem value="associate_third_party_firewall">

Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.

```sql
UPDATE aws.fms.third_party_firewalls
SET 
ThirdPartyFirewall = '{{ ThirdPartyFirewall }}'
WHERE 
region = '{{ region }}' --required
AND ThirdPartyFirewall = '{{ ThirdPartyFirewall }}' --required
RETURNING
ThirdPartyFirewallStatus;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_third_party_firewall"
    values={[
        { label: 'disassociate_third_party_firewall', value: 'disassociate_third_party_firewall' }
    ]}
>
<TabItem value="disassociate_third_party_firewall">

Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call DisassociateThirdPartyFirewall, the third-party firewall vendor deletes all of the firewalls that are associated with the account.

```sql
EXEC aws.fms.third_party_firewalls.disassociate_third_party_firewall 
@region='{{ region }}' --required 
@@json=
'{
"ThirdPartyFirewall": "{{ ThirdPartyFirewall }}"
}'
;
```
</TabItem>
</Tabs>
