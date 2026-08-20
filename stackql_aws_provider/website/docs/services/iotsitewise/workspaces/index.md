--- 
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>workspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.workspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace"
    values={[
        { label: 'describe_workspace', value: 'describe_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' }
    ]}
>
<TabItem value="describe_workspace">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the workspace was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration information for the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the workspace was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the workspace. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_description" /></td>
    <td><code>string</code></td>
    <td>The description of the workspace. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_status" /></td>
    <td><code>object</code></td>
    <td>The status of the workspace, which contains the state and any error message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workspaces">

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
    <td>The name of the workspace. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the workspace. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the workspace was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the workspace was last updated, in Unix epoch time.</td>
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
    <td><a href="#describe_workspace"><CopyableCode code="describe_workspace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a workspace.</td>
</tr>
<tr>
    <td><a href="#list_workspaces"><CopyableCode code="list_workspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of workspaces. Use the nextToken parameter to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#create_workspace"><CopyableCode code="create_workspace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a>, <a href="#parameter-encryptionConfiguration"><code>encryptionConfiguration</code></a></td>
    <td></td>
    <td>Creates a workspace in IoT SiteWise. A workspace isolates its resources, such as datasets, time series, pipelines, and tasks, and their data from other workspaces, and has its own quotas and throttling limits. You must specify an encryption configuration when you create a workspace. The operation returns immediately with the workspace in the CREATING state. Provisioning completes asynchronously, after which the workspace state is ACTIVE, or FAILED if provisioning doesn't complete.</td>
</tr>
<tr>
    <td><a href="#update_workspace"><CopyableCode code="update_workspace" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a workspace. You can update only workspaces in the ACTIVE or FAILED state. Fields that you omit from the request are left unchanged. To recover a workspace in the FAILED state, call this operation and supply its encryption configuration again.</td>
</tr>
<tr>
    <td><a href="#delete_workspace"><CopyableCode code="delete_workspace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a workspace. Before you delete a workspace, you must delete all resources contained in or associated with the workspace, such as datasets, time series, pipelines, and tasks.</td>
</tr>
<tr>
    <td><a href="#batch_associate_data_segments_to_dataset"><CopyableCode code="batch_associate_data_segments_to_dataset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a>, <a href="#parameter-associateDataSegmentEntries"><code>associateDataSegmentEntries</code></a></td>
    <td></td>
    <td>Associates a batch of data segments with a curated dataset. Data segments are time-bounded slices of time series data selected from source session datasets. Data segments that belong to the same time series can't overlap in time, regardless of which dataset they belong to.</td>
</tr>
<tr>
    <td><a href="#batch_disassociate_data_segments_from_dataset"><CopyableCode code="batch_disassociate_data_segments_from_dataset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a>, <a href="#parameter-disassociateDataSegmentEntries"><code>disassociateDataSegmentEntries</code></a></td>
    <td></td>
    <td>Disassociates a batch of data segments from a curated dataset. Disassociating a data segment doesn't delete the underlying data in the source session dataset.</td>
</tr>
<tr>
    <td><a href="#cancel_enrichment_job"><CopyableCode code="cancel_enrichment_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a running or pending enrichment job. This is an idempotent operation—calling it multiple times with the same jobId is safe and returns the current status. Behavior Jobs in PENDING or RUNNING status transition to CANCELLED Jobs in RUNNING state may not be cancellable once they have progressed to certain processing stages Jobs already in terminal states (COMPLETED, FAILED, TIMED_OUT) cannot be cancelled; the operation returns a ConflictingOperationException Cancelling an already-CANCELLED job is a no-op and returns the current status (idempotent behavior) The API responds immediately after recording the cancellation Cleanup of job resources happens asynchronously in the background When to Cancel Cancel a job when: The job is taking longer than expected The job was created with incorrect parameters You no longer need the results Idempotency You can safely retry cancellation requests. Calling CancelEnrichmentJob multiple times for the same job returns the current status without error as long as the job is not in a terminal state other than CANCELLED.</td>
