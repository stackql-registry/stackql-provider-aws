--- 
title: replication_task_assessment_results
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_task_assessment_results
  - dms
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

Creates, updates, deletes, gets or lists a <code>replication_task_assessment_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_task_assessment_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.replication_task_assessment_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_task_assessment_results"
    values={[
        { label: 'describe_replication_task_assessment_results', value: 'describe_replication_task_assessment_results' }
    ]}
>
<TabItem value="describe_replication_task_assessment_results">

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
    <td><CopyableCode code="AssessmentResults" /></td>
    <td><code>string</code></td>
    <td>The task assessment results in JSON format. The response object only contains this field if you provide DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="AssessmentResultsFile" /></td>
    <td><code>string</code></td>
    <td>The file containing the results of the task assessment.</td>
</tr>
<tr>
    <td><CopyableCode code="AssessmentStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the task assessment.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replication task.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskIdentifier" /></td>
    <td><code>string</code></td>
    <td>The replication task identifier of the task on which the task assessment was run.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskLastAssessmentDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the task assessment was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="S3ObjectUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the S3 object containing the task assessment results. The response object only contains this field if you provide DescribeReplicationTaskAssessmentResultsMessage$ReplicationTaskArn in the request.</td>
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
    <td><a href="#describe_replication_task_assessment_results"><CopyableCode code="describe_replication_task_assessment_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results. For more information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide.</td>
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
    defaultValue="describe_replication_task_assessment_results"
    values={[
        { label: 'describe_replication_task_assessment_results', value: 'describe_replication_task_assessment_results' }
    ]}
>
<TabItem value="describe_replication_task_assessment_results">

Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results. For more information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide.

```sql
SELECT
AssessmentResults,
AssessmentResultsFile,
AssessmentStatus,
ReplicationTaskArn,
ReplicationTaskIdentifier,
ReplicationTaskLastAssessmentDate,
S3ObjectUrl
FROM aws.dms.replication_task_assessment_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
