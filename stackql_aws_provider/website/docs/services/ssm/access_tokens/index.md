--- 
title: access_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - access_tokens
  - ssm
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

Creates, updates, deletes, gets or lists an <code>access_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.access_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_token"
    values={[
        { label: 'get_access_token', value: 'get_access_token' }
    ]}
>
<TabItem value="get_access_token">

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
    <td><CopyableCode code="AccessRequestStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the access request. (Approved, Rejected, Revoked, Expired, Pending)</td>
</tr>
<tr>
    <td><CopyableCode code="Credentials" /></td>
    <td><code>object</code></td>
    <td>The temporary security credentials which can be used to start just-in-time node access sessions.</td>
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
    <td><a href="#get_access_token"><CopyableCode code="get_access_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a credentials set to be used with just-in-time node access.</td>
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
    defaultValue="get_access_token"
    values={[
        { label: 'get_access_token', value: 'get_access_token' }
    ]}
>
<TabItem value="get_access_token">

Returns a credentials set to be used with just-in-time node access.

```sql
SELECT
AccessRequestStatus,
Credentials
FROM aws.ssm.access_tokens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
