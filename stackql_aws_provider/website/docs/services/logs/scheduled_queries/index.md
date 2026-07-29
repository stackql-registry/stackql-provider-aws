--- 
title: scheduled_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_queries
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

Creates, updates, deletes, gets or lists a <code>scheduled_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.scheduled_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scheduled_query"
    values={[
        { label: 'get_scheduled_query', value: 'get_scheduled_query' },
        { label: 'list_scheduled_queries', value: 'list_scheduled_queries' }
    ]}
>
<TabItem value="get_scheduled_query">

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
    <td>The name of the scheduled query. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-/.#&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the scheduled query was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the scheduled query.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for where query results are delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role used to execute the query and deliver results.</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_status" /></td>
    <td><code>string</code></td>
    <td>The status of the most recent execution of the scheduled query. (Running, InvalidQuery, Complete, Failed, Timeout)</td>
</tr>
<tr>
    <td><CopyableCode code="last_triggered_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the scheduled query was last executed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the scheduled query was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_identifiers" /></td>
    <td><code>array</code></td>
    <td>The log groups queried by the scheduled query.</td>
</tr>
<tr>
    <td><CopyableCode code="query_language" /></td>
    <td><code>string</code></td>
    <td>The query language used by the scheduled query. (CWLI, SQL, PPL)</td>
</tr>
<tr>
    <td><CopyableCode code="query_string" /></td>
    <td><code>string</code></td>
    <td>The query string executed by the scheduled query.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_end_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The end time for the scheduled query in Unix epoch format.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression" /></td>
    <td><code>string</code></td>
    <td>The cron expression that defines when the scheduled query runs.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_start_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The start time for the scheduled query in Unix epoch format.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_query_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the scheduled query.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time_offset" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time offset in seconds that defines the lookback period for the query.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the scheduled query. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>The timezone used for evaluating the schedule expression.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled query. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-/.#&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the scheduled query was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for where query results are delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_status" /></td>
    <td><code>string</code></td>
    <td>The status of the most recent execution. (Running, InvalidQuery, Complete, Failed, Timeout)</td>
</tr>
<tr>
    <td><CopyableCode code="last_triggered_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the scheduled query was last executed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the scheduled query was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression" /></td>
    <td><code>string</code></td>
    <td>The cron expression that defines when the scheduled query runs.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_query_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the scheduled query.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the scheduled query. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>The timezone used for evaluating the schedule expression.</td>
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
    <td><a href="#get_scheduled_query"><CopyableCode code="get_scheduled_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific scheduled query, including its configuration, execution status, and metadata.</td>
</tr>
<tr>
    <td><a href="#list_scheduled_queries"><CopyableCode code="list_scheduled_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all scheduled queries in your account and region. You can filter results by state to show only enabled or disabled queries.</td>
</tr>
<tr>
    <td><a href="#create_scheduled_query"><CopyableCode code="create_scheduled_query" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-queryLanguage"><code>queryLanguage</code></a>, <a href="#parameter-queryString"><code>queryString</code></a>, <a href="#parameter-scheduleExpression"><code>scheduleExpression</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a></td>
    <td></td>
    <td>Creates a scheduled query that runs CloudWatch Logs Insights queries at regular intervals. Scheduled queries enable proactive monitoring by automatically executing queries to detect patterns and anomalies in your log data. Query results can be delivered to Amazon S3 for analysis or further processing.</td>
</tr>
<tr>
    <td><a href="#update_scheduled_query"><CopyableCode code="update_scheduled_query" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-queryLanguage"><code>queryLanguage</code></a>, <a href="#parameter-queryString"><code>queryString</code></a>, <a href="#parameter-scheduleExpression"><code>scheduleExpression</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a></td>
    <td></td>
    <td>Updates an existing scheduled query with new configuration. This operation uses PUT semantics, allowing modification of query parameters, schedule, and destinations.</td>
</tr>
<tr>
    <td><a href="#delete_scheduled_query"><CopyableCode code="delete_scheduled_query" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a scheduled query and stops all future executions. This operation also removes any configured actions and associated resources.</td>
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
    defaultValue="get_scheduled_query"
    values={[
        { label: 'get_scheduled_query', value: 'get_scheduled_query' },
        { label: 'list_scheduled_queries', value: 'list_scheduled_queries' }
    ]}
>
<TabItem value="get_scheduled_query">

Retrieves details about a specific scheduled query, including its configuration, execution status, and metadata.

```sql
SELECT
name,
creation_time,
description,
destination_configuration,
execution_role_arn,
last_execution_status,
last_triggered_time,
last_updated_time,
log_group_identifiers,
query_language,
query_string,
schedule_end_time,
schedule_expression,
schedule_start_time,
scheduled_query_arn,
start_time_offset,
state,
timezone
FROM aws.logs.scheduled_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scheduled_queries">

Lists all scheduled queries in your account and region. You can filter results by state to show only enabled or disabled queries.

```sql
SELECT
name,
creation_time,
destination_configuration,
last_execution_status,
last_triggered_time,
last_updated_time,
schedule_expression,
scheduled_query_arn,
state,
timezone
FROM aws.logs.scheduled_queries
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

Creates a scheduled query that runs CloudWatch Logs Insights queries at regular intervals. Scheduled queries enable proactive monitoring by automatically executing queries to detect patterns and anomalies in your log data. Query results can be delivered to Amazon S3 for analysis or further processing.

