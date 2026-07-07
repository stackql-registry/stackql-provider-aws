--- 
title: telemetry_enrichment_status
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_enrichment_status
  - observabilityadmin
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

Creates, updates, deletes, gets or lists a <code>telemetry_enrichment_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telemetry_enrichment_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.telemetry_enrichment_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_telemetry_enrichment_status"
    values={[
        { label: 'get_telemetry_enrichment_status', value: 'get_telemetry_enrichment_status' }
    ]}
>
<TabItem value="get_telemetry_enrichment_status">

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
    <td><CopyableCode code="AwsResourceExplorerManagedViewArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Resource Explorer managed view used for resource tags for telemetry, if the feature is enabled. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:resource-explorer-2:(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:managed-view/(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the resource tags for telemetry feature (Running, Stopped, or Impaired). (Running, Stopped, Impaired)</td>
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
    <td><a href="#get_telemetry_enrichment_status"><CopyableCode code="get_telemetry_enrichment_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status of the resource tags for telemetry feature, which enhances telemetry data with additional resource metadata from Resource Explorer.</td>
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
    defaultValue="get_telemetry_enrichment_status"
    values={[
        { label: 'get_telemetry_enrichment_status', value: 'get_telemetry_enrichment_status' }
    ]}
>
<TabItem value="get_telemetry_enrichment_status">

Returns the current status of the resource tags for telemetry feature, which enhances telemetry data with additional resource metadata from Resource Explorer.

```sql
SELECT
AwsResourceExplorerManagedViewArn,
Status
FROM aws.observabilityadmin.telemetry_enrichment_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
