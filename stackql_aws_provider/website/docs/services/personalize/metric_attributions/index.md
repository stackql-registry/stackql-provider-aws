--- 
title: metric_attributions
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_attributions
  - personalize
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

Creates, updates, deletes, gets or lists a <code>metric_attributions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_attributions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.metric_attributions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_metric_attribution"
    values={[
        { label: 'describe_metric_attribution', value: 'describe_metric_attribution' },
        { label: 'list_metric_attributions', value: 'list_metric_attributions' }
    ]}
>
<TabItem value="describe_metric_attribution">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The metric attribution's name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The metric attribution's creation date time.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The metric attribution's dataset group Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The metric attribution's failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The metric attribution's last updated date time.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_attribution_arn" /></td>
    <td><code>string</code></td>
    <td>The metric attribution's Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_output_config" /></td>
    <td><code>object</code></td>
    <td>The metric attribution's output configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The metric attribution's status.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_metric_attributions">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric attribution. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The metric attribution's creation date time.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The metric attribution's failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The metric attribution's last updated date time.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_attribution_arn" /></td>
    <td><code>string</code></td>
    <td>The metric attribution's Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The metric attribution's status.</td>
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
    <td><a href="#describe_metric_attribution"><CopyableCode code="describe_metric_attribution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a metric attribution.</td>
</tr>
<tr>
    <td><a href="#list_metric_attributions"><CopyableCode code="list_metric_attributions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists metric attributions.</td>
</tr>
<tr>
    <td><a href="#create_metric_attribution"><CopyableCode code="create_metric_attribution" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-datasetGroupArn"><code>datasetGroupArn</code></a>, <a href="#parameter-metrics"><code>metrics</code></a>, <a href="#parameter-metricsOutputConfig"><code>metricsOutputConfig</code></a></td>
    <td></td>
    <td>Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see Measuring impact of recommendations.</td>
</tr>
<tr>
    <td><a href="#update_metric_attribution"><CopyableCode code="update_metric_attribution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a metric attribution.</td>
</tr>
<tr>
    <td><a href="#delete_metric_attribution"><CopyableCode code="delete_metric_attribution" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a metric attribution.</td>
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
    defaultValue="describe_metric_attribution"
    values={[
        { label: 'describe_metric_attribution', value: 'describe_metric_attribution' },
        { label: 'list_metric_attributions', value: 'list_metric_attributions' }
    ]}
>
<TabItem value="describe_metric_attribution">

Describes a metric attribution.

```sql
SELECT
name,
creation_date_time,
dataset_group_arn,
failure_reason,
last_updated_date_time,
metric_attribution_arn,
metrics_output_config,
status
FROM aws.personalize.metric_attributions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_metric_attributions">

Lists metric attributions.

```sql
SELECT
name,
creation_date_time,
failure_reason,
last_updated_date_time,
metric_attribution_arn,
status
FROM aws.personalize.metric_attributions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_metric_attribution"
    values={[
        { label: 'create_metric_attribution', value: 'create_metric_attribution' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_metric_attribution">

Creates a metric attribution. A metric attribution creates reports on the data that you import into Amazon Personalize. Depending on how you imported the data, you can view reports in Amazon CloudWatch or Amazon S3. For more information, see Measuring impact of recommendations.

```sql
INSERT INTO aws.personalize.metric_attributions (
name,
datasetGroupArn,
metrics,
metricsOutputConfig,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ datasetGroupArn }}' /* required */,
'{{ metrics }}' /* required */,
'{{ metricsOutputConfig }}' /* required */,
'{{ region }}'
RETURNING
metric_attribution_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: metric_attributions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the metric_attributions resource.
    - name: name
      value: "{{ name }}"
      description: |
        A name for the metric attribution.
    - name: datasetGroupArn
      value: "{{ datasetGroupArn }}"
      description: |
        The Amazon Resource Name (ARN) of the destination dataset group for the metric attribution.
    - name: metrics
      description: |
        A list of metric attributes for the metric attribution. Each metric attribute specifies an event type to track and a function. Available functions are SUM() or SAMPLECOUNT(). For SUM() functions, provide the dataset type (either Interactions or Items) and column to sum as a parameter. For example SUM(Items.PRICE).
      value:
        - eventType: "{{ eventType }}"
          metricName: "{{ metricName }}"
          expression: "{{ expression }}"
    - name: metricsOutputConfig
      description: |
        The output configuration details for the metric attribution.
      value:
        s3DataDestination:
          path: "{{ path }}"
          kmsKeyArn: "{{ kmsKeyArn }}"
        roleArn: "{{ roleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_metric_attribution"
    values={[
        { label: 'update_metric_attribution', value: 'update_metric_attribution' }
    ]}
>
<TabItem value="update_metric_attribution">

Updates a metric attribution.

```sql
UPDATE aws.personalize.metric_attributions
SET 
addMetrics = '{{ addMetrics }}',
removeMetrics = '{{ removeMetrics }}',
metricsOutputConfig = '{{ metricsOutputConfig }}',
metricAttributionArn = '{{ metricAttributionArn }}'
WHERE 
region = '{{ region }}' --required
RETURNING
metric_attribution_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_metric_attribution"
    values={[
        { label: 'delete_metric_attribution', value: 'delete_metric_attribution' }
    ]}
>
<TabItem value="delete_metric_attribution">

Deletes a metric attribution.

```sql
DELETE FROM aws.personalize.metric_attributions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
