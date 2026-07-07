--- 
title: data_lake_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_lake_sources
  - securitylake
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

Creates, updates, deletes, gets or lists a <code>data_lake_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_lake_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securitylake.data_lake_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_lake_sources"
    values={[
        { label: 'get_data_lake_sources', value: 'get_data_lake_sources' }
    ]}
>
<TabItem value="get_data_lake_sources">

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
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>The ID of the Security Lake account for which logs are collected.</td>
</tr>
<tr>
    <td><CopyableCode code="eventClasses" /></td>
    <td><code>array</code></td>
    <td>The Open Cybersecurity Schema Framework (OCSF) event classes describes the type of data that the custom source will send to Security Lake. For the list of supported event classes, see Supported OCSF Event classes in the Amazon Security Lake User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceName" /></td>
    <td><code>string</code></td>
    <td>The supported Amazon Web Services services from which logs and events are collected. Amazon Security Lake supports log and event collection for natively supported Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceStatuses" /></td>
    <td><code>array</code></td>
    <td>The log status for the Security Lake account.</td>
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
    <td><a href="#get_data_lake_sources"><CopyableCode code="get_data_lake_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from.</td>
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
    defaultValue="get_data_lake_sources"
    values={[
        { label: 'get_data_lake_sources', value: 'get_data_lake_sources' }
    ]}
>
<TabItem value="get_data_lake_sources">

Retrieves a snapshot of the current Region, including whether Amazon Security Lake is enabled for those accounts and which sources Security Lake is collecting data from.

```sql
SELECT
account,
eventClasses,
sourceName,
sourceStatuses
FROM aws.securitylake.data_lake_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
