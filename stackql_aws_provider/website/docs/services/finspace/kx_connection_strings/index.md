--- 
title: kx_connection_strings
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_connection_strings
  - finspace
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

Creates, updates, deletes, gets or lists a <code>kx_connection_strings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_connection_strings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_connection_strings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kx_connection_string"
    values={[
        { label: 'get_kx_connection_string', value: 'get_kx_connection_string' }
    ]}
>
<TabItem value="get_kx_connection_string">

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
    <td><CopyableCode code="signedConnectionString" /></td>
    <td><code>string</code></td>
    <td>The signed connection string that you can use to connect to clusters. (pattern: &lt;code&gt;^(:|:tcps:\/\/)&#91;a-zA-Z0-9-\.\_&#93;+:\d+:&#91;a-zA-Z0-9-\.\_&#93;+:\S+$&lt;/code&gt;)</td>
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
    <td><a href="#get_kx_connection_string"><CopyableCode code="get_kx_connection_string" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-userArn"><code>userArn</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-clusterName"><code>clusterName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a connection string for a user to connect to a kdb cluster. You must call this API using the same role that you have defined while creating a user.</td>
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
<tr id="parameter-clusterName">
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>A name of the kdb cluster.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-userArn">
    <td><CopyableCode code="userArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kx_connection_string"
    values={[
        { label: 'get_kx_connection_string', value: 'get_kx_connection_string' }
    ]}
>
<TabItem value="get_kx_connection_string">

Retrieves a connection string for a user to connect to a kdb cluster. You must call this API using the same role that you have defined while creating a user.

```sql
SELECT
signedConnectionString
FROM aws.finspace.kx_connection_strings
WHERE userArn = '{{ userArn }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND clusterName = '{{ clusterName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
