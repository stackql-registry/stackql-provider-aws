--- 
title: policies_stats
hide_title: false
hide_table_of_contents: false
keywords:
  - policies_stats
  - opensearchserverless
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

Creates, updates, deletes, gets or lists a <code>policies_stats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies_stats" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.policies_stats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policies_stats"
    values={[
        { label: 'get_policies_stats', value: 'get_policies_stats' }
    ]}
>
<TabItem value="get_policies_stats">

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
    <td><CopyableCode code="access_policy_stats" /></td>
    <td><code>object</code></td>
    <td>Information about the data access policies in your account.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_policy_stats" /></td>
    <td><code>object</code></td>
    <td>Information about the lifecycle policies in your account.</td>
</tr>
<tr>
    <td><CopyableCode code="security_config_stats" /></td>
    <td><code>object</code></td>
    <td>Information about the security configurations in your account.</td>
</tr>
<tr>
    <td><CopyableCode code="security_policy_stats" /></td>
    <td><code>object</code></td>
    <td>Information about the security policies in your account.</td>
</tr>
<tr>
    <td><CopyableCode code="total_policy_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of OpenSearch Serverless security policies and configurations in your account.</td>
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
    <td><a href="#get_policies_stats"><CopyableCode code="get_policies_stats" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.</td>
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
    defaultValue="get_policies_stats"
    values={[
        { label: 'get_policies_stats', value: 'get_policies_stats' }
    ]}
>
<TabItem value="get_policies_stats">

Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.

```sql
SELECT
access_policy_stats,
lifecycle_policy_stats,
security_config_stats,
security_policy_stats,
total_policy_count
FROM aws.opensearchserverless.policies_stats
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
