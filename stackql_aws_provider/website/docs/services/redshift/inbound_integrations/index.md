--- 
title: inbound_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - inbound_integrations
  - redshift
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

Creates, updates, deletes, gets or lists an <code>inbound_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inbound_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.inbound_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_inbound_integrations"
    values={[
        { label: 'describe_inbound_integrations', value: 'describe_inbound_integrations' }
    ]}
>
<TabItem value="describe_inbound_integrations">

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
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string</code></td>
    <td>The creation time of an inbound integration.</td>
</tr>
<tr>
    <td><CopyableCode code="Errors" /></td>
    <td><code>string</code></td>
    <td>The outstanding errors of an inbound integration. Each item is an "IntegrationError". This is null if there is no error.</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an inbound integration.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source of an inbound integration.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of an inbound integration.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target of an inbound integration.</td>
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
    <td><a href="#describe_inbound_integrations"><CopyableCode code="describe_inbound_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IntegrationArn"><code>IntegrationArn</code></a>, <a href="#parameter-TargetArn"><code>TargetArn</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of inbound integrations.</td>
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
<tr id="parameter-IntegrationArn">
    <td><CopyableCode code="IntegrationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the inbound integration.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeInboundIntegrations request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-TargetArn">
    <td><CopyableCode code="TargetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target of an inbound integration.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_inbound_integrations"
    values={[
        { label: 'describe_inbound_integrations', value: 'describe_inbound_integrations' }
    ]}
>
<TabItem value="describe_inbound_integrations">

Returns a list of inbound integrations.

```sql
SELECT
CreateTime,
Errors,
IntegrationArn,
SourceArn,
Status,
TargetArn
FROM aws.redshift.inbound_integrations
WHERE region = '{{ region }}' -- required
AND IntegrationArn = '{{ IntegrationArn }}'
AND TargetArn = '{{ TargetArn }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
