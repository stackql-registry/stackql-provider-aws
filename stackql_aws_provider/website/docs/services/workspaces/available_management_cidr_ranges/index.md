--- 
title: available_management_cidr_ranges
hide_title: false
hide_table_of_contents: false
keywords:
  - available_management_cidr_ranges
  - workspaces
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

Creates, updates, deletes, gets or lists an <code>available_management_cidr_ranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="available_management_cidr_ranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.available_management_cidr_ranges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_available_management_cidr_ranges"
    values={[
        { label: 'list_available_management_cidr_ranges', value: 'list_available_management_cidr_ranges' }
    ]}
>
<TabItem value="list_available_management_cidr_ranges">

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
    <td><CopyableCode code="management_cidr_range" /></td>
    <td><code>string</code></td>
    <td>The list of available IP address ranges, specified as IPv4 CIDR blocks.</td>
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
    <td><a href="#list_available_management_cidr_ranges"><CopyableCode code="list_available_management_cidr_ranges" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an AccessDeniedException error. The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</td>
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
    defaultValue="list_available_management_cidr_ranges"
    values={[
        { label: 'list_available_management_cidr_ranges', value: 'list_available_management_cidr_ranges' }
    ]}
>
<TabItem value="list_available_management_cidr_ranges">

Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an AccessDeniedException error. The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.

```sql
SELECT
management_cidr_range
FROM aws.workspaces.available_management_cidr_ranges
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
