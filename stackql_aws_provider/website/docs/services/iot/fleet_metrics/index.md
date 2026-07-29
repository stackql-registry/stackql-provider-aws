--- 
title: fleet_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_metrics
  - iot
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

Creates, updates, deletes, gets or lists a <code>fleet_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleet_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.fleet_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleet_metric"
    values={[
        { label: 'describe_fleet_metric', value: 'describe_fleet_metric' },
        { label: 'list_fleet_metrics', value: 'list_fleet_metrics' }
    ]}
>
<TabItem value="describe_fleet_metric">

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
    <td><CopyableCode code="aggregation_field" /></td>
    <td><code>string</code></td>
    <td>The field to aggregate.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregation_type" /></td>
    <td><code>object</code></td>
    <td>The type of aggregation queries.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the fleet metric is created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The fleet metric description. (pattern: &lt;code&gt;&#91;\p&#123;Graph&#125;\x20&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The name of the index to search. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the fleet metric is last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the fleet metric to describe.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet metric to describe. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>integer</code></td>
    <td>The time in seconds between fleet metric emissions. Range &#91;60(1 min), 86400(1 day)&#93; and must be multiple of 60.</td>
</tr>
<tr>
    <td><CopyableCode code="query_string" /></td>
    <td><code>string</code></td>
    <td>The search query string.</td>
</tr>
<tr>
    <td><CopyableCode code="query_version" /></td>
    <td><code>string</code></td>
    <td>The query version.</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>Used to support unit transformation such as milliseconds to seconds. The unit must be supported by CW metric. (Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, None)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the fleet metric.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fleet_metrics">

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
    <td><CopyableCode code="metric_arn" /></td>
    <td><code>string</code></td>
    <td>The fleet metric ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The fleet metric name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-\.&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_fleet_metric"><CopyableCode code="describe_fleet_metric" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified fleet metric. Requires permission to access the DescribeFleetMetric action.</td>
</tr>
<tr>
    <td><a href="#list_fleet_metrics"><CopyableCode code="list_fleet_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all your fleet metrics. Requires permission to access the ListFleetMetrics action.</td>
</tr>
<tr>
    <td><a href="#create_fleet_metric"><CopyableCode code="create_fleet_metric" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryString"><code>queryString</code></a>, <a href="#parameter-aggregationType"><code>aggregationType</code></a>, <a href="#parameter-period"><code>period</code></a>, <a href="#parameter-aggregationField"><code>aggregationField</code></a></td>
    <td></td>
    <td>Creates a fleet metric. Requires permission to access the CreateFleetMetric action.</td>
</tr>
<tr>
    <td><a href="#update_fleet_metric"><CopyableCode code="update_fleet_metric" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-indexName"><code>indexName</code></a></td>
    <td></td>
    <td>Updates the data for a fleet metric. Requires permission to access the UpdateFleetMetric action.</td>
</tr>
<tr>
    <td><a href="#delete_fleet_metric"><CopyableCode code="delete_fleet_metric" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expectedVersion"><code>expectedVersion</code></a></td>
    <td>Deletes the specified fleet metric. Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist. Requires permission to access the DeleteFleetMetric action.</td>
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
<tr id="parameter-metric_name">
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet metric to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-expectedVersion">
    <td><CopyableCode code="expectedVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The expected version of the fleet metric to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_fleet_metric"
    values={[
        { label: 'describe_fleet_metric', value: 'describe_fleet_metric' },
        { label: 'list_fleet_metrics', value: 'list_fleet_metrics' }
    ]}
>
<TabItem value="describe_fleet_metric">

Gets information about the specified fleet metric. Requires permission to access the DescribeFleetMetric action.

```sql
SELECT
aggregation_field,
aggregation_type,
creation_date,
description,
index_name,
last_modified_date,
metric_arn,
metric_name,
period,
query_string,
query_version,
unit,
version
FROM aws.iot.fleet_metrics
WHERE metric_name = '{{ metric_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fleet_metrics">

Lists all your fleet metrics. Requires permission to access the ListFleetMetrics action.

```sql
SELECT
metric_arn,
metric_name
FROM aws.iot.fleet_metrics
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fleet_metric"
    values={[
        { label: 'create_fleet_metric', value: 'create_fleet_metric' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fleet_metric">

Creates a fleet metric. Requires permission to access the CreateFleetMetric action.

```sql
INSERT INTO aws.iot.fleet_metrics (
queryString,
aggregationType,
period,
aggregationField,
description,
queryVersion,
indexName,
unit,
tags,
metric_name,
region
)
SELECT 
'{{ queryString }}' /* required */,
'{{ aggregationType }}' /* required */,
{{ period }} /* required */,
'{{ aggregationField }}' /* required */,
'{{ description }}',
'{{ queryVersion }}',
'{{ indexName }}',
'{{ unit }}',
'{{ tags }}',
'{{ metric_name }}',
'{{ region }}'
RETURNING
metric_arn,
metric_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fleet_metrics
  props:
    - name: metric_name
      value: "{{ metric_name }}"
      description: Required parameter for the fleet_metrics resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fleet_metrics resource.
    - name: queryString
      value: "{{ queryString }}"
    - name: aggregationType
      description: |
        The type of aggregation queries.
      value:
        name: "{{ name }}"
        values:
          - "{{ values }}"
    - name: period
      value: {{ period }}
    - name: aggregationField
      value: "{{ aggregationField }}"
    - name: description
      value: "{{ description }}"
    - name: queryVersion
      value: "{{ queryVersion }}"
    - name: indexName
      value: "{{ indexName }}"
    - name: unit
      value: "{{ unit }}"
      valid_values: ['Seconds', 'Microseconds', 'Milliseconds', 'Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Terabytes', 'Bits', 'Kilobits', 'Megabits', 'Gigabits', 'Terabits', 'Percent', 'Count', 'Bytes/Second', 'Kilobytes/Second', 'Megabytes/Second', 'Gigabytes/Second', 'Terabytes/Second', 'Bits/Second', 'Kilobits/Second', 'Megabits/Second', 'Gigabits/Second', 'Terabits/Second', 'Count/Second', 'None']
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fleet_metric"
    values={[
        { label: 'update_fleet_metric', value: 'update_fleet_metric' }
    ]}
>
<TabItem value="update_fleet_metric">

Updates the data for a fleet metric. Requires permission to access the UpdateFleetMetric action.

```sql
UPDATE aws.iot.fleet_metrics
SET 
queryString = '{{ queryString }}',
aggregationType = '{{ aggregationType }}',
period = {{ period }},
aggregationField = '{{ aggregationField }}',
description = '{{ description }}',
queryVersion = '{{ queryVersion }}',
indexName = '{{ indexName }}',
unit = '{{ unit }}',
expectedVersion = {{ expectedVersion }}
WHERE 
metric_name = '{{ metric_name }}' --required
AND region = '{{ region }}' --required
AND indexName = '{{ indexName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fleet_metric"
    values={[
        { label: 'delete_fleet_metric', value: 'delete_fleet_metric' }
    ]}
>
<TabItem value="delete_fleet_metric">

Deletes the specified fleet metric. Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist. Requires permission to access the DeleteFleetMetric action.

```sql
DELETE FROM aws.iot.fleet_metrics
WHERE metric_name = '{{ metric_name }}' --required
AND region = '{{ region }}' --required
AND expectedVersion = '{{ expectedVersion }}'
;
```
</TabItem>
</Tabs>
