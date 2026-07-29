--- 
title: mailbox_details
hide_title: false
hide_table_of_contents: false
keywords:
  - mailbox_details
  - workmail
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

Creates, updates, deletes, gets or lists a <code>mailbox_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mailbox_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.mailbox_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mailbox_details"
    values={[
        { label: 'get_mailbox_details', value: 'get_mailbox_details' }
    ]}
>
<TabItem value="get_mailbox_details">

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
    <td><CopyableCode code="mailbox_quota" /></td>
    <td><code>integer</code></td>
    <td>The maximum allowed mailbox size, in MB, for the specified user.</td>
</tr>
<tr>
    <td><CopyableCode code="mailbox_size" /></td>
    <td><code>number (double)</code></td>
    <td>The current mailbox size, in MB, for the specified user.</td>
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
    <td><a href="#get_mailbox_details"><CopyableCode code="get_mailbox_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Requests a user's mailbox details for a specified organization and user.</td>
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
    defaultValue="get_mailbox_details"
    values={[
        { label: 'get_mailbox_details', value: 'get_mailbox_details' }
    ]}
>
<TabItem value="get_mailbox_details">

Requests a user's mailbox details for a specified organization and user.

```sql
SELECT
mailbox_quota,
mailbox_size
FROM aws.workmail.mailbox_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
