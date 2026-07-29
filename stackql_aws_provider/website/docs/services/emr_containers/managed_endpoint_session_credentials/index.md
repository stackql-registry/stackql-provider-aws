--- 
title: managed_endpoint_session_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_endpoint_session_credentials
  - emr_containers
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

Creates, updates, deletes, gets or lists a <code>managed_endpoint_session_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_endpoint_session_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_containers.managed_endpoint_session_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_endpoint_session_credentials"
    values={[
        { label: 'get_managed_endpoint_session_credentials', value: 'get_managed_endpoint_session_credentials' }
    ]}
>
<TabItem value="get_managed_endpoint_session_credentials">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the session token returned. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>object</code></td>
    <td>The structure containing the session credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the session token will expire.</td>
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
    <td><a href="#get_managed_endpoint_session_credentials"><CopyableCode code="get_managed_endpoint_session_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-endpoint_id"><code>endpoint_id</code></a>, <a href="#parameter-virtual_cluster_id"><code>virtual_cluster_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generate a session token to connect to a managed endpoint.</td>
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
<tr id="parameter-endpoint_id">
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ARN of the managed endpoint for which the request is submitted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-virtual_cluster_id">
    <td><CopyableCode code="virtual_cluster_id" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Virtual Cluster which the Managed Endpoint belongs to.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_managed_endpoint_session_credentials"
    values={[
        { label: 'get_managed_endpoint_session_credentials', value: 'get_managed_endpoint_session_credentials' }
    ]}
>
<TabItem value="get_managed_endpoint_session_credentials">

Generate a session token to connect to a managed endpoint.

```sql
SELECT
id,
credentials,
expires_at
FROM aws.emr_containers.managed_endpoint_session_credentials
WHERE endpoint_id = '{{ endpoint_id }}' -- required
AND virtual_cluster_id = '{{ virtual_cluster_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
