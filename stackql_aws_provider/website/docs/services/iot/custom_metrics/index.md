--- 
title: custom_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_metrics
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

Creates, updates, deletes, gets or lists a <code>custom_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.custom_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_custom_metric"
    values={[
        { label: 'describe_custom_metric', value: 'describe_custom_metric' },
        { label: 'list_custom_metrics', value: 'list_custom_metrics' }
    ]}
>
<TabItem value="describe_custom_metric">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date of the custom metric in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Field represents a friendly name in the console for the custom metric; doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated. (pattern: &lt;code&gt;&#91;\p&#123;Graph&#125;\x20&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the custom metric was last modified in milliseconds since epoch.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the custom metric.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom metric. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metric_type" /></td>
    <td><code>string</code></td>
    <td>The type of the custom metric. The type number only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value. (string-list, ip-address-list, number-list, number)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_metrics">

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
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom metric.</td>
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
    <td><a href="#describe_custom_metric"><CopyableCode code="describe_custom_metric" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a Device Defender detect custom metric. Requires permission to access the DescribeCustomMetric action.</td>
</tr>
<tr>
    <td><a href="#list_custom_metrics"><CopyableCode code="list_custom_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists your Device Defender detect custom metrics. Requires permission to access the ListCustomMetrics action.</td>
</tr>
<tr>
    <td><a href="#create_custom_metric"><CopyableCode code="create_custom_metric" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-metricType"><code>metricType</code></a>, <a href="#parameter-clientRequestToken"><code>clientRequestToken</code></a></td>
    <td></td>
    <td>Use this API to define a Custom Metric published by your devices to Device Defender. Requires permission to access the CreateCustomMetric action.</td>
</tr>
<tr>
    <td><a href="#update_custom_metric"><CopyableCode code="update_custom_metric" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td></td>
    <td>Updates a Device Defender detect custom metric. Requires permission to access the UpdateCustomMetric action.</td>
</tr>
<tr>
    <td><a href="#delete_custom_metric"><CopyableCode code="delete_custom_metric" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-metric_name"><code>metric_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Device Defender detect custom metric. Requires permission to access the DeleteCustomMetric action. Before you can delete a custom metric, you must first remove the custom metric from all security profiles it's a part of. The security profile associated with the custom metric can be found using the ListSecurityProfiles API with metricName set to your custom metric name.</td>
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
    <td>The name of the custom metric.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time. The default is 25.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_custom_metric"
    values={[
        { label: 'describe_custom_metric', value: 'describe_custom_metric' },
        { label: 'list_custom_metrics', value: 'list_custom_metrics' }
    ]}
>
<TabItem value="describe_custom_metric">

Gets information about a Device Defender detect custom metric. Requires permission to access the DescribeCustomMetric action.

```sql
SELECT
creation_date,
display_name,
last_modified_date,
metric_arn,
metric_name,
metric_type
FROM aws.iot.custom_metrics
WHERE metric_name = '{{ metric_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_metrics">

Lists your Device Defender detect custom metrics. Requires permission to access the ListCustomMetrics action.

```sql
SELECT
metric_name
FROM aws.iot.custom_metrics
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_metric"
    values={[
        { label: 'create_custom_metric', value: 'create_custom_metric' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_metric">

Use this API to define a Custom Metric published by your devices to Device Defender. Requires permission to access the CreateCustomMetric action.

```sql
INSERT INTO aws.iot.custom_metrics (
displayName,
metricType,
tags,
clientRequestToken,
metric_name,
region
)
SELECT 
'{{ displayName }}',
'{{ metricType }}' /* required */,
'{{ tags }}',
'{{ clientRequestToken }}' /* required */,
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
- name: custom_metrics
  props:
    - name: metric_name
      value: "{{ metric_name }}"
      description: Required parameter for the custom_metrics resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_metrics resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: metricType
      value: "{{ metricType }}"
      valid_values: ['string-list', 'ip-address-list', 'number-list', 'number']
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_metric"
    values={[
        { label: 'update_custom_metric', value: 'update_custom_metric' }
    ]}
>
<TabItem value="update_custom_metric">

Updates a Device Defender detect custom metric. Requires permission to access the UpdateCustomMetric action.

```sql
UPDATE aws.iot.custom_metrics
SET 
displayName = '{{ displayName }}'
WHERE 
metric_name = '{{ metric_name }}' --required
AND region = '{{ region }}' --required
AND displayName = '{{ displayName }}' --required
RETURNING
creation_date,
display_name,
last_modified_date,
metric_arn,
metric_name,
metric_type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_metric"
    values={[
        { label: 'delete_custom_metric', value: 'delete_custom_metric' }
    ]}
>
<TabItem value="delete_custom_metric">

Deletes a Device Defender detect custom metric. Requires permission to access the DeleteCustomMetric action. Before you can delete a custom metric, you must first remove the custom metric from all security profiles it's a part of. The security profile associated with the custom metric can be found using the ListSecurityProfiles API with metricName set to your custom metric name.

```sql
DELETE FROM aws.iot.custom_metrics
WHERE metric_name = '{{ metric_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
