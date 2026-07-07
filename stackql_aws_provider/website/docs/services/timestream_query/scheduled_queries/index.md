--- 
title: scheduled_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_queries
  - timestream_query
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

Creates, updates, deletes, gets or lists a <code>scheduled_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_query.scheduled_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scheduled_query"
    values={[
        { label: 'describe_scheduled_query', value: 'describe_scheduled_query' },
        { label: 'list_scheduled_queries', value: 'list_scheduled_queries' }
    ]}
>
<TabItem value="describe_scheduled_query">

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
    <td>Scheduled query ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the scheduled query.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorReportConfiguration" /></td>
    <td><code>object</code></td>
    <td>Error-reporting configuration for the scheduled query.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>A customer provided KMS key used to encrypt the scheduled query resource.</td>
</tr>
<tr>
    <td><CopyableCode code="LastRunSummary" /></td>
    <td><code>object</code></td>
    <td>Runtime summary for the last scheduled query run.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the scheduled query. (pattern: &lt;code&gt;&#91;a-zA-Z0-9|!\-_*'\(\)&#93;(&#91;a-zA-Z0-9&#93;|&#91;!\-_*'\(\)\/.&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextInvocationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The next time the scheduled query is scheduled to run.</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Notification configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="PreviousInvocationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time the query was run.</td>
</tr>
<tr>
    <td><CopyableCode code="QueryString" /></td>
    <td><code>string</code></td>
    <td>The query to be run.</td>
</tr>
<tr>
    <td><CopyableCode code="RecentlyFailedRuns" /></td>
    <td><code>array</code></td>
    <td>Runtime summary for the last five failed scheduled query runs.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleConfiguration" /></td>
    <td><code>object</code></td>
    <td>Schedule configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduledQueryExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>IAM role that Timestream uses to run the schedule query.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>State of the scheduled query. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetConfiguration" /></td>
    <td><code>object</code></td>
    <td>Scheduled query target store configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scheduled_queries">

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
    <td>The Amazon Resource Name.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the scheduled query.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorReportConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration for scheduled query error reporting.</td>
</tr>
<tr>
    <td><CopyableCode code="LastRunStatus" /></td>
    <td><code>string</code></td>
    <td>Status of the last scheduled query run. (AUTO_TRIGGER_SUCCESS, AUTO_TRIGGER_FAILURE, MANUAL_TRIGGER_SUCCESS, MANUAL_TRIGGER_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled query. (pattern: &lt;code&gt;&#91;a-zA-Z0-9|!\-_*'\(\)&#93;(&#91;a-zA-Z0-9&#93;|&#91;!\-_*'\(\)\/.&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextInvocationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The next time the scheduled query is to be run.</td>
</tr>
<tr>
    <td><CopyableCode code="PreviousInvocationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the scheduled query was run.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>State of scheduled query. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetDestination" /></td>
    <td><code>object</code></td>
    <td>Target data source where final scheduled query result will be written.</td>
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
    <td><a href="#describe_scheduled_query"><CopyableCode code="describe_scheduled_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides detailed information about a scheduled query.</td>
</tr>
<tr>
    <td><a href="#list_scheduled_queries"><CopyableCode code="list_scheduled_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of all scheduled queries in the caller's Amazon account and Region. ListScheduledQueries is eventually consistent.</td>
</tr>
<tr>
    <td><a href="#create_scheduled_query"><CopyableCode code="create_scheduled_query" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryString"><code>QueryString</code></a>, <a href="#parameter-ScheduleConfiguration"><code>ScheduleConfiguration</code></a>, <a href="#parameter-NotificationConfiguration"><code>NotificationConfiguration</code></a>, <a href="#parameter-ScheduledQueryExecutionRoleArn"><code>ScheduledQueryExecutionRoleArn</code></a>, <a href="#parameter-ErrorReportConfiguration"><code>ErrorReportConfiguration</code></a></td>
    <td></td>
    <td>Create a scheduled query that will be run on your behalf at the configured schedule. Timestream assumes the execution role provided as part of the ScheduledQueryExecutionRoleArn parameter to run the query. You can use the NotificationConfiguration parameter to configure notification for your scheduled query operations.</td>
</tr>
<tr>
    <td><a href="#update_scheduled_query"><CopyableCode code="update_scheduled_query" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ScheduledQueryArn"><code>ScheduledQueryArn</code></a></td>
    <td></td>
    <td>Update a scheduled query.</td>
</tr>
<tr>
    <td><a href="#delete_scheduled_query"><CopyableCode code="delete_scheduled_query" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a given scheduled query. This is an irreversible operation.</td>
</tr>
<tr>
    <td><a href="#execute_scheduled_query"><CopyableCode code="execute_scheduled_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ScheduledQueryArn"><code>ScheduledQueryArn</code></a>, <a href="#parameter-InvocationTime"><code>InvocationTime</code></a></td>
    <td></td>
    <td>You can use this API to run a scheduled query manually. If you enabled QueryInsights, this API also returns insights and metrics related to the query that you executed as part of an Amazon SNS notification. QueryInsights helps with performance tuning of your query. For more information about QueryInsights, see Using query insights to optimize queries in Amazon Timestream.</td>
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
    defaultValue="describe_scheduled_query"
    values={[
        { label: 'describe_scheduled_query', value: 'describe_scheduled_query' },
        { label: 'list_scheduled_queries', value: 'list_scheduled_queries' }
    ]}
>
<TabItem value="describe_scheduled_query">

Provides detailed information about a scheduled query.

```sql
SELECT
Arn,
CreationTime,
ErrorReportConfiguration,
KmsKeyId,
LastRunSummary,
Name,
NextInvocationTime,
NotificationConfiguration,
PreviousInvocationTime,
QueryString,
RecentlyFailedRuns,
ScheduleConfiguration,
ScheduledQueryExecutionRoleArn,
State,
TargetConfiguration
FROM aws.timestream_query.scheduled_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scheduled_queries">

Gets a list of all scheduled queries in the caller's Amazon account and Region. ListScheduledQueries is eventually consistent.

```sql
SELECT
Arn,
CreationTime,
ErrorReportConfiguration,
LastRunStatus,
Name,
NextInvocationTime,
PreviousInvocationTime,
State,
TargetDestination
FROM aws.timestream_query.scheduled_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scheduled_query"
    values={[
        { label: 'create_scheduled_query', value: 'create_scheduled_query' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scheduled_query">

Create a scheduled query that will be run on your behalf at the configured schedule. Timestream assumes the execution role provided as part of the ScheduledQueryExecutionRoleArn parameter to run the query. You can use the NotificationConfiguration parameter to configure notification for your scheduled query operations.

```sql
INSERT INTO aws.timestream_query.scheduled_queries (
Name,
QueryString,
ScheduleConfiguration,
NotificationConfiguration,
TargetConfiguration,
ClientToken,
ScheduledQueryExecutionRoleArn,
Tags,
KmsKeyId,
ErrorReportConfiguration,
region
)
SELECT 
'{{ Name }}',
'{{ QueryString }}' /* required */,
'{{ ScheduleConfiguration }}' /* required */,
'{{ NotificationConfiguration }}' /* required */,
'{{ TargetConfiguration }}',
'{{ ClientToken }}',
'{{ ScheduledQueryExecutionRoleArn }}' /* required */,
'{{ Tags }}',
'{{ KmsKeyId }}',
'{{ ErrorReportConfiguration }}' /* required */,
'{{ region }}'
RETURNING
Arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduled_queries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scheduled_queries resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        Name of the scheduled query.
    - name: QueryString
      value: "{{ QueryString }}"
      description: |
        The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
    - name: ScheduleConfiguration
      description: |
        The schedule configuration for the query.
      value:
        ScheduleExpression: "{{ ScheduleExpression }}"
    - name: NotificationConfiguration
      description: |
        Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
      value:
        SnsConfiguration:
          TopicArn: "{{ TopicArn }}"
    - name: TargetConfiguration
      description: |
        Configuration used for writing the result of a query.
      value:
        TimestreamConfiguration:
          DatabaseName: "{{ DatabaseName }}"
          TableName: "{{ TableName }}"
          TimeColumn: "{{ TimeColumn }}"
          DimensionMappings:
            - Name: "{{ Name }}"
              DimensionValueType: "{{ DimensionValueType }}"
          MultiMeasureMappings:
            TargetMultiMeasureName: "{{ TargetMultiMeasureName }}"
            MultiMeasureAttributeMappings:
              - SourceColumn: "{{ SourceColumn }}"
                TargetMultiMeasureAttributeName: "{{ TargetMultiMeasureAttributeName }}"
                MeasureValueType: "{{ MeasureValueType }}"
          MixedMeasureMappings:
            - MeasureName: "{{ MeasureName }}"
              SourceColumn: "{{ SourceColumn }}"
              TargetMeasureName: "{{ TargetMeasureName }}"
              MeasureValueType: "{{ MeasureValueType }}"
              MultiMeasureAttributeMappings: "{{ MultiMeasureAttributeMappings }}"
          MeasureNameColumn: "{{ MeasureNameColumn }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request. If CreateScheduledQuery is called without a ClientToken, the Query SDK generates a ClientToken on your behalf. After 8 hours, any request with the same ClientToken is treated as a new request.
    - name: ScheduledQueryExecutionRoleArn
      value: "{{ ScheduledQueryExecutionRoleArn }}"
      description: |
        The ARN for the IAM role that Timestream will assume when running the scheduled query.
    - name: Tags
      description: |
        A list of key-value pairs to label the scheduled query.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/ If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
    - name: ErrorReportConfiguration
      description: |
        Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
      value:
        S3Configuration:
          BucketName: "{{ BucketName }}"
          ObjectKeyPrefix: "{{ ObjectKeyPrefix }}"
          EncryptionOption: "{{ EncryptionOption }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scheduled_query"
    values={[
        { label: 'update_scheduled_query', value: 'update_scheduled_query' }
    ]}
>
<TabItem value="update_scheduled_query">

Update a scheduled query.

```sql
UPDATE aws.timestream_query.scheduled_queries
SET 
ScheduledQueryArn = '{{ ScheduledQueryArn }}',
State = '{{ State }}'
WHERE 
region = '{{ region }}' --required
AND ScheduledQueryArn = '{{ ScheduledQueryArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scheduled_query"
    values={[
        { label: 'delete_scheduled_query', value: 'delete_scheduled_query' }
    ]}
>
<TabItem value="delete_scheduled_query">

Deletes a given scheduled query. This is an irreversible operation.

```sql
DELETE FROM aws.timestream_query.scheduled_queries
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_scheduled_query"
    values={[
        { label: 'execute_scheduled_query', value: 'execute_scheduled_query' }
    ]}
>
<TabItem value="execute_scheduled_query">

You can use this API to run a scheduled query manually. If you enabled QueryInsights, this API also returns insights and metrics related to the query that you executed as part of an Amazon SNS notification. QueryInsights helps with performance tuning of your query. For more information about QueryInsights, see Using query insights to optimize queries in Amazon Timestream.

```sql
EXEC aws.timestream_query.scheduled_queries.execute_scheduled_query 
@region='{{ region }}' --required 
@@json=
'{
"ScheduledQueryArn": "{{ ScheduledQueryArn }}", 
"InvocationTime": "{{ InvocationTime }}", 
"ClientToken": "{{ ClientToken }}", 
"QueryInsights": "{{ QueryInsights }}"
}'
;
```
</TabItem>
</Tabs>