</tr>
<tr>
    <td><a href="#cancel_query"><CopyableCode code="cancel_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a running query.</td>
</tr>
<tr>
    <td><a href="#start_query"><CopyableCode code="start_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryStatement"><code>queryStatement</code></a></td>
    <td></td>
    <td>Starts an asynchronous SQL query against workspace telemetry, annotations, data segment, and dataset data.</td>
</tr>
<tr>
    <td><a href="#start_search"><CopyableCode code="start_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryStatement"><code>queryStatement</code></a></td>
    <td></td>
    <td>Starts an asynchronous search over the data in a workspace. The search runs in the background; the response returns immediately with a searchId and an initial status of QUEUED. Use DescribeSearch to poll for completion and GetSearchResults to retrieve the results once the search reaches SUCCEEDED. The request is idempotent on clientToken: repeating a call with the same token returns the original search instead of starting a new one.</td>
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
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the curated dataset to disassociate data segments from.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the enrichment job to cancel. This is the jobId returned by CreateEnrichmentJob.</td>
</tr>
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the query execution to cancel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace whose data is searched.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure that the request is idempotent. If you retry a request that completed successfully using the same client token, the retry succeeds without performing any further actions.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_workspace"
    values={[
        { label: 'describe_workspace', value: 'describe_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' }
    ]}
>
<TabItem value="describe_workspace">

Retrieves information about a workspace.

