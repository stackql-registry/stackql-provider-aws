--- 
title: invitations_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - invitations_counts
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>invitations_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invitations_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.invitations_counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_invitations_count"
    values={[
        { label: 'get_invitations_count', value: 'get_invitations_count' }
    ]}
>
<TabItem value="get_invitations_count">

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
    <td><CopyableCode code="invitations_count" /></td>
    <td><code>integer</code></td>
    <td>The number of all membership invitations sent to this Security Hub CSPM member account, not including the currently accepted invitation.</td>
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
    <td><a href="#get_invitations_count"><CopyableCode code="get_invitations_count" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Returns the count of all Security Hub CSPM membership invitations that were sent to the calling member account, not including the currently accepted invitation.</td>
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
    defaultValue="get_invitations_count"
    values={[
        { label: 'get_invitations_count', value: 'get_invitations_count' }
    ]}
>
<TabItem value="get_invitations_count">

We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Returns the count of all Security Hub CSPM membership invitations that were sent to the calling member account, not including the currently accepted invitation.

```sql
SELECT
invitations_count
FROM aws.securityhub.invitations_counts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