```sql
INSERT INTO aws.logs.scheduled_queries (
name,
description,
queryLanguage,
queryString,
logGroupIdentifiers,
scheduleExpression,
timezone,
startTimeOffset,
destinationConfiguration,
scheduleStartTime,
scheduleEndTime,
executionRoleArn,
state,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ queryLanguage }}' /* required */,
'{{ queryString }}' /* required */,
'{{ logGroupIdentifiers }}',
'{{ scheduleExpression }}' /* required */,
'{{ timezone }}',
{{ startTimeOffset }},
'{{ destinationConfiguration }}',
{{ scheduleStartTime }},
{{ scheduleEndTime }},
'{{ executionRoleArn }}' /* required */,
'{{ state }}',
'{{ tags }}',
'{{ region }}'
RETURNING
scheduled_query_arn,
state
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
    - name: name
      value: "{{ name }}"
      description: |
        The name of the scheduled query. The name must be unique within your account and region. Valid characters are alphanumeric characters, hyphens, underscores, and periods. Length must be between 1 and 255 characters.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description for the scheduled query to help identify its purpose and functionality.
    - name: queryLanguage
      value: "{{ queryLanguage }}"
      description: |
        The query language to use for the scheduled query. Valid values are CWLI, PPL, and SQL.
      valid_values: ['CWLI', 'SQL', 'PPL']
    - name: queryString
      value: "{{ queryString }}"
      description: |
        The query string to execute. This is the same query syntax used in CloudWatch Logs Insights. Maximum length is 10,000 characters.
    - name: logGroupIdentifiers
      value:
        - "{{ logGroupIdentifiers }}"
      description: |
        An array of log group names or ARNs to query. You can specify between 1 and 50 log groups. Log groups can be identified by name or full ARN.
    - name: scheduleExpression
      value: "{{ scheduleExpression }}"
      description: |
        A cron expression that defines when the scheduled query runs. The expression uses standard cron syntax and supports minute-level precision. Maximum length is 256 characters.
    - name: timezone
      value: "{{ timezone }}"
      description: |
        The timezone for evaluating the schedule expression. This determines when the scheduled query executes relative to the specified timezone.
    - name: startTimeOffset
      value: {{ startTimeOffset }}
      description: |
        The time offset in seconds that defines the lookback period for the query. This determines how far back in time the query searches from the execution time.
    - name: destinationConfiguration
      description: |
        Configuration for where to deliver query results. Currently supports Amazon S3 destinations for storing query output.
      value:
        s3Configuration:
          destinationIdentifier: "{{ destinationIdentifier }}"
          roleArn: "{{ roleArn }}"
          ownerAccountId: "{{ ownerAccountId }}"
          kmsKeyId: "{{ kmsKeyId }}"
    - name: scheduleStartTime
      value: {{ scheduleStartTime }}
      description: |
        The start time for the scheduled query in Unix epoch format. The query will not execute before this time.
    - name: scheduleEndTime
      value: {{ scheduleEndTime }}
      description: |
        The end time for the scheduled query in Unix epoch format. The query will stop executing after this time.
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
      description: |
        The ARN of the IAM role that grants permissions to execute the query and deliver results to the specified destination. The role must have permissions to read from the specified log groups and write to the destination.
    - name: state
      value: "{{ state }}"
      description: |
        The initial state of the scheduled query. Valid values are ENABLED and DISABLED. Default is ENABLED.
      valid_values: ['ENABLED', 'DISABLED']
    - name: tags
      value: "{{ tags }}"
      description: |
        Key-value pairs to associate with the scheduled query for resource management and cost allocation.
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

Updates an existing scheduled query with new configuration. This operation uses PUT semantics, allowing modification of query parameters, schedule, and destinations.

```sql
UPDATE aws.logs.scheduled_queries
SET 
identifier = '{{ identifier }}',
description = '{{ description }}',
queryLanguage = '{{ queryLanguage }}',
queryString = '{{ queryString }}',
logGroupIdentifiers = '{{ logGroupIdentifiers }}',
scheduleExpression = '{{ scheduleExpression }}',
timezone = '{{ timezone }}',
startTimeOffset = {{ startTimeOffset }},
destinationConfiguration = '{{ destinationConfiguration }}',
scheduleStartTime = {{ scheduleStartTime }},
scheduleEndTime = {{ scheduleEndTime }},
executionRoleArn = '{{ executionRoleArn }}',
state = '{{ state }}'
WHERE 
region = '{{ region }}' --required
AND identifier = '{{ identifier }}' --required
AND queryLanguage = '{{ queryLanguage }}' --required
AND queryString = '{{ queryString }}' --required
AND scheduleExpression = '{{ scheduleExpression }}' --required
AND executionRoleArn = '{{ executionRoleArn }}' --required
RETURNING
name,
creation_time,
description,
destination_configuration,
execution_role_arn,
last_execution_status,
last_triggered_time,
last_updated_time,
log_group_identifiers,
query_language,
query_string,
schedule_end_time,
schedule_expression,
schedule_start_time,
scheduled_query_arn,
start_time_offset,
state,
timezone;
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

Deletes a scheduled query and stops all future executions. This operation also removes any configured actions and associated resources.

```sql
DELETE FROM aws.logs.scheduled_queries
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
