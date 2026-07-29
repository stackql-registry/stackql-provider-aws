--- 
title: log_anomaly_detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - log_anomaly_detectors
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

Creates, updates, deletes, gets or lists a <code>log_anomaly_detectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_anomaly_detectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.log_anomaly_detectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_log_anomaly_detector"
    values={[
        { label: 'get_log_anomaly_detector', value: 'get_log_anomaly_detector' },
        { label: 'list_log_anomaly_detectors', value: 'list_log_anomaly_detectors' }
    ]}
>
<TabItem value="get_log_anomaly_detector">

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
    <td><CopyableCode code="anomaly_detector_status" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the anomaly detector is currently active. To change its status, use the enabled parameter in the UpdateLogAnomalyDetector operation. (INITIALIZING, TRAINING, ANALYZING, FAILED, DELETED, PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="anomaly_visibility_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of days used as the life cycle of anomalies. After this time, anomalies are automatically baselined and the anomaly detector model will treat new occurrences of similar event as normal.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date and time when this anomaly detector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="detector_name" /></td>
    <td><code>string</code></td>
    <td>The name of the log anomaly detector</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_frequency" /></td>
    <td><code>string</code></td>
    <td>Specifies how often the anomaly detector runs and look for anomalies. Set this value according to the frequency that the log group receives new logs. For example, if the log group receives new log events every 10 minutes, then setting evaluationFrequency to FIFTEEN_MIN might be appropriate. (ONE_MIN, FIVE_MIN, TEN_MIN, FIFTEEN_MIN, THIRTY_MIN, ONE_HOUR)</td>
</tr>
<tr>
    <td><CopyableCode code="filter_pattern" /></td>
    <td><code>string</code></td>
    <td>A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key assigned to this anomaly detector, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date and time when this anomaly detector was most recently modified.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_arn_list" /></td>
    <td><code>array</code></td>
    <td>An array of structures, where each structure contains the ARN of a log group associated with this anomaly detector.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_log_anomaly_detectors">

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
    <td><CopyableCode code="anomaly_detector_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the anomaly detector. (pattern: &lt;code&gt;&#91;\w#+=/:,.@-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="anomaly_detector_status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current status of the anomaly detector. To pause an anomaly detector, use the enabled parameter in the UpdateLogAnomalyDetector operation. (INITIALIZING, TRAINING, ANALYZING, FAILED, DELETED, PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="anomaly_visibility_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of days used as the life cycle of anomalies. After this time, anomalies are automatically baselined and the anomaly detector model will treat new occurrences of similar event as normal.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date and time when this anomaly detector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="detector_name" /></td>
    <td><code>string</code></td>
    <td>The name of the anomaly detector.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_frequency" /></td>
    <td><code>string</code></td>
    <td>Specifies how often the anomaly detector runs and look for anomalies. (ONE_MIN, FIVE_MIN, TEN_MIN, FIFTEEN_MIN, THIRTY_MIN, ONE_HOUR)</td>
</tr>
<tr>
    <td><CopyableCode code="filter_pattern" /></td>
    <td><code>string</code></td>
    <td>A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key assigned to this anomaly detector, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date and time when this anomaly detector was most recently modified.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_arn_list" /></td>
    <td><code>array</code></td>
    <td>A list of the ARNs of the log groups that this anomaly detector watches.</td>
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
    <td><a href="#get_log_anomaly_detector"><CopyableCode code="get_log_anomaly_detector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the log anomaly detector that you specify. The KMS key ARN detected is valid.</td>
</tr>
<tr>
    <td><a href="#list_log_anomaly_detectors"><CopyableCode code="list_log_anomaly_detectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of the log anomaly detectors in the account.</td>
</tr>
<tr>
    <td><a href="#create_log_anomaly_detector"><CopyableCode code="create_log_anomaly_detector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupArnList"><code>logGroupArnList</code></a></td>
    <td></td>
    <td>Creates an anomaly detector that regularly scans one or more log groups and look for patterns and anomalies in the logs. An anomaly detector can help surface issues by automatically discovering anomalies in your log event traffic. An anomaly detector uses machine learning algorithms to scan log events and find patterns. A pattern is a shared text structure that recurs among your log fields. Patterns provide a useful tool for analyzing large sets of logs because a large number of log events can often be compressed into a few patterns. The anomaly detector uses pattern recognition to find anomalies, which are unusual log events. It uses the evaluationFrequency to compare current log events and patterns with trained baselines. Fields within a pattern are called tokens. Fields that vary within a pattern, such as a request ID or timestamp, are referred to as dynamic tokens and represented by &lt;*&gt;. The following is an example of a pattern: &#91;INFO&#93; Request time: &lt;*&gt; ms This pattern represents log events like &#91;INFO&#93; Request time: 327 ms and other similar log events that differ only by the number, in this csse 327. When the pattern is displayed, the different numbers are replaced by &lt;*&gt; Any parts of log events that are masked as sensitive data are not scanned for anomalies. For more information about masking sensitive data, see Help protect sensitive log data with masking.</td>
</tr>
<tr>
    <td><a href="#update_log_anomaly_detector"><CopyableCode code="update_log_anomaly_detector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-anomalyDetectorArn"><code>anomalyDetectorArn</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Updates an existing log anomaly detector.</td>
</tr>
<tr>
    <td><a href="#delete_log_anomaly_detector"><CopyableCode code="delete_log_anomaly_detector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified CloudWatch Logs anomaly detector.</td>
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
    defaultValue="get_log_anomaly_detector"
    values={[
        { label: 'get_log_anomaly_detector', value: 'get_log_anomaly_detector' },
        { label: 'list_log_anomaly_detectors', value: 'list_log_anomaly_detectors' }
    ]}
>
<TabItem value="get_log_anomaly_detector">

Retrieves information about the log anomaly detector that you specify. The KMS key ARN detected is valid.

```sql
SELECT
anomaly_detector_status,
anomaly_visibility_time,
creation_time_stamp,
detector_name,
evaluation_frequency,
filter_pattern,
kms_key_id,
last_modified_time_stamp,
log_group_arn_list
FROM aws.logs.log_anomaly_detectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_log_anomaly_detectors">

Retrieves a list of the log anomaly detectors in the account.

```sql
SELECT
anomaly_detector_arn,
anomaly_detector_status,
anomaly_visibility_time,
creation_time_stamp,
detector_name,
evaluation_frequency,
filter_pattern,
kms_key_id,
last_modified_time_stamp,
log_group_arn_list
FROM aws.logs.log_anomaly_detectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_log_anomaly_detector"
    values={[
        { label: 'create_log_anomaly_detector', value: 'create_log_anomaly_detector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_log_anomaly_detector">

Creates an anomaly detector that regularly scans one or more log groups and look for patterns and anomalies in the logs. An anomaly detector can help surface issues by automatically discovering anomalies in your log event traffic. An anomaly detector uses machine learning algorithms to scan log events and find patterns. A pattern is a shared text structure that recurs among your log fields. Patterns provide a useful tool for analyzing large sets of logs because a large number of log events can often be compressed into a few patterns. The anomaly detector uses pattern recognition to find anomalies, which are unusual log events. It uses the evaluationFrequency to compare current log events and patterns with trained baselines. Fields within a pattern are called tokens. Fields that vary within a pattern, such as a request ID or timestamp, are referred to as dynamic tokens and represented by &lt;*&gt;. The following is an example of a pattern: [INFO] Request time: &lt;*&gt; ms This pattern represents log events like [INFO] Request time: 327 ms and other similar log events that differ only by the number, in this csse 327. When the pattern is displayed, the different numbers are replaced by &lt;*&gt; Any parts of log events that are masked as sensitive data are not scanned for anomalies. For more information about masking sensitive data, see Help protect sensitive log data with masking.

```sql
INSERT INTO aws.logs.log_anomaly_detectors (
logGroupArnList,
detectorName,
evaluationFrequency,
filterPattern,
kmsKeyId,
anomalyVisibilityTime,
tags,
region
)
SELECT 
'{{ logGroupArnList }}' /* required */,
'{{ detectorName }}',
'{{ evaluationFrequency }}',
'{{ filterPattern }}',
'{{ kmsKeyId }}',
{{ anomalyVisibilityTime }},
'{{ tags }}',
'{{ region }}'
RETURNING
anomaly_detector_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: log_anomaly_detectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the log_anomaly_detectors resource.
    - name: logGroupArnList
      value:
        - "{{ logGroupArnList }}"
      description: |
        An array containing the ARN of the log group that this anomaly detector will watch. You can specify only one log group ARN.
    - name: detectorName
      value: "{{ detectorName }}"
      description: |
        A name for this anomaly detector.
    - name: evaluationFrequency
      value: "{{ evaluationFrequency }}"
      description: |
        Specifies how often the anomaly detector is to run and look for anomalies. Set this value according to the frequency that the log group receives new logs. For example, if the log group receives new log events every 10 minutes, then 15 minutes might be a good setting for evaluationFrequency .
      valid_values: ['ONE_MIN', 'FIVE_MIN', 'TEN_MIN', 'FIFTEEN_MIN', 'THIRTY_MIN', 'ONE_HOUR']
    - name: filterPattern
      value: "{{ filterPattern }}"
      description: |
        You can use this parameter to limit the anomaly detection model to examine only log events that match the pattern you specify here. For more information, see Filter and Pattern Syntax.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        Optionally assigns a KMS key to secure this anomaly detector and its findings. If a key is assigned, the anomalies found and the model used by this detector are encrypted at rest with the key. If a key is assigned to an anomaly detector, a user must have permissions for both this key and for the anomaly detector to retrieve information about the anomalies that it finds. Make sure the value provided is a valid KMS key ARN. For more information about using a KMS key and to see the required IAM policy, see Use a KMS key with an anomaly detector.
    - name: anomalyVisibilityTime
      value: {{ anomalyVisibilityTime }}
      description: |
        The number of days to have visibility on an anomaly. After this time period has elapsed for an anomaly, it will be automatically baselined and the anomaly detector will treat new occurrences of a similar anomaly as normal. Therefore, if you do not correct the cause of an anomaly during the time period specified in anomalyVisibilityTime, it will be considered normal going forward and will not be detected as an anomaly.
    - name: tags
      value: "{{ tags }}"
      description: |
        An optional list of key-value pairs to associate with the resource. For more information about tagging, see Tagging Amazon Web Services resources
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_log_anomaly_detector"
    values={[
        { label: 'update_log_anomaly_detector', value: 'update_log_anomaly_detector' }
    ]}
>
<TabItem value="update_log_anomaly_detector">

Updates an existing log anomaly detector.

```sql
UPDATE aws.logs.log_anomaly_detectors
SET 
anomalyDetectorArn = '{{ anomalyDetectorArn }}',
evaluationFrequency = '{{ evaluationFrequency }}',
filterPattern = '{{ filterPattern }}',
anomalyVisibilityTime = {{ anomalyVisibilityTime }},
enabled = {{ enabled }}
WHERE 
region = '{{ region }}' --required
AND anomalyDetectorArn = '{{ anomalyDetectorArn }}' --required
AND enabled = {{ enabled }} --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_log_anomaly_detector"
    values={[
        { label: 'delete_log_anomaly_detector', value: 'delete_log_anomaly_detector' }
    ]}
>
<TabItem value="delete_log_anomaly_detector">

Deletes the specified CloudWatch Logs anomaly detector.

```sql
DELETE FROM aws.logs.log_anomaly_detectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
