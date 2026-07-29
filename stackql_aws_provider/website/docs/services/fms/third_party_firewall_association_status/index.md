--- 
title: third_party_firewall_association_status
hide_title: false
hide_table_of_contents: false
keywords:
  - third_party_firewall_association_status
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

Creates, updates, deletes, gets or lists a <code>third_party_firewall_association_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="third_party_firewall_association_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.third_party_firewall_association_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_third_party_firewall_association_status"
    values={[
        { label: 'get_third_party_firewall_association_status', value: 'get_third_party_firewall_association_status' }
    ]}
>
<TabItem value="get_third_party_firewall_association_status">

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
    <td><CopyableCode code="marketplace_onboarding_status" /></td>
    <td><code>string</code></td>
    <td>The status for subscribing to the third-party firewall vendor in the Amazon Web Services Marketplace. NO_SUBSCRIPTION - The Firewall Manager policy administrator isn't subscribed to the third-party firewall service in the Amazon Web Services Marketplace. NOT_COMPLETE - The Firewall Manager policy administrator is in the process of subscribing to the third-party firewall service in the Amazon Web Services Marketplace, but doesn't yet have an active subscription. COMPLETE - The Firewall Manager policy administrator has an active subscription to the third-party firewall service in the Amazon Web Services Marketplace. (NO_SUBSCRIPTION, NOT_COMPLETE, COMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="third_party_firewall_status" /></td>
    <td><code>string</code></td>
    <td>The current status for setting a Firewall Manager policy administrators account as an administrator of the third-party firewall tenant. ONBOARDING - The Firewall Manager policy administrator is being designated as a tenant administrator. ONBOARD_COMPLETE - The Firewall Manager policy administrator is designated as a tenant administrator. OFFBOARDING - The Firewall Manager policy administrator is being removed as a tenant administrator. OFFBOARD_COMPLETE - The Firewall Manager policy administrator has been removed as a tenant administrator. NOT_EXIST - The Firewall Manager policy administrator doesn't exist as a tenant administrator. (ONBOARDING, ONBOARD_COMPLETE, OFFBOARDING, OFFBOARD_COMPLETE, NOT_EXIST)</td>
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
    <td><a href="#get_third_party_firewall_association_status"><CopyableCode code="get_third_party_firewall_association_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.</td>
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
    defaultValue="get_third_party_firewall_association_status"
    values={[
        { label: 'get_third_party_firewall_association_status', value: 'get_third_party_firewall_association_status' }
    ]}
>
<TabItem value="get_third_party_firewall_association_status">

The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.

```sql
SELECT
marketplace_onboarding_status,
third_party_firewall_status
FROM aws.fms.third_party_firewall_association_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
