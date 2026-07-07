--- 
title: admin_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - admin_scopes
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

Creates, updates, deletes, gets or lists an <code>admin_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="admin_scopes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.admin_scopes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_admin_scope"
    values={[
        { label: 'get_admin_scope', value: 'get_admin_scope' }
    ]}
>
<TabItem value="get_admin_scope">

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
    <td><CopyableCode code="AdminScope" /></td>
    <td><code>object</code></td>
    <td>Contains details about the administrative scope of the requested account.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the request to onboard a member account as an Firewall Manager administrator. ONBOARDING - The account is onboarding to Firewall Manager as an administrator. ONBOARDING_COMPLETE - Firewall Manager The account is onboarded to Firewall Manager as an administrator, and can perform actions on the resources defined in their AdminScope. OFFBOARDING - The account is being removed as an Firewall Manager administrator. OFFBOARDING_COMPLETE - The account has been removed as an Firewall Manager administrator. (ONBOARDING, ONBOARDING_COMPLETE, OFFBOARDING, OFFBOARDING_COMPLETE)</td>
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
    <td><a href="#get_admin_scope"><CopyableCode code="get_admin_scope" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified account's administrative scope. The administrative scope defines the resources that an Firewall Manager administrator can manage.</td>
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
    defaultValue="get_admin_scope"
    values={[
        { label: 'get_admin_scope', value: 'get_admin_scope' }
    ]}
>
<TabItem value="get_admin_scope">

Returns information about the specified account's administrative scope. The administrative scope defines the resources that an Firewall Manager administrator can manage.

```sql
SELECT
AdminScope,
Status
FROM aws.fms.admin_scopes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
