--- 
title: o_tel_enrichments
hide_title: false
hide_table_of_contents: false
keywords:
  - o_tel_enrichments
  - cloudwatch
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

Creates, updates, deletes, gets or lists an <code>o_tel_enrichments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="o_tel_enrichments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.o_tel_enrichments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_o_tel_enrichment"
    values={[
        { label: 'get_o_tel_enrichment', value: 'get_o_tel_enrichment' }
    ]}
>
<TabItem value="get_o_tel_enrichment">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of OTel enrichment for the account. Valid values are Running (enrichment is enabled) and Stopped (enrichment is disabled). (Running, Stopped)</td>
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
    <td><a href="#get_o_tel_enrichment"><CopyableCode code="get_o_tel_enrichment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status of vended metric enrichment for the account, including whether CloudWatch vended metrics are enriched with resource ARN and resource tag labels and queryable using PromQL. For the list of supported resources, see Supported Amazon Web Services infrastructure metrics.</td>
</tr>
<tr>
    <td><a href="#start_o_tel_enrichment"><CopyableCode code="start_o_tel_enrichment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables enrichment and PromQL access for CloudWatch vended metrics for supported Amazon Web Services resources in the account. Once enabled, metrics that contain a resource identifier dimension (for example, EC2 CPUUtilization with an InstanceId dimension) are enriched with resource ARN and resource tag labels and become queryable using PromQL. Before calling this operation, you must enable resource tags on telemetry for your account. For more information, see Enable resource tags on telemetry.</td>
</tr>
<tr>
    <td><a href="#stop_o_tel_enrichment"><CopyableCode code="stop_o_tel_enrichment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables enrichment and PromQL access for CloudWatch vended metrics for supported Amazon Web Services resources in the account. After disabling, these metrics are no longer enriched with resource ARN and resource tag labels, and cannot be queried using PromQL.</td>
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
    defaultValue="get_o_tel_enrichment"
    values={[
        { label: 'get_o_tel_enrichment', value: 'get_o_tel_enrichment' }
    ]}
>
<TabItem value="get_o_tel_enrichment">

Returns the current status of vended metric enrichment for the account, including whether CloudWatch vended metrics are enriched with resource ARN and resource tag labels and queryable using PromQL. For the list of supported resources, see Supported Amazon Web Services infrastructure metrics.

```sql
SELECT
status
FROM aws.cloudwatch.o_tel_enrichments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_o_tel_enrichment"
    values={[
        { label: 'start_o_tel_enrichment', value: 'start_o_tel_enrichment' },
        { label: 'stop_o_tel_enrichment', value: 'stop_o_tel_enrichment' }
    ]}
>
<TabItem value="start_o_tel_enrichment">

Enables enrichment and PromQL access for CloudWatch vended metrics for supported Amazon Web Services resources in the account. Once enabled, metrics that contain a resource identifier dimension (for example, EC2 CPUUtilization with an InstanceId dimension) are enriched with resource ARN and resource tag labels and become queryable using PromQL. Before calling this operation, you must enable resource tags on telemetry for your account. For more information, see Enable resource tags on telemetry.

```sql
EXEC aws.cloudwatch.o_tel_enrichments.start_o_tel_enrichment 
@region='{{ region }}' --required 
;
```
</TabItem>
<TabItem value="stop_o_tel_enrichment">

Disables enrichment and PromQL access for CloudWatch vended metrics for supported Amazon Web Services resources in the account. After disabling, these metrics are no longer enriched with resource ARN and resource tag labels, and cannot be queried using PromQL.

```sql
EXEC aws.cloudwatch.o_tel_enrichments.stop_o_tel_enrichment 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>
