--- 
title: anomaly_detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - anomaly_detectors
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

Creates, updates, deletes, gets or lists an <code>anomaly_detectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anomaly_detectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudwatch.anomaly_detectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_anomaly_detectors"
    values={[
        { label: 'describe_anomaly_detectors', value: 'describe_anomaly_detectors' }
    ]}
>
<TabItem value="describe_anomaly_detectors">

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
    <td><CopyableCode code="Configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model, and the time zone to use for the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="Dimensions" /></td>
    <td><code>array</code></td>
    <td>The metric dimensions associated with the anomaly detection model.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricCharacteristics" /></td>
    <td><code>object</code></td>
    <td>This object includes parameters that you can use to provide information about your metric to CloudWatch to help it build more accurate anomaly detection models. Currently, it includes the PeriodicSpikes parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricMathAnomalyDetector" /></td>
    <td><code>object</code></td>
    <td>The CloudWatch metric math expression for this anomaly detector.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricName" /></td>
    <td><code>string</code></td>
    <td>The name of the metric associated with the anomaly detection model.</td>
</tr>
<tr>
    <td><CopyableCode code="Namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the metric associated with the anomaly detection model. (pattern: &lt;code&gt;&#91;^:&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SingleMetricAnomalyDetector" /></td>
    <td><code>object</code></td>
    <td>The CloudWatch metric and statistic for this anomaly detector.</td>
</tr>
<tr>
    <td><CopyableCode code="Stat" /></td>
    <td><code>string</code></td>
    <td>The statistic associated with the anomaly detection model. (pattern: &lt;code&gt;(SampleCount|Average|Sum|Minimum|Maximum|IQM|(p|tc|tm|ts|wm)(\d&#123;1,2&#125;(\.\d&#123;0,10&#125;)?|100)|&#91;ou&#93;\d+(\.\d*)?)(_E|_L|_H)?|(TM|TC|TS|WM)\(((((\d&#123;1,2&#125;)(\.\d&#123;0,10&#125;)?|100(\.0&#123;0,10&#125;)?)%)?:((\d&#123;1,2&#125;)(\.\d&#123;0,10&#125;)?|100(\.0&#123;0,10&#125;)?)%|((\d&#123;1,2&#125;)(\.\d&#123;0,10&#125;)?|100(\.0&#123;0,10&#125;)?)%:(((\d&#123;1,2&#125;)(\.\d&#123;0,10&#125;)?|100(\.0&#123;0,10&#125;)?)%)?)\)|(TM|TC|TS|WM|PR)\(((\d+(\.\d&#123;0,10&#125;)?|(\d+(\.\d&#123;0,10&#125;)?&#91;Ee&#93;&#91;+-&#93;?\d+)):((\d+(\.\d&#123;0,10&#125;)?|(\d+(\.\d&#123;0,10&#125;)?&#91;Ee&#93;&#91;+-&#93;?\d+)))?|((\d+(\.\d&#123;0,10&#125;)?|(\d+(\.\d&#123;0,10&#125;)?&#91;Ee&#93;&#91;+-&#93;?\d+)))?:(\d+(\.\d&#123;0,10&#125;)?|(\d+(\.\d&#123;0,10&#125;)?&#91;Ee&#93;&#91;+-&#93;?\d+)))\)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StateValue" /></td>
    <td><code>string</code></td>
    <td>The current status of the anomaly detector's training. (PENDING_TRAINING, TRAINED_INSUFFICIENT_DATA, TRAINED)</td>
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
    <td><a href="#describe_anomaly_detectors"><CopyableCode code="describe_anomaly_detectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding METRIC_MATH to the AnomalyDetectorTypes array. This will return all metric math anomaly detectors in your account.</td>
</tr>
<tr>
    <td><a href="#put_anomaly_detector"><CopyableCode code="put_anomaly_detector" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed. If you have enabled unified cross-account observability, and this account is a monitoring account, the metric can be in the same account or a source account. You can specify the account ID in the object you specify in the SingleMetricAnomalyDetector parameter. For more information, see CloudWatch Anomaly Detection.</td>
</tr>
<tr>
    <td><a href="#delete_anomaly_detector"><CopyableCode code="delete_anomaly_detector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see Deleting an anomaly detection model in the CloudWatch User Guide.</td>
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
    defaultValue="describe_anomaly_detectors"
    values={[
        { label: 'describe_anomaly_detectors', value: 'describe_anomaly_detectors' }
    ]}
>
<TabItem value="describe_anomaly_detectors">

Lists the anomaly detection models that you have created in your account. For single metric anomaly detectors, you can list all of the models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension. For metric math anomaly detectors, you can list them by adding METRIC_MATH to the AnomalyDetectorTypes array. This will return all metric math anomaly detectors in your account.

```sql
SELECT
Configuration,
Dimensions,
MetricCharacteristics,
MetricMathAnomalyDetector,
MetricName,
Namespace,
SingleMetricAnomalyDetector,
Stat,
StateValue
FROM aws.cloudwatch.anomaly_detectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_anomaly_detector"
    values={[
        { label: 'put_anomaly_detector', value: 'put_anomaly_detector' }
    ]}
>
<TabItem value="put_anomaly_detector">

Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed. If you have enabled unified cross-account observability, and this account is a monitoring account, the metric can be in the same account or a source account. You can specify the account ID in the object you specify in the SingleMetricAnomalyDetector parameter. For more information, see CloudWatch Anomaly Detection.

```sql
REPLACE aws.cloudwatch.anomaly_detectors
SET 
Namespace = '{{ Namespace }}',
MetricName = '{{ MetricName }}',
Dimensions = '{{ Dimensions }}',
Stat = '{{ Stat }}',
Configuration = '{{ Configuration }}',
MetricCharacteristics = '{{ MetricCharacteristics }}',
SingleMetricAnomalyDetector = '{{ SingleMetricAnomalyDetector }}',
MetricMathAnomalyDetector = '{{ MetricMathAnomalyDetector }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_anomaly_detector"
    values={[
        { label: 'delete_anomaly_detector', value: 'delete_anomaly_detector' }
    ]}
>
<TabItem value="delete_anomaly_detector">

Deletes the specified anomaly detection model from your account. For more information about how to delete an anomaly detection model, see Deleting an anomaly detection model in the CloudWatch User Guide.

```sql
DELETE FROM aws.cloudwatch.anomaly_detectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