```sql
SELECT
created_at,
encryption_configuration,
updated_at,
workspace_arn,
workspace_description,
workspace_name,
workspace_status
FROM aws.iotsitewise.workspaces
WHERE workspace_name = '{{ workspace_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workspaces">

Retrieves a paginated list of workspaces. Use the nextToken parameter to retrieve additional results.

```sql
SELECT
name,
arn,
created_at,
status,
updated_at
FROM aws.iotsitewise.workspaces
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspace"
    values={[
        { label: 'create_workspace', value: 'create_workspace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspace">

Creates a workspace in IoT SiteWise. A workspace isolates its resources, such as datasets, time series, pipelines, and tasks, and their data from other workspaces, and has its own quotas and throttling limits. You must specify an encryption configuration when you create a workspace. The operation returns immediately with the workspace in the CREATING state. Provisioning completes asynchronously, after which the workspace state is ACTIVE, or FAILED if provisioning doesn't complete.

```sql
INSERT INTO aws.iotsitewise.workspaces (
workspaceName,
workspaceDescription,
encryptionConfiguration,
tags,
clientToken,
region
)
SELECT 
'{{ workspaceName }}' /* required */,
'{{ workspaceDescription }}',
'{{ encryptionConfiguration }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
workspace_arn,
workspace_name,
workspace_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspaces resource.
    - name: workspaceName
      value: "{{ workspaceName }}"
    - name: workspaceDescription
      value: "{{ workspaceDescription }}"
    - name: encryptionConfiguration
      description: |
        Contains the encryption configuration for a workspace.
      value:
        encryptionType: "{{ encryptionType }}"
        kmsKeyId: "{{ kmsKeyId }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workspace"
    values={[
        { label: 'update_workspace', value: 'update_workspace' }
    ]}
>
<TabItem value="update_workspace">

Updates a workspace. You can update only workspaces in the ACTIVE or FAILED state. Fields that you omit from the request are left unchanged. To recover a workspace in the FAILED state, call this operation and supply its encryption configuration again.

```sql
UPDATE aws.iotsitewise.workspaces
SET 
workspaceDescription = '{{ workspaceDescription }}',
encryptionConfiguration = '{{ encryptionConfiguration }}',
clientToken = '{{ clientToken }}'
WHERE 
workspace_name = '{{ workspace_name }}' --required
AND region = '{{ region }}' --required
RETURNING
workspace_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace"
    values={[
        { label: 'delete_workspace', value: 'delete_workspace' }
    ]}
>
<TabItem value="delete_workspace">

Deletes a workspace. Before you delete a workspace, you must delete all resources contained in or associated with the workspace, such as datasets, time series, pipelines, and tasks.

```sql
DELETE FROM aws.iotsitewise.workspaces
WHERE workspace_name = '{{ workspace_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_associate_data_segments_to_dataset"
    values={[
        { label: 'batch_associate_data_segments_to_dataset', value: 'batch_associate_data_segments_to_dataset' },
        { label: 'batch_disassociate_data_segments_from_dataset', value: 'batch_disassociate_data_segments_from_dataset' },
        { label: 'cancel_enrichment_job', value: 'cancel_enrichment_job' },
        { label: 'cancel_query', value: 'cancel_query' },
        { label: 'start_query', value: 'start_query' },
        { label: 'start_search', value: 'start_search' }
    ]}
>
<TabItem value="batch_associate_data_segments_to_dataset">

Associates a batch of data segments with a curated dataset. Data segments are time-bounded slices of time series data selected from source session datasets. Data segments that belong to the same time series can't overlap in time, regardless of which dataset they belong to.

```sql
EXEC aws.iotsitewise.workspaces.batch_associate_data_segments_to_dataset 
@dataset_id='{{ dataset_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"workspaceName": "{{ workspaceName }}", 
"associateDataSegmentEntries": "{{ associateDataSegmentEntries }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="batch_disassociate_data_segments_from_dataset">

Disassociates a batch of data segments from a curated dataset. Disassociating a data segment doesn't delete the underlying data in the source session dataset.

```sql
EXEC aws.iotsitewise.workspaces.batch_disassociate_data_segments_from_dataset 
@dataset_id='{{ dataset_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"workspaceName": "{{ workspaceName }}", 
"disassociateDataSegmentEntries": "{{ disassociateDataSegmentEntries }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="cancel_enrichment_job">

Cancels a running or pending enrichment job. This is an idempotent operation—calling it multiple times with the same jobId is safe and returns the current status. Behavior Jobs in PENDING or RUNNING status transition to CANCELLED Jobs in RUNNING state may not be cancellable once they have progressed to certain processing stages Jobs already in terminal states (COMPLETED, FAILED, TIMED_OUT) cannot be cancelled; the operation returns a ConflictingOperationException Cancelling an already-CANCELLED job is a no-op and returns the current status (idempotent behavior) The API responds immediately after recording the cancellation Cleanup of job resources happens asynchronously in the background When to Cancel Cancel a job when: The job is taking longer than expected The job was created with incorrect parameters You no longer need the results Idempotency You can safely retry cancellation requests. Calling CancelEnrichmentJob multiple times for the same job returns the current status without error as long as the job is not in a terminal state other than CANCELLED.

```sql
EXEC aws.iotsitewise.workspaces.cancel_enrichment_job 
@workspace_name='{{ workspace_name }}' --required, 
@job_id='{{ job_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="cancel_query">

Cancels a running query.

```sql
EXEC aws.iotsitewise.workspaces.cancel_query 
@workspace_name='{{ workspace_name }}' --required, 
@query_id='{{ query_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_query">

Starts an asynchronous SQL query against workspace telemetry, annotations, data segment, and dataset data.

```sql
EXEC aws.iotsitewise.workspaces.start_query 
@workspace_name='{{ workspace_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"queryStatement": "{{ queryStatement }}"
}'
;
```
</TabItem>
<TabItem value="start_search">

Starts an asynchronous search over the data in a workspace. The search runs in the background; the response returns immediately with a searchId and an initial status of QUEUED. Use DescribeSearch to poll for completion and GetSearchResults to retrieve the results once the search reaches SUCCEEDED. The request is idempotent on clientToken: repeating a call with the same token returns the original search instead of starting a new one.

```sql
EXEC aws.iotsitewise.workspaces.start_search 
@workspace_name='{{ workspace_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"queryStatement": "{{ queryStatement }}", 
"clientToken": "{{ clientToken }}", 
"searchType": "{{ searchType }}", 
"searchFilters": "{{ searchFilters }}", 
"groupId": "{{ groupId }}"
}'
;
```
</TabItem>
</Tabs>
