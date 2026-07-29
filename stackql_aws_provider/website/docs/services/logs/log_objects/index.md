--- 
title: log_objects
hide_title: false
hide_table_of_contents: false
keywords:
  - log_objects
  - logs
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

Creates, updates, deletes, gets or lists a <code>log_objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.log_objects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_log_object"
    values={[
        { label: 'get_log_object', value: 'get_log_object' }
    ]}
>
<TabItem value="get_log_object">

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
    <td><CopyableCode code="internal_streaming_exception" /></td>
    <td><code>object</code></td>
    <td>An internal error occurred during the streaming of log data. This exception is thrown when there's an issue with the internal streaming mechanism used by the GetLogObject operation.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>A structure containing the extracted fields from a log event. These fields are extracted based on the log format and can be used for structured querying and analysis.</td>
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
    <td><a href="#get_log_object"><CopyableCode code="get_log_object" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a large logging object (LLO) and streams it back. This API is used to fetch the content of large portions of log events that have been ingested through the PutOpenTelemetryLogs API. When log events contain fields that would cause the total event size to exceed 1MB, CloudWatch Logs automatically processes up to 10 fields, starting with the largest fields. Each field is truncated as needed to keep the total event size as close to 1MB as possible. The excess portions are stored as Large Log Objects (LLOs) and these fields are processed separately and LLO reference system fields (in the format @ptr.$&#91;path.to.field&#93;) are added. The path in the reference field reflects the original JSON structure where the large field was located. For example, this could be @ptr.$&#91;'input'&#93;&#91;'message'&#93;, @ptr.$&#91;'AAA'&#93;&#91;'BBB'&#93;&#91;'CCC'&#93;&#91;'DDD'&#93;, @ptr.$&#91;'AAA'&#93;, or any other path matching your log structure. The GetLogObject API routes requests using SDK host prefix injection. SDK versions released before April 1, 2026 route to streaming-logs.Region.amazonaws.com, which does not support VPC endpoints. SDK versions released on or after April 1, 2026 route to stream-logs.Region.amazonaws.com, which supports VPC endpoints. To set up a VPC endpoint for this API, see Creating a VPC endpoint for CloudWatch Logs .</td>
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
    defaultValue="get_log_object"
    values={[
        { label: 'get_log_object', value: 'get_log_object' }
    ]}
>
<TabItem value="get_log_object">

Retrieves a large logging object (LLO) and streams it back. This API is used to fetch the content of large portions of log events that have been ingested through the PutOpenTelemetryLogs API. When log events contain fields that would cause the total event size to exceed 1MB, CloudWatch Logs automatically processes up to 10 fields, starting with the largest fields. Each field is truncated as needed to keep the total event size as close to 1MB as possible. The excess portions are stored as Large Log Objects (LLOs) and these fields are processed separately and LLO reference system fields (in the format @ptr.$[path.to.field]) are added. The path in the reference field reflects the original JSON structure where the large field was located. For example, this could be @ptr.$['input']['message'], @ptr.$['AAA']['BBB']['CCC']['DDD'], @ptr.$['AAA'], or any other path matching your log structure. The GetLogObject API routes requests using SDK host prefix injection. SDK versions released before April 1, 2026 route to streaming-logs.Region.amazonaws.com, which does not support VPC endpoints. SDK versions released on or after April 1, 2026 route to stream-logs.Region.amazonaws.com, which supports VPC endpoints. To set up a VPC endpoint for this API, see Creating a VPC endpoint for CloudWatch Logs .

```sql
SELECT
internal_streaming_exception,
fields
FROM aws.logs.log_objects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
