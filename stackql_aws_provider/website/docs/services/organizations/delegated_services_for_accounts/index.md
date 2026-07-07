--- 
title: delegated_services_for_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - delegated_services_for_accounts
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

Creates, updates, deletes, gets or lists a <code>delegated_services_for_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delegated_services_for_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.delegated_services_for_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_delegated_services_for_account"
    values={[
        { label: 'list_delegated_services_for_account', value: 'list_delegated_services_for_account' }
    ]}
>
<TabItem value="list_delegated_services_for_account">

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
    <td><CopyableCode code="DelegationEnabledDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the account became a delegated administrator for this service.</td>
</tr>
<tr>
    <td><CopyableCode code="ServicePrincipal" /></td>
    <td><code>string</code></td>
    <td>The name of an Amazon Web Services service that can request an operation for the specified service. This is typically in the form of a URL, such as: servicename.amazonaws.com. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_delegated_services_for_account"><CopyableCode code="list_delegated_services_for_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the Amazon Web Services services for which the specified account is a delegated administrator. You can only call this operation from the management account or a member account that is a delegated administrator.</td>
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
    defaultValue="list_delegated_services_for_account"
    values={[
        { label: 'list_delegated_services_for_account', value: 'list_delegated_services_for_account' }
    ]}
>
<TabItem value="list_delegated_services_for_account">

List the Amazon Web Services services for which the specified account is a delegated administrator. You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
DelegationEnabledDate,
ServicePrincipal
FROM aws.organizations.delegated_services_for_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
