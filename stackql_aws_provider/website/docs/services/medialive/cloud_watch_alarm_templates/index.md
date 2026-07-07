--- 
title: cloud_watch_alarm_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_watch_alarm_templates
  - medialive
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

Creates, updates, deletes, gets or lists a <code>cloud_watch_alarm_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_watch_alarm_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.cloud_watch_alarm_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_watch_alarm_template"
    values={[
        { label: 'get_cloud_watch_alarm_template', value: 'get_cloud_watch_alarm_template' },
        { label: 'list_cloud_watch_alarm_templates', value: 'list_cloud_watch_alarm_templates' }
    ]}
>
<TabItem value="get_cloud_watch_alarm_template">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template's ARN (Amazon Resource Name)</td>
</tr>
<tr>
    <td><CopyableCode code="ComparisonOperator" /></td>
    <td><code>string</code></td>
    <td>The comparison operator used to compare the specified statistic and the threshold. (GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="DatapointsToAlarm" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integerMin1</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin0Max1024</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationPeriods" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integerMin1</td>
</tr>
<tr>
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin7Max11PatternAws097</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin7Max11PatternAws097</td>
</tr>
<tr>
    <td><CopyableCode code="MetricName" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMax64</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max255PatternS</td>
</tr>
<tr>
    <td><CopyableCode code="Period" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integerMin10Max86400</td>
</tr>
<tr>
    <td><CopyableCode code="Statistic" /></td>
    <td><code>string</code></td>
    <td>The statistic to apply to the alarm's metric data. (SampleCount, Average, Sum, Minimum, Maximum)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="TargetResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type this template should dynamically generate cloudwatch metric alarms for. (CLOUDFRONT_DISTRIBUTION, MEDIALIVE_MULTIPLEX, MEDIALIVE_CHANNEL, MEDIALIVE_INPUT_DEVICE, MEDIAPACKAGE_CHANNEL, MEDIAPACKAGE_ORIGIN_ENDPOINT, MEDIACONNECT_FLOW, S3_BUCKET, MEDIATAILOR_PLAYBACK_CONFIGURATION)</td>
</tr>
<tr>
    <td><CopyableCode code="Threshold" /></td>
    <td><code>number (double)</code></td>
    <td>Placeholder documentation for __double</td>
</tr>
<tr>
    <td><CopyableCode code="TreatMissingData" /></td>
    <td><code>string</code></td>
    <td>Specifies how missing data points are treated when evaluating the alarm's condition. (notBreaching, breaching, ignore, missing)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cloud_watch_alarm_templates">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template's ARN (Amazon Resource Name)</td>
</tr>
<tr>
    <td><CopyableCode code="ComparisonOperator" /></td>
    <td><code>string</code></td>
    <td>The comparison operator used to compare the specified statistic and the threshold. (GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, LessThanOrEqualToThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="DatapointsToAlarm" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integerMin1</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin0Max1024</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationPeriods" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integerMin1</td>
</tr>
<tr>
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`</td>
</tr>
<tr>
    <td><CopyableCode code="MetricName" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMax64</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Placeholder documentation for __timestampIso8601</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __stringMin1Max255PatternS</td>
</tr>
<tr>
    <td><CopyableCode code="Period" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integerMin10Max86400</td>
</tr>
<tr>
    <td><CopyableCode code="Statistic" /></td>
    <td><code>string</code></td>
    <td>The statistic to apply to the alarm's metric data. (SampleCount, Average, Sum, Minimum, Maximum)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="TargetResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type this template should dynamically generate cloudwatch metric alarms for. (CLOUDFRONT_DISTRIBUTION, MEDIALIVE_MULTIPLEX, MEDIALIVE_CHANNEL, MEDIALIVE_INPUT_DEVICE, MEDIAPACKAGE_CHANNEL, MEDIAPACKAGE_ORIGIN_ENDPOINT, MEDIACONNECT_FLOW, S3_BUCKET, MEDIATAILOR_PLAYBACK_CONFIGURATION)</td>
</tr>
<tr>
    <td><CopyableCode code="Threshold" /></td>
    <td><code>number (double)</code></td>
    <td>Placeholder documentation for __double</td>
</tr>
<tr>
    <td><CopyableCode code="TreatMissingData" /></td>
    <td><code>string</code></td>
    <td>Specifies how missing data points are treated when evaluating the alarm's condition. (notBreaching, breaching, ignore, missing)</td>
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
    <td><a href="#get_cloud_watch_alarm_template"><CopyableCode code="get_cloud_watch_alarm_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified cloudwatch alarm template.</td>
</tr>
<tr>
    <td><a href="#list_cloud_watch_alarm_templates"><CopyableCode code="list_cloud_watch_alarm_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-groupIdentifier"><code>groupIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-signalMapIdentifier"><code>signalMapIdentifier</code></a></td>
    <td>Lists cloudwatch alarm templates.</td>
</tr>
<tr>
    <td><a href="#create_cloud_watch_alarm_template"><CopyableCode code="create_cloud_watch_alarm_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ComparisonOperator"><code>ComparisonOperator</code></a>, <a href="#parameter-EvaluationPeriods"><code>EvaluationPeriods</code></a>, <a href="#parameter-GroupIdentifier"><code>GroupIdentifier</code></a>, <a href="#parameter-MetricName"><code>MetricName</code></a>, <a href="#parameter-TargetResourceType"><code>TargetResourceType</code></a>, <a href="#parameter-TreatMissingData"><code>TreatMissingData</code></a></td>
    <td></td>
    <td>Creates a cloudwatch alarm template to dynamically generate cloudwatch metric alarms on targeted resource types.</td>
</tr>
<tr>
    <td><a href="#update_cloud_watch_alarm_template"><CopyableCode code="update_cloud_watch_alarm_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified cloudwatch alarm template.</td>
</tr>
<tr>
    <td><a href="#delete_cloud_watch_alarm_template"><CopyableCode code="delete_cloud_watch_alarm_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cloudwatch alarm template.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template's identifier. Can be either be its id or current name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-groupIdentifier">
    <td><CopyableCode code="groupIdentifier" /></td>
    <td><code>string</code></td>
    <td>A cloudwatch alarm template group's identifier. Can be either be its id or current name.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to retrieve the next set of results in paginated list responses.</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Represents the scope of a resource, with options for all scopes, AWS provided resources, or local resources.</td>
</tr>
<tr id="parameter-signalMapIdentifier">
    <td><CopyableCode code="signalMapIdentifier" /></td>
    <td><code>string</code></td>
    <td>A signal map's identifier. Can be either be its id or current name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cloud_watch_alarm_template"
    values={[
        { label: 'get_cloud_watch_alarm_template', value: 'get_cloud_watch_alarm_template' },
        { label: 'list_cloud_watch_alarm_templates', value: 'list_cloud_watch_alarm_templates' }
    ]}
>
<TabItem value="get_cloud_watch_alarm_template">

Retrieves the specified cloudwatch alarm template.

```sql
SELECT
Arn,
ComparisonOperator,
CreatedAt,
DatapointsToAlarm,
Description,
EvaluationPeriods,
GroupId,
Id,
MetricName,
ModifiedAt,
Name,
Period,
Statistic,
Tags,
TargetResourceType,
Threshold,
TreatMissingData
FROM aws.medialive.cloud_watch_alarm_templates
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cloud_watch_alarm_templates">

Lists cloudwatch alarm templates.

```sql
SELECT
Arn,
ComparisonOperator,
CreatedAt,
DatapointsToAlarm,
Description,
EvaluationPeriods,
GroupId,
Id,
MetricName,
ModifiedAt,
Name,
Period,
Statistic,
Tags,
TargetResourceType,
Threshold,
TreatMissingData
FROM aws.medialive.cloud_watch_alarm_templates
WHERE region = '{{ region }}' -- required
AND groupIdentifier = '{{ groupIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND scope = '{{ scope }}'
AND signalMapIdentifier = '{{ signalMapIdentifier }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_watch_alarm_template"
    values={[
        { label: 'create_cloud_watch_alarm_template', value: 'create_cloud_watch_alarm_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_watch_alarm_template">

Creates a cloudwatch alarm template to dynamically generate cloudwatch metric alarms on targeted resource types.

```sql
INSERT INTO aws.medialive.cloud_watch_alarm_templates (
ComparisonOperator,
DatapointsToAlarm,
Description,
EvaluationPeriods,
GroupIdentifier,
MetricName,
Name,
Period,
Statistic,
Tags,
TargetResourceType,
Threshold,
TreatMissingData,
RequestId,
region
)
SELECT 
'{{ ComparisonOperator }}' /* required */,
{{ DatapointsToAlarm }},
'{{ Description }}',
{{ EvaluationPeriods }} /* required */,
'{{ GroupIdentifier }}' /* required */,
'{{ MetricName }}' /* required */,
'{{ Name }}',
{{ Period }},
'{{ Statistic }}',
'{{ Tags }}',
'{{ TargetResourceType }}' /* required */,
{{ Threshold }},
'{{ TreatMissingData }}' /* required */,
'{{ RequestId }}',
'{{ region }}'
RETURNING
Arn,
ComparisonOperator,
CreatedAt,
DatapointsToAlarm,
Description,
EvaluationPeriods,
GroupId,
Id,
MetricName,
ModifiedAt,
Name,
Period,
Statistic,
Tags,
TargetResourceType,
Threshold,
TreatMissingData
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_watch_alarm_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_watch_alarm_templates resource.
    - name: ComparisonOperator
      value: "{{ ComparisonOperator }}"
      description: |
        The comparison operator used to compare the specified statistic and the threshold.
      valid_values: ['GreaterThanOrEqualToThreshold', 'GreaterThanThreshold', 'LessThanThreshold', 'LessThanOrEqualToThreshold']
    - name: DatapointsToAlarm
      value: {{ DatapointsToAlarm }}
      description: |
        Placeholder documentation for __integerMin1
    - name: Description
      value: "{{ Description }}"
      description: |
        Placeholder documentation for __stringMin0Max1024
    - name: EvaluationPeriods
      value: {{ EvaluationPeriods }}
      description: |
        Placeholder documentation for __integerMin1
    - name: GroupIdentifier
      value: "{{ GroupIdentifier }}"
      description: |
        Placeholder documentation for __stringPatternS
    - name: MetricName
      value: "{{ MetricName }}"
      description: |
        Placeholder documentation for __stringMax64
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __stringMin1Max255PatternS
    - name: Period
      value: {{ Period }}
      description: |
        Placeholder documentation for __integerMin10Max86400
    - name: Statistic
      value: "{{ Statistic }}"
      description: |
        The statistic to apply to the alarm's metric data.
      valid_values: ['SampleCount', 'Average', 'Sum', 'Minimum', 'Maximum']
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Represents the tags associated with a resource.
    - name: TargetResourceType
      value: "{{ TargetResourceType }}"
      description: |
        The resource type this template should dynamically generate cloudwatch metric alarms for.
      valid_values: ['CLOUDFRONT_DISTRIBUTION', 'MEDIALIVE_MULTIPLEX', 'MEDIALIVE_CHANNEL', 'MEDIALIVE_INPUT_DEVICE', 'MEDIAPACKAGE_CHANNEL', 'MEDIAPACKAGE_ORIGIN_ENDPOINT', 'MEDIACONNECT_FLOW', 'S3_BUCKET', 'MEDIATAILOR_PLAYBACK_CONFIGURATION']
    - name: Threshold
      value: {{ Threshold }}
      description: |
        Placeholder documentation for __double
    - name: TreatMissingData
      value: "{{ TreatMissingData }}"
      description: |
        Specifies how missing data points are treated when evaluating the alarm's condition.
      valid_values: ['notBreaching', 'breaching', 'ignore', 'missing']
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __stringMin1Max256PatternS
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cloud_watch_alarm_template"
    values={[
        { label: 'update_cloud_watch_alarm_template', value: 'update_cloud_watch_alarm_template' }
    ]}
>
<TabItem value="update_cloud_watch_alarm_template">

Updates the specified cloudwatch alarm template.

```sql
UPDATE aws.medialive.cloud_watch_alarm_templates
SET 
ComparisonOperator = '{{ ComparisonOperator }}',
DatapointsToAlarm = {{ DatapointsToAlarm }},
Description = '{{ Description }}',
EvaluationPeriods = {{ EvaluationPeriods }},
GroupIdentifier = '{{ GroupIdentifier }}',
MetricName = '{{ MetricName }}',
Name = '{{ Name }}',
Period = {{ Period }},
Statistic = '{{ Statistic }}',
TargetResourceType = '{{ TargetResourceType }}',
Threshold = {{ Threshold }},
TreatMissingData = '{{ TreatMissingData }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
ComparisonOperator,
CreatedAt,
DatapointsToAlarm,
Description,
EvaluationPeriods,
GroupId,
Id,
MetricName,
ModifiedAt,
Name,
Period,
Statistic,
Tags,
TargetResourceType,
Threshold,
TreatMissingData;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cloud_watch_alarm_template"
    values={[
        { label: 'delete_cloud_watch_alarm_template', value: 'delete_cloud_watch_alarm_template' }
    ]}
>
<TabItem value="delete_cloud_watch_alarm_template">

Deletes a cloudwatch alarm template.

```sql
DELETE FROM aws.medialive.cloud_watch_alarm_templates
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
