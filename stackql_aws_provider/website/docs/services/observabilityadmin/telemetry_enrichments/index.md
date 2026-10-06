--- 
title: telemetry_enrichments
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_enrichments
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

Creates, updates, deletes, gets or lists a <code>telemetry_enrichments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telemetry_enrichments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.telemetry_enrichments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#start_telemetry_enrichment"><CopyableCode code="start_telemetry_enrichment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables the resource tags for telemetry feature for your account, which enhances telemetry data with additional resource metadata from Resource Explorer to provide richer context for monitoring and observability.</td>
</tr>
<tr>
    <td><a href="#stop_telemetry_enrichment"><CopyableCode code="stop_telemetry_enrichment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the resource tags for telemetry feature for your account, stopping the enhancement of telemetry data with additional resource metadata.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="start_telemetry_enrichment"
    values={[
        { label: 'start_telemetry_enrichment', value: 'start_telemetry_enrichment' },
        { label: 'stop_telemetry_enrichment', value: 'stop_telemetry_enrichment' }
    ]}
>
<TabItem value="start_telemetry_enrichment">

Enables the resource tags for telemetry feature for your account, which enhances telemetry data with additional resource metadata from Resource Explorer to provide richer context for monitoring and observability.

```sql
EXEC aws.observabilityadmin.telemetry_enrichments.start_telemetry_enrichment 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_telemetry_enrichment">

Disables the resource tags for telemetry feature for your account, stopping the enhancement of telemetry data with additional resource metadata.

```sql
EXEC aws.observabilityadmin.telemetry_enrichments.stop_telemetry_enrichment 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
