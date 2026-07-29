--- 
title: readiness_check_resource_status
hide_title: false
hide_table_of_contents: false
keywords:
  - readiness_check_resource_status
  - route53_recovery_readiness
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

Creates, updates, deletes, gets or lists a <code>readiness_check_resource_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="readiness_check_resource_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_readiness.readiness_check_resource_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_readiness_check_resource_status"
    values={[
        { label: 'get_readiness_check_resource_status', value: 'get_readiness_check_resource_status' }
    ]}
>
<TabItem value="get_readiness_check_resource_status">

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
    <td><CopyableCode code="last_checked_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the resource was last checked for readiness, in ISO-8601 format, UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>Details about the resource's readiness.</td>
</tr>
<tr>
    <td><CopyableCode code="readiness" /></td>
    <td><code>string</code></td>
    <td>The readiness at rule level. (READY, NOT_READY, UNKNOWN, NOT_AUTHORIZED)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the rule.</td>
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
    <td><a href="#get_readiness_check_resource_status"><CopyableCode code="get_readiness_check_resource_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-readiness_check_name"><code>readiness_check_name</code></a>, <a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets individual readiness status for a readiness check. To see the overall readiness status for a recovery group, that considers the readiness status for all the readiness checks in the recovery group, use GetRecoveryGroupReadinessSummary.</td>
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
<tr id="parameter-readiness_check_name">
    <td><CopyableCode code="readiness_check_name" /></td>
    <td><code>string</code></td>
    <td>Name of a readiness check.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The resource identifier, which is the Amazon Resource Name (ARN) or the identifier generated for the resource by Application Recovery Controller (for example, for a DNS target resource).</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_readiness_check_resource_status"
    values={[
        { label: 'get_readiness_check_resource_status', value: 'get_readiness_check_resource_status' }
    ]}
>
<TabItem value="get_readiness_check_resource_status">

Gets individual readiness status for a readiness check. To see the overall readiness status for a recovery group, that considers the readiness status for all the readiness checks in the recovery group, use GetRecoveryGroupReadinessSummary.

```sql
SELECT
last_checked_timestamp,
messages,
readiness,
rule_id
FROM aws.route53_recovery_readiness.readiness_check_resource_status
WHERE readiness_check_name = '{{ readiness_check_name }}' -- required
AND resource_identifier = '{{ resource_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
