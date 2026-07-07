--- 
title: replication_task_assessment_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_task_assessment_runs
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

Creates, updates, deletes, gets or lists a <code>replication_task_assessment_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_task_assessment_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.replication_task_assessment_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_task_assessment_runs"
    values={[
        { label: 'describe_replication_task_assessment_runs', value: 'describe_replication_task_assessment_runs' }
    ]}
>
<TabItem value="describe_replication_task_assessment_runs">

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
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned for you to pass to a subsequent request. If you pass this token as the Marker value in a subsequent request, the response includes only records beyond the marker, up to the value specified in the request by MaxRecords.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskAssessmentRuns" /></td>
    <td><code>array</code></td>
    <td>One or more premigration assessment runs as specified by Filters.</td>
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
    <td><a href="#describe_replication_task_assessment_runs"><CopyableCode code="describe_replication_task_assessment_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of premigration assessment runs based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values. This operation doesn't return information about individual assessments. For this information, see the DescribeReplicationTaskIndividualAssessments operation.</td>
</tr>
<tr>
    <td><a href="#delete_replication_task_assessment_run"><CopyableCode code="delete_replication_task_assessment_run" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the record of a single premigration assessment run. This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</td>
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
    defaultValue="describe_replication_task_assessment_runs"
    values={[
        { label: 'describe_replication_task_assessment_runs', value: 'describe_replication_task_assessment_runs' }
    ]}
>
<TabItem value="describe_replication_task_assessment_runs">

Returns a paginated list of premigration assessment runs based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values. This operation doesn't return information about individual assessments. For this information, see the DescribeReplicationTaskIndividualAssessments operation.

```sql
SELECT
Marker,
ReplicationTaskAssessmentRuns
FROM aws.dms.replication_task_assessment_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replication_task_assessment_run"
    values={[
        { label: 'delete_replication_task_assessment_run', value: 'delete_replication_task_assessment_run' }
    ]}
>
<TabItem value="delete_replication_task_assessment_run">

Deletes the record of a single premigration assessment run. This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.

```sql
DELETE FROM aws.dms.replication_task_assessment_runs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
