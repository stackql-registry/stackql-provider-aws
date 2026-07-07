--- 
title: configuration_aggregator_sources_status
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_aggregator_sources_status
  - config
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

Creates, updates, deletes, gets or lists a <code>configuration_aggregator_sources_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_aggregator_sources_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.configuration_aggregator_sources_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_aggregator_sources_status"
    values={[
        { label: 'describe_configuration_aggregator_sources_status', value: 'describe_configuration_aggregator_sources_status' }
    ]}
>
<TabItem value="describe_configuration_aggregator_sources_status">

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
    <td><CopyableCode code="AwsRegion" /></td>
    <td><code>string</code></td>
    <td>The region authorized to collect aggregated data.</td>
</tr>
<tr>
    <td><CopyableCode code="LastErrorCode" /></td>
    <td><code>string</code></td>
    <td>The error code that Config returned when the source account aggregation last failed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastErrorMessage" /></td>
    <td><code>string</code></td>
    <td>The message indicating that the source account aggregation failed due to an error.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateStatus" /></td>
    <td><code>string</code></td>
    <td>Filters the last updated status type. Valid value FAILED indicates errors while moving data. Valid value SUCCEEDED indicates the data was successfully moved. Valid value OUTDATED indicates the data is not the most recent. (FAILED, SUCCEEDED, OUTDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of the last update.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceId" /></td>
    <td><code>string</code></td>
    <td>The source account ID or an organization.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The source account or an organization. (ACCOUNT, ORGANIZATION)</td>
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
    <td><a href="#describe_configuration_aggregator_sources_status"><CopyableCode code="describe_configuration_aggregator_sources_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message.</td>
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
    defaultValue="describe_configuration_aggregator_sources_status"
    values={[
        { label: 'describe_configuration_aggregator_sources_status', value: 'describe_configuration_aggregator_sources_status' }
    ]}
>
<TabItem value="describe_configuration_aggregator_sources_status">

Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message.

```sql
SELECT
AwsRegion,
LastErrorCode,
LastErrorMessage,
LastUpdateStatus,
LastUpdateTime,
SourceId,
SourceType
FROM aws.config.configuration_aggregator_sources_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
