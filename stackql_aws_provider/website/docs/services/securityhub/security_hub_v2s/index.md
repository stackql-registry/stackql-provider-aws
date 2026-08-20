--- 
title: security_hub_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - security_hub_v2s
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

Creates, updates, deletes, gets or lists a <code>security_hub_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_hub_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.security_hub_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_security_hub_v2"
    values={[
        { label: 'describe_security_hub_v2', value: 'describe_security_hub_v2' }
    ]}
>
<TabItem value="describe_security_hub_v2">

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
    <td><CopyableCode code="features" /></td>
    <td><code>object</code></td>
    <td>A map of opt-in features and their current status and metadata for the account in the current Region.</td>
</tr>
<tr>
    <td><CopyableCode code="hub_v2_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service resource. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when the service was enabled in the account.</td>
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
    <td><a href="#describe_security_hub_v2"><CopyableCode code="describe_security_hub_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about the service resource in your account.</td>
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
    defaultValue="describe_security_hub_v2"
    values={[
        { label: 'describe_security_hub_v2', value: 'describe_security_hub_v2' }
    ]}
>
<TabItem value="describe_security_hub_v2">

Returns details about the service resource in your account.

```sql
SELECT
features,
hub_v2_arn,
subscribed_at
FROM aws.securityhub.security_hub_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
